import {initializeApp} from 'firebase/app';
import {collection, getDocs,doc,getDoc, getFirestore, query, where} from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBtWp9Gt1Mu_c78Y9m78bQC8_-wducY1Y8",
    authDomain: "kanchivaram-4f387.firebaseapp.com",
    projectId: "kanchivaram-4f387",
    storageBucket: "kanchivaram-4f387.appspot.com",
    messagingSenderId: "87195945574",
    appId: "1:87195945574:web:2250ba5b68260fb73a7ba7",
    measurementId: "G-JYNGNN19CX"
};
export default firebaseConfig;
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const fetchProductsByCategory = async (category) => {
    try {
        const q = query(collection(db, "products"), where("categories", "==", category));
        const querySnapshot = await getDocs(q);

        console.log('querySnapshot', querySnapshot);

        return querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
    }
};

export const fetchProductData = async (code) => {
    try {
        const productDocRef = query(collection(db, "products"), where("code", "==", code));
        const productDocSnap = await getDocs(productDocRef);

        console.log('productDocSnap', productDocSnap);

        // Check if any document matches the code
        if (productDocSnap.docs.length > 0) {
            const firstDoc = productDocSnap.docs[0];
            return { id: firstDoc.id, ...firstDoc.data() };
        } else {
            console.error('Product not found for code:', code);
            return null;
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
        return null;
    }
};

export const fetchProductsByPriceRange = async (lowerLimit, upperLimit) => {
    try {
        const q = query(
            collection(db, "products"),
            where("mrp", ">=", lowerLimit),
            where("mrp", "<=", upperLimit)
        );
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching products by price range:', error);
        return [];
    }
};


import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/storage';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtWp9Gt1Mu_c78Y9m78bQC8_-wducY1Y8",
    authDomain: "kanchivaram-4f387.firebaseapp.com",
    projectId: "kanchivaram-4f387",
    storageBucket: "kanchivaram-4f387.appspot.com",
    messagingSenderId: "87195945574",
    appId: "1:87195945574:web:2250ba5b68260fb73a7ba7",
    measurementId: "G-JYNGNN19CX"
};

const app = initializeApp(firebaseConfig);


// Export Firestore
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


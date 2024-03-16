import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore, query, where, addDoc} from 'firebase/firestore';
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";

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
const functions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
    connectFunctionsEmulator(functions, "localhost", 5001);
}

export const getCallBackUrl = () => process.env.NODE_ENV === "development" ? "http://127.0.0.1:5001/kanchivaram-4f387/us-central1/verifyPaymentToken" : "todo.com";

export const db = getFirestore(app);

export const getPaymentToken = httpsCallable(functions, 'getPaymentToken');
export const verifyPaymentToken = httpsCallable(functions, 'verifyPaymentToken');

export const fetchProductsByCategory = async (category) => {
    try {
        const q = query(collection(db, "products"), where("categories", "==", category));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                code: data.code,
                image: data.image,
                name: data.name,
                mrp: data.mrp
            };
        });
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
    }
};


export const fetchProductData = async (code) => {
    try {
        const productDocRef = query(collection(db, "products"), where("code", "==", code));
        const productDocSnap = await getDocs(productDocRef);

        // Check if any document matches the code
        if (productDocSnap.docs.length > 0) {
            const firstDoc = productDocSnap.docs[0];
            const data = firstDoc.data();
            return {
                id: firstDoc.id,
                code: data.code,
                image: data.image,
                name: data.name,
                mrp: data.mrp,
                description: data.description,
                color: data.color,
                fabric: data.fabric,
                height: data.height,
                weight: data.weight,
                categories: data.categories,
            };
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
        const data = query(
            collection(db, "products"),
            where("mrp", ">=", lowerLimit),
            where("mrp", "<=", upperLimit)
        );
        const querySnapshot = await getDocs(data);

        return querySnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
                id: doc.id,
                code: data.code,
                image: data.image,
                name: data.name,
                mrp: data.mrp
            };
        });
    } catch (error) {
        console.error('Error fetching products by price range:', error);
        return [];
    }
};


 // checkout page
export const addOrderToFirestore = async (formData) => {
    try {
        const docRef = await addDoc(collection(db, 'orders'), formData);
        console.log('Order added with ID: ', docRef.id);
        return docRef.id;
    } catch (e) {
        console.error('Error adding order: ', e);
        throw e;
    }
};

export const fetchOrdersByMobile = async (mobile) => {
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("mobile", "==", mobile));
    try {
        const querySnapshot = await getDocs(q);
        const orders = [];
        querySnapshot.forEach((doc) => {
            orders.push({ id: doc.id, ...doc.data() });
        });
        return orders;
    } catch (error) {
        console.error("Error fetching orders: ", error);
        throw error;
    }
};
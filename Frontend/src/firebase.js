import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCBgZmxqcVOX6uhmCxlYISmE8shIwhHJzQ",
    authDomain: "nwconf2023.firebaseapp.com",
    projectId: "nwconf2023",
    storageBucket: "nwconf2023.appspot.com",
    messagingSenderId: "95550327697",
    appId: "1:95550327697:web:42898318ee7ec26a9ce830",
    measurementId: "G-XT6S761638"
};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
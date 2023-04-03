const express = require("express");
const app = express();

const multer = require("multer");

const firebase = require("firebase/app");
const { initializeApp } = require("firebase/app")
const { getStorage, getDownloadURL, ref, uploadBytes } = require("firebase/storage");
const { getFirestore, collection, addDoc } = require("firebase/firestore")
    // Allam Gang fireAPI
    // const firebaseConfig = {
    //     apiKey: "AIzaSyAU1VN9plK0x_BnQdYjPrg-5Ryf4E6yuTA",
    //     authDomain: "fir-firestore-c9cd1.firebaseapp.com",
    //     projectId: "fir-firestore-c9cd1",
    //     storageBucket: "fir-firestore-c9cd1.appspot.com",
    //     messagingSenderId: "161518655263",
    //     appId: "1:161518655263:web:786a88499ea5a9edf0022a",
    //     measurementId: "G-2GMRK6S299"
    // };
const firebaseConfig = {
    apiKey: "AIzaSyCBgZmxqcVOX6uhmCxlYISmE8shIwhHJzQ",
    authDomain: "nwconf2023.firebaseapp.com",
    projectId: "nwconf2023",
    storageBucket: "nwconf2023.appspot.com",
    messagingSenderId: "95550327697",
    appId: "1:95550327697:web:42898318ee7ec26a9ce830",
    measurementId: "G-XT6S761638"
};
firebase.initializeApp(firebaseConfig);
const fapp = initializeApp(firebaseConfig)
const db = getFirestore(fapp)
const storage = getStorage();

const upload = multer({ storage: multer.memoryStorage() });

app.get("/", (req, res) => {
    res.json("Firebase Storage");
});
app.post('/', upload.single('file'), (req, res) => {
    const file = req.file;
    const storageRef = ref(storage, `files/${req.file.originalname}`);
    uploadBytes(storageRef, req.file.buffer).then((snapshot) => {
        console.log("file uploaded");
        getDownloadURL(storageRef).then(url => {
            return url
        }).then((url) => {
            const itemRef = collection(db, 'submissions');
            data = {...req.body }
            data['fileURL'] = url
            console.log(data);
            addDoc(itemRef, data).then(() => {
                console.log("Enter the Data");
            }).catch(() => {
                console.log("An Error occured");
            });
        });
    })
    res.status(200).send({ message: 'File uploaded successfully' });
});


app.listen(5000);
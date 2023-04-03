import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/header'
import { Button } from 'bootstrap'
import { collection, addDoc, query, orderBy, onSnapshot, getDocs } from "firebase/firestore"
import { db } from '../../firebase.js'
const SubmitPaper = () => {
    const [items, setTasks] = useState([]);
    const handleSubmit = async (event) => {
        console.log("came here");
        var data = {
            name: "konda",
            age: "24",
            year: '2023'
        }
        const itemRef = collection(db, 'users');
        await addDoc(itemRef, data).then(() => {
            console.log("Enter the Data");
            fetchItems();
            //    const q = await getDocs(itemRef).then().catch()
        }
        ).catch(() => {
            console.log("An Error occured");
        });
    }

    const fetchItems = async () => {
        // const citiesRef = collection(db,'users');
        // const snapshot = await citiesRef.get();
        // snapshot.forEach(doc => {
        //     console.log(doc.name, '=>', doc.data());
        // });
        const q = query(collection(db, 'users'))
        onSnapshot(q, (querySnapshot) => {
            setTasks(querySnapshot.docs.map(doc => ({
                user: doc.data()
                // data: doc.data()
            })))
        })
        // const itemRef = collection(db, 'users');
        // const querySnapshot = await getDocs(itemRef);
        // const fetchedItems = querySnapshot.docs.map((doc) => doc.data());
        console.log(items);
        console.log("Fetching Items");
    }
    return (
        <div>
            <form action="">
                
            </form>
            <button onClick={() => { fetchItems() }}>Submit</button>
            {(items != "") ? <p className="no">Updated</p> : <>{items}</>
            }
        </div>

    )
}

export default SubmitPaper

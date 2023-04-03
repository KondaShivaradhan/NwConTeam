import { useRef, useState } from "react";
import * as ReactDOM from 'react-dom';
import style from '../sub.css'
import Word from "../Word";
import { Formik, Field, Form, useFormik } from "formik";
import { basicSchema } from "../Validations";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, addDoc, query, orderBy, onSnapshot, getDocs } from "firebase/firestore"
import { db } from '../../../firebase.js'
import { object } from "yup";
import { useNavigate } from "react-router-dom";
var errors = {
    "title": ' ',
    "key": ' ',
    "abs": ' ',
    "file": ' '
}
var values = {
    "title": '',
    "key": [],
    "abs": '',
    'file': ''
}
var ec
var gkeyarr = []
var keyErr = {}
export default function Paper() {
    const navigation = useNavigate()
    const [test, settest] = useState([]);
    const [allValues, setallValues] = useState();
    const [keyword, setkeyword] = useState([]);
    const [emails, setemails] = useState([]);
    const [terr, setterr] = useState();
    const [aerr, setaerr] = useState();
    const [kerr, setkerr] = useState();
    const [setlectedFile, setSelectedFile] = useState();
    const [ferr, setferr] = useState();
    const handleChangeF = (event) => {
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            values.file = file
            errors.file = ''
            setferr()
            setSelectedFile(file);
        } else {
            errors.file = "Please select a PDF file only"
            setSelectedFile("Please select a PDF file only");
        }
        ec = 0
        Object.keys(errors).forEach(er => {
            if (errors[er] != '') {
                ec++
            }
        })
        console.log(ec);
        console.log(errors);
    }
    const handleChange = (event) => {

        if (event.target == undefined) {

            var keyarr = []
            event.map(o => {
                keyarr.push(o.label)
            })
            setkeyword(keyarr)
            setSelectedOptions(keyarr)
            gkeyarr = keyarr
            values['key'] = keyarr
            if (gkeyarr.length == 0) {
                errors['key'] = 'Keywords are Mandatory'
                setkerr('Keywords are Mandatory')
            }
            else {
                errors['key'] = ''
                setkerr()
            }
        }

        else {
            values[event.target.id] = event.target.value
            if (values[event.target.id] == '') {
                errors[event.target.id] = 'This field cant be Empty'
            }
            else {
                errors[event.target.id] = ''

            }
            if (event.target.id == "title") {
                if (event.target.value == '') {
                    setterr('This field cant be Empty')
                }
                else {
                    setterr()
                }
            } if (event.target.id == "abs") {
                if (event.target.value == '') {
                    setaerr('This field cant be Empty')
                }
                else {
                    setaerr()
                }
            }
            if (event.target.id == "key") {
                if (event.target.value == '') {
                    setkerr('This field cant be Empty')
                }
                else {
                    setkerr()
                }
            }

        }
        ec = 0
        Object.keys(errors).forEach(er => {
            if (errors[er] != '') {
                ec++
            }
        })
        console.log(ec);
        console.log(errors);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("came here");
        console.log(values);
        const formData = new FormData();
        formData.append('file', values.file);
        formData.append('title', values.title)
        formData.append('abs', values.abs)
        formData.append('key', values.key)

        fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        }).then(response => {

            response.json()
        })  
            .then(data => {
                alert('Submission saved')
                navigation("/author/home")
            })
            .catch(error => console.error(error));

    };

    const [selectedOptions, setSelectedOptions] = useState([]);

    const keywords = [
        { label: "Machine Learning", value: 1 },
        { label: "Artificial Intelligence", value: 2 },
        { label: "Big Data", value: 3 },
        { label: "Neural Networks", value: 4 },
        { label: "Cloud Computing", value: 5 },
        { label: "Cyber Security", value: 6 },
        { label: "Robotics", value: 7 },
        { label: "Programming", value: 8 },
        { label: "IOT", value: 9 },
        { label: "Blockchain", value: 10 },
        { label: "Hyper Automation", value: 11 },
        { label: "Extended Reality", value: 12 },
        { label: "Quantum Computing", value: 13 },
        { label: "Nanotechnology", value: 14 },
    ];
    const keywordsDum = []
    const [errKey, seterrKey] = useState();
    const [errEm, seterrrEm] = useState();
    const remove = (some, what) => {
        var newArra = [];
        if (what == "key") {
            keyword.map(element => {
                if (element == keyword[some]) {

                }
                else {
                    newArra.push(element)
                }
            })
            setkeyword(newArra)
            if (keyword.length < 5) {
                seterrKey()
            }
        }
        else if (what == "TestKey") {
            var node = document.getElementById("keyws");
            var nav = ReactDOM.findDOMNode(node)
            nav.value = nav.value.replace(test[some] + ',', "");
            nav.value = nav.value.replace(test[some], "");
            nav.value = nav.value.replace(test[some] + " ,", "");
            test.map(element => {
                if (element == test[some]) {

                }
                else {
                    newArra.push(element)
                }
            })
            settest(newArra)
        }
        else {
            emails.map(element => {
                if (element == emails[some]) {

                }
                else {
                    newArra.push(element)
                }
            })
            setemails(newArra)
        }

    }
    const [checked, setChecked] = useState(true);
    const handleKey = (what) => {
        if (what == "key") {
            console.log("this is key")
            var node = document.getElementById("keyIn");
            var nav = ReactDOM.findDOMNode(node)
            var value = nav.value
            if (value != "" && !/^ *$/.test(value)) {
                if (keyword.length < 5) {
                    seterrKey()
                    setkeyword([...keyword, value])
                }
                else {
                    seterrKey("Cannot add more then 5 keywords")
                }
            }
            nav.value = ""
        }
        else if (what == 'email') {
            console.log("this is email")
            var node = document.getElementById("email");
            var nav = ReactDOM.findDOMNode(node)
            var value = nav.value
            if (!errors.email && (value.includes(".com") || value.includes(".edu"))) {
                if (emails.length < 5) {
                    setemails([...emails, value])
                    seterrrEm()
                } else {
                    seterrrEm("Cannot add more than 5 Emails")
                }
            }
            else {
                seterrrEm("Enter a valid email")
            }
            nav.value = ""
        }

    }

    return (
        <div className="paper" >
            <form className="form" onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    className={(terr) ? "error" : null}
                    type="text"
                    id="title" onChange={(event) => { handleChange(event) }} placeholder={'Enter Title'} />
                {(terr) ? <p className="error">{errors.title}</p> : null}
                <label>Abstract</label>
                <textarea className={(aerr) ? "error" : null}
                    id="abs" onChange={(event) => { handleChange(event) }} name="" cols="30" rows="10" placeholder={'Type in the Abstract'} ></textarea>
                {(aerr) ? <p className="error">{errors.abs}</p> : null}
                <label>Keywords</label>
                <div>
                    <Select
                        isMulti
                        onChange={(event) => { handleChange(event) }} options={(keyword.length > 2) ? { keywordsDum } : keywords} />
                </div>
                {(kerr) ? <p className="error">{errors.key}</p> : null}

                <label htmlFor="Group">Is this a group submission?
                    <input type="checkbox" onChange={() => { setChecked(!checked) }} id="vehicle1" name="vehicle1" value="Group" />
                </label>
                {
                    checked ? null : <div>
                        <label htmlFor="">Email</label>
                        <input
                            placeholder="Enter each email ID.."
                            onChange={(event) => { handleChange(event) }} className={(errors.email) ? "error" : null} id="email" type="email" ></input>
                        {errEm ? <p className="error">{errEm}</p> : null}
                        <button type="button" className="button" onClick={() => { handleKey("email") }}>Add</button>
                        <div style={{ width: 'fit-content', background: 'transparent', display: "flex", flexDirection: "row", flexWrap: "wrap", margin: '0 auto' }}>
                            {emails.map((em, index) =>
                                <div onClick={() => { remove(index, "email") }}>
                                    <Word word={em} key={index}></Word>
                                </div>
                            )}
                        </div>
                    </div>
                }
                <label>Upload your Paper    </label>
                <input type="file" id='file' onChange={handleChangeF} />
                {(ferr) ? <p className="error">{errors.file}</p> : null}
                {(ec != 0) ? <p className="error">Enter Valid details to Submit</p> :
                    <input className="button" type="submit" style={{ width: '100px', margin: '0 auto' }} value="Submit" />
                }
            </form >
        </div >

    )
}


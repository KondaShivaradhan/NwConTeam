import { useRef, useState } from "react";
import * as ReactDOM from 'react-dom';
import Select from "react-select";
import style from '../sub.css'
import Word from "../Word";
import { Formik, Field, Form, useFormik } from "formik";
import Paper from "./Paper";
import { useLocation } from 'react-router-dom';
import Header from "../../../components/Header/header";
import { Footer } from "../../../components/Footer/footer";
import paperCss from './paper.css'   

export default function Home(props) {
    const [isChecked, setIsChecked] = useState(false);
    const handleRules = () => {
        setIsChecked(!isChecked)
    }
    // console.log(props.location.state);
    return (
        <>
            <head>
                <title>Submission</title>
                <meta name="Submit Paper" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm" crossorigin="anonymous" />
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                    crossorigin></script>
                <link rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                    integrity="sha384- 
 50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
                    crossorigin="anonymous"></link>
                <script
                    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin></script>
                <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

                <script
                    src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                    crossorigin></script>

                <script
                    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin></script>

            </head>
            <Header></Header>
            <div className="main" >
                <h3>Submit your Paper</h3>
                {(isChecked) ? <div>
                    {/* <h5>{props.title}</h5> */}
                    <Paper />
                </div> :
                    <>
                        <div>
                            <h4 id="test">
                                Rules
                            </h4>
                            <p>Please read the following terms and conditions before submitting your project:</p>
                            <ul>
                                <li>Projects must be original work and not plagiarized in any way.</li>
                                <li>Projects must not violate any laws or infringe on the rights of others.</li>
                                <li>Projects must be submitted on time and in the required format.</li>
                                <li>Projects must meet the specified requirements and follow any given instructions.</li>
                                <li>Projects must be free of any offensive or inappropriate content.</li>
                                <li>Projects must be the student's own work and not submitted on behalf of someone else.</li>
                                <li>Students must follow any given citation and referencing guidelines.</li>
                                <li>Students must maintain academic integrity and not engage in any form of academic misconduct.</li>
                                <li>Students must use credible and reliable sources for their project.</li>
                                <li>Projects must be submitted through the designated submission channel and not via any other means.</li>
                                <li>Students must not modify or alter their project after submission unless requested by the instructor.</li>
                                <li>Students must ensure that their project is properly formatted and organized.</li>
                                <li>Students must not submit incomplete or unfinished projects.</li>
                                <li>Students must not collaborate with other students unless explicitly allowed by the instructor.</li>
                                <li>Students must follow any other rules or guidelines specified by the instructor for the project submission.</li>
                                <li>Your project must be original work and not infringe on the intellectual property rights of others.</li>
                                <li>You agree to grant us a non-exclusive, perpetual, royalty-free license to use, reproduce, modify, and distribute your project.</li>
                                <li>You represent and warrant that your project does not contain any defamatory, libelous, or obscene material.</li>
                                <li>You acknowledge that we may reject your submission for any reason.</li>
                            </ul>
                            <div>
                                <input type="checkbox" id="vehicle1" checked={isChecked}
                                    onChange={handleRules} name="vehicle1" value="Bike" />
                                <label htmlFor="">I Agree</label>
                            </div>
                        </div>
                    </>
                }
            </div>
            <Footer></Footer>
        </>
    )
}
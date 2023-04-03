import { useState } from 'react';
import Paper from './paper/Paper';
import style from '../Submit/sub.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header/header"
import { Footer } from "../Footer/footer"
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Link from 'next/link';
export default function Home() {

    
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
            <body>
                {/* <form action="">
                    <input type="text" />
                </form> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <Select options={keywords} />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

            </body>
            <Footer></Footer>
        </>
    )
}
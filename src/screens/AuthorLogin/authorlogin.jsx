import GreenButton from "../../components/Button/button.jsx"
import "./authorlogin.css"
import { InputField } from "../../components/InputField/inputfield"
import { Label } from "../../components/Label/label"
import { OrComponent } from "../../components/OrComponent/orcomponent.jsx"
import { UilGoogle,UilFacebook,UilGithub,UilTwitter } from '@iconscout/react-unicons'
import Header from "../../components/Header/header.jsx"
export const AuthorLogin = ()=>{
    return(
        <>
         {/* <Header/> */}
         <div className="authorContainer">
           
        <div className="authorLogin">
        <h3 style={{color:"#006747",marginBottom:"10px"}}>Login</h3>
        <Label value={"Email Address"}/>
        <InputField type={"text"} placeholder="Enter your email address" />
        <Label value={"Password"}/>
        <InputField type={"password"} placeholder="Enter your password" />
        <GreenButton title="LOGIN" path="/author/home" />
        <p style={{marginTop:"10px",fontSize:"15px"}}>Don't have a account? <a href="/author/register" style={{color:"#006747"}}>Register here</a></p>
        <p><a href="/login" style={{color:"#006747"}}>Go back</a></p>
        <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
        <OrComponent/>
        </div>
        <p style={{color:"#111",fontSize:"14px"}}>Login with </p>
        <div className="iconsContainer">
            <UilGoogle />
            <UilFacebook/>
            <UilGithub/>
            <UilTwitter/>
        </div>
       </div></div>
        </>
    )
}
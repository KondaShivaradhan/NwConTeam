import "./authorregister.css"
import { InputField } from "../../components/InputField/inputfield"
import { Label } from "../../components/Label/label"
import { OrComponent } from "../../components/OrComponent/orcomponent.jsx"
import { UilGoogle,UilFacebook,UilGithub,UilTwitter } from '@iconscout/react-unicons'
import GreenButton from "../../components/Button/button.jsx"

export const AuthorRegister = ()=>{
    return(
        <>
         <div className="authorC">
        <div className="authorLogin" style={{margin:"40px 0"}}>
        <h3 style={{color:"#006747",marginBottom:"10px"}}>Register</h3>
        <div className="nameContainer" style={{display:"flex"}}>
            <div>
        <Label value={"First Name"}/>
        <InputField type={"text"} placeholder="Enter your first name" />
        </div>
        
        <div style={{marginLeft:"20px"}}>
        <Label value={"Last name"}/>
        <InputField type={"text"} placeholder="Enter your last name" />
        </div>
        </div>
        
        <div className="emailContainer" style={{display:"flex"}}>
            <div>
        <Label value={"Email Address"}/>
        <InputField type={"text"} placeholder="Enter your email address" />
        </div><div style={{marginLeft:"20px"}}>
        <Label value={"Confirm email Address"}/>
        <InputField type={"text"} placeholder="Confirm your email address" />
        </div>
        </div>
        
        <div className="emailContainer" style={{display:"flex"}}>
            <div>
        <Label value={"Password"}/>
        <InputField type={"password"} placeholder="Enter your password" /></div><div style={{marginLeft:"20px"}}>
        <Label value={"Confirm password"}/>
        <InputField type={"password"} placeholder="Confirm your password" />
        </div>
        </div>
        <Label value={"Areas of intrest"}/>
        <InputField type={""} placeholder="Enter fields seperated by a comma" width="720px"  />
        <GreenButton title="REGISTER" width="720px" />
        <p style={{marginTop:"10px",fontSize:"15px"}}>Already have an account? <a href="/author/login" style={{color:"#006747"}}>Login here</a></p>
        <p><a href="/login" style={{color:"#006747"}}>Go back</a></p>
        <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}>
        <OrComponent/>
        </div>
        <p style={{color:"#111",fontSize:"14px"}}>Register with </p>
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
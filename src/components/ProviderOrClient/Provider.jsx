import React, {useState} from 'react';
import {SignUp} from "../SignUpIn_ProviderAndServices/SignUp_And_SignIn/SignUp.jsx";
import { SignIn } from "../SignUpIn_ProviderAndServices/SignUp_And_SignIn/SignIn.jsx";
import {NavLink} from "react-router-dom";
import logo from "../SignUpIn_ProviderAndServices/SignUp_And_SignIn/logo512.png";
import "../SignUpIn_ProviderAndServices/SignUp_And_SignIn/SignUP_IN.css";
import {Services} from "../SignUpIn_ProviderAndServices/Services/Services";

export const Provider = () => {
    const [state, setState] = useState(false);
    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h3 className={state ? "inactive underlineHover" : "active"} onClick={() => setState(false)}> Sign In </h3>
                    <h3 className={state ? "active" : "inactive underlineHover"} onClick={() => setState(true)}> Sign Up </h3>
                    <div className="fadeIn second"><img src={logo} id="icon" alt="User Icon"/></div>
                    {state ? <SignUp/> : <SignIn/>}
                    <div id="formFooter"><NavLink className="underlineHover" to="/">Forgot Password?</NavLink></div>
                </div>
                {state ? <Services/> : false}
            </div>
        </>
    );
};
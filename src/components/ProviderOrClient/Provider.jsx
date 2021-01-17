import React from 'react';
import Register from "../RegisterOrLogin/Register";
import Login from "../RegisterOrLogin/LogIn";
import Services from "../Services/Services";
import {NavLink} from "react-router-dom";
import logo from "../RegisterOrLogin/logo512.png";
import "../RegisterOrLogin/LogIn.css"

export const Provider = () => {
    return (<>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Sign In </h2>
                    <h2 className="inactive underlineHover"> Sign Up </h2>
                    <div className="fadeIn second">
                        <img src={logo} id="icon" alt="User Icon"/>
                    </div>

                    {/*<Register/>*/}
                    <Login/>

                    <div id="formFooter">
                        <NavLink className="underlineHover" to="/">Forgot Password?</NavLink>
                    </div>
                </div>
                {/*<Services/>*/}
            </div>
        </>
    );
}
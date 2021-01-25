import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {addProvider} from "../../context/signup/signUpState";

const INITIAL_STATE_PROVIDER = {
    nameCompany: '',
    address: '',
    numberPhone: '',
    email: '',
    password: '',
    fromHourse: '',
    toHourse: ''
};

export const SignUp = () => {
    const [provider, setProvider] = useState(INITIAL_STATE_PROVIDER);
    const {nameCompany, address, numberPhone, email, password, fromHourse, toHourse} = provider;
    const onInputChange = e => setProvider({...provider, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        try {
            e.preventDefault();
            addProvider(provider)
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <div>
                <input id="nameCompany" placeholder="Enter name company" value={nameCompany} type="text"
                       name="nameCompany" onChange={e => onInputChange(e)}/>
            </div>
            <div>
                <input id="address" placeholder="Enter address" name="address" value={address} type="text"
                       onChange={e => onInputChange(e)}/>
            </div>
            <div>
                <input id="numberPhone" placeholder="Enter number phone" name="numberPhone" value={numberPhone}
                       type="text" onChange={e => onInputChange(e)}/>
            </div>

            <div className="divHoursContent">
                <div>
                    <input type="text" name="fromHourse" value={fromHourse} placeholder="Working from hours"
                           onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    <input type="text" name="toHourse" value={toHourse} placeholder="Working to hours"
                           onChange={e => onInputChange(e)}/>
                </div>
            </div>
            <div>
                <input id="email" placeholder="Enter email" name="email" value={email} type="email"
                       onChange={e => onInputChange(e)}/>
            </div>
            <div>
                <input id="password" placeholder="Enter password" name="password" value={password} type="password"
                       onChange={e => onInputChange(e)}/>
            </div>
            <div>
                <Button variant="contained" size="large" color="primary" style={{width: 250, height: 50, marginTop: 10}} type="submit">SIGN UP</Button>
            </div>
        </form>
    );
};
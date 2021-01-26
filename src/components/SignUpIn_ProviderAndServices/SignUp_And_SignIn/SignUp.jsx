import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import {addProvider} from "../../context/signup/signUpState";
import {SignUpInput} from "./SignUpInput";

const INITIAL_STATE_PROVIDER = {
    nameCompany: '',
    address: '',
    numberPhone: '',
    email: '',
    password: '',
    fromHours: '',
    toHours: ''
};

export const SignUp = () => {
    const [provider, setProvider] = useState(INITIAL_STATE_PROVIDER);
    const {nameCompany, address, numberPhone, email, password, fromHours, toHours} = provider;
    const onInputChange = e => setProvider({...provider, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        try {
            e.preventDefault();
            console.log(provider);
            // addProvider(provider)
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <SignUpInput id="nameCompany" placeholder="Enter name company" value={nameCompany} type="text" name="nameCompany" onChange={e => onInputChange(e)} />
            <SignUpInput id="address" placeholder="Enter address" name="address" value={address} type="text" onChange={e => onInputChange(e)} />
            <SignUpInput  id="numberPhone" placeholder="Enter number phone" name="numberPhone" value={numberPhone} type="text" onChange={e => onInputChange(e)}/>
            <div className="titleHours">Working hours</div>
            <div className="divHoursContent">
                <div>
                    <label>From</label>
                    <SignUpInput  type="time" name="fromHours" value={fromHours} onChange={e => onInputChange(e)} />
                </div>
                <div>
                    <label>To</label>
                    <SignUpInput type="time" name="toHours" value={toHours} onChange={e => onInputChange(e)} />
                </div>
            </div>
                <SignUpInput id="email" placeholder="Enter email" name="email" value={email} type="email" onChange={e => onInputChange(e)} />
                <SignUpInput id="password" placeholder="Enter password" name="password" value={password} type="password" onChange={e => onInputChange(e)}/>
                <Button variant="contained" size="large" color="primary" style={{width: 250, height: 50, marginTop: 10}} type="submit">SIGN UP</Button>
        </form>
    );
};
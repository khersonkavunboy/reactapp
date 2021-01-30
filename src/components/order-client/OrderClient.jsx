import React, {useState} from 'react';
import "./style-order-client.css"
import Button from "@material-ui/core/Button";
import {SignUpInput} from "../sign-up-in-provider/SignUpInput"
import {INITIAL_DATAPAGE} from "../../data/INITIAL_DATAPAGE";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";



const INITIAL_STATE_ORDER_CLIENT = {
    fullName: '',
    numberPhone: '',
    dateTime: '',
    serviceNameId: '',
    duration: ''
};

export const OrderClient = () => {
    const [orderClient, setOrderClient] = useState(INITIAL_STATE_ORDER_CLIENT);
    const {fullName, numberPhone, dateTime, duration, serviceNameId} = orderClient;
    const onInputChange = e => setOrderClient({...orderClient, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        try {
            e.preventDefault();
            //addProvider(provider-component)
            console.log("INITIAL_STATE_ORDER_CLIENT",orderClient )
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="flexContent">
                <div>
                    <label>Full name</label>
                    <input id="fullName" placeholder="Enter full name" value={fullName} type="text" name="fullName"
                           onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    <label>Number phone</label>
                    <input id="numberPhone" placeholder="Enter number phone" value={numberPhone} type="telephone"
                           name="numberPhone" onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    <label>Date time recording</label>
                    <input id="dateTime" value={dateTime} type="datetime-local" name="dateTime"
                           onChange={e => onInputChange(e)}/>
                </div>


                <div>
                    <label>Duration</label>
                    <input id="duration" placeholder="Enter duration" value={duration} type="text" name="duration"
                           onChange={e => onInputChange(e)}/>
                </div>
                <div><Button variant="contained" size="large" color="primary" style={{width: 250}} type="submit">Recording</Button></div>
            </div>
        </form>
    );
};
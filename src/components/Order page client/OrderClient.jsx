import React, {useState} from 'react';
import "./OrderClient.css"
import Button from "@material-ui/core/Button";


const INITIAL_STATE_ORDER_CLIENT = {
    fullName: '',
    numberPhone: '',
    dateTime: '',
    duration: ''
};

export const OrderClient = () => {
    const [orderClient, setOrderClient] = useState(INITIAL_STATE_ORDER_CLIENT);
    const {fullName, numberPhone, dateTime, duration} = orderClient;
    const onInputChange = e => setOrderClient({...orderClient, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        try {
            e.preventDefault();
            //addProvider(provider)
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
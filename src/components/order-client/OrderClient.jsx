import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {MuiSelect} from '../ui-components/MuiSelect';
import TextField from "@material-ui/core/TextField";
import {INITIAL_DATAPAGE} from "../../data/INITIAL_DATAPAGE";
import {makeStylesOrderClient} from "./makeStylesOrderClient";
import "./style-order-client.css"



const INITIAL_STATE_ORDER_CLIENT = {
    fullName: '',
    numberPhone: '',
    dateTime: '',
    serviceNameId: '',
    duration: ''
};

export const OrderClient = () => {
    const styles = makeStylesOrderClient();
    const [orderClient, setOrderClient] = useState(INITIAL_STATE_ORDER_CLIENT);
    const [inputValue, setInputValue] = useState('');
    const {fullName, numberPhone, dateTime, duration, serviceNameId} = orderClient;
    const onInputChange = e => setOrderClient({...orderClient, [e.target.name]: e.target.value});


    const onSubmit = async e => {
        try {
            e.preventDefault();
            //addProvider(provider-component)
            console.log("INITIAL_STATE_ORDER_CLIENT", orderClient)
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

                <MuiSelect labelText="Service" selectTitleText="Select service..." id="serviceNameId" value={serviceNameId}
                           name="serviceNameId" onChange={e => onInputChange(e)} data={INITIAL_DATAPAGE.services}  />

                <div>
                    <label>Services</label>
                <Autocomplete className={styles.root}  value={serviceNameId} onChange={(event, newValue) =>  
                            setOrderClient({...orderClient, serviceNameId: newValue})}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => setInputValue(newInputValue) }
                        id="serviceNameId"
                        options={INITIAL_DATAPAGE.services}
                        getOptionLabel= {option => option.nameService ? option.nameService : option}
                        renderInput={params => <TextField {...params} margin="normal" />}
                    />
                </div>

                <div>
                    <label>Duration</label>
                    <input id="duration" placeholder="Enter duration" value={duration} type="text" name="duration"
                        onChange={e => onInputChange(e)}/>
                </div>

                <div>
                    <Button variant="contained" size="large" color="primary" style={{width: 250}}
                            type="submit">Recording
                    </Button>
                </div>
            </div>
        </form>
    );
};
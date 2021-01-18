import React, {useState, useEffect} from 'react';
import {makeStyles, TextField, Grid} from "@material-ui/core/";
import {useForm} from "./useForm";
import Button from "@material-ui/core/Button";
import axios from "axios";

const initialService = {
    id:0,
    nameService:'',
    duration:'',
    price:''
};

export const ServicesForm = () =>{

    const {values, setValues, handleInputChange} = useForm(initialService);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3030/services", values);
    };

      return (
        <form onSubmit={e => onSubmit(e)}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField  variant="outlined" label="Name service" name="nameService" value={values.nameService} onChange={handleInputChange}/>
                    <TextField variant="outlined" label="Duration" name="duration" value={values.duration} onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Price" name="price" value={values.price} onChange={handleInputChange}/>
                    <div>
                        <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                    </div>
                </Grid>
            </Grid>
        </form>
      );
};
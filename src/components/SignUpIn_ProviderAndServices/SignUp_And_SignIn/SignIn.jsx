import React from 'react';
import {Grid} from '@material-ui/core';
import Button from "@material-ui/core/Button";


export const SignIn = () => {
    return (
        <form>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={2}>
                <input id="email" placeholder="Enter email" name="email" type="email"/>
                <input id="password" placeholder="Enter password" name="password" type="password"/>
                <Grid item xs={12}><Button variant="contained" size="large" color="primary" style={{width: 250}}
                                           type="submit">SIGN IN</Button></Grid>
            </Grid>
        </form>
    );
};
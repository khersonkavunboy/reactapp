import React from 'react';
import {makeStyles} from "@material-ui/core";

export const makeStylesOrderClient = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-fullWidth':{ width:370,},
        '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child':{
             padding: 20,
            margin:5
        },
    },
}));
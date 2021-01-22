import React, {useState, useContext, useEffect} from 'react';
import {TextField, Grid} from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import {ServiceContext} from "../../context/service/serviceContext";

export const AddEditService = (props) => {

    const initialService = {
        id:0,
        nameService:'',
        duration:'',
        price:''
    };

     const [values, setValues] = useState(initialService);
    setValues(initialService);
    const handleInputChange = event => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    // const onSubmitAddService =  e => {
    //     try {
    //         e.preventDefault();
    //         if(!values.trim()) {
    //             database.AddService(values);
    //             setValues(initialService);
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    const {addOrEdit, serviceEdit} = props;
    const onSubmitAddService =  e => {
        try {
            e.preventDefault();
            addOrEdit(values);
            setValues(initialService);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => serviceEdit !=null ? setValues({ ...serviceEdit}) : setValues(initialService), [serviceEdit]);








    return (
        <form onSubmit={onSubmitAddService}>
            <Grid container direction="column" justify="space-between" alignItems="center" spacing={2}>
                <Grid item xs={12}>
                    <TextField variant="outlined" style={{width: 400}} label="Name service" name="nameService"
                               value={values.nameService} onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" style={{width: 400}} label="Duration" name="duration"
                               value={values.duration} onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" style={{width: 400}} label="Price" name="price" value={values.price}
                               onChange={handleInputChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" style={{width: 150}} color="primary" type="submit">Submit</Button>
                </Grid>



            </Grid>
        </form>
    );
};
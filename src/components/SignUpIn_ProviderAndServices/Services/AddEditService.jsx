import React, {useState, useEffect} from 'react';
import Button from "@material-ui/core/Button";
import "./AddEditService.css"

const INITIAL_SERVICE = {
    id:0,
    nameService:'',
    duration:'',
    price:''
};

export const AddEditService = (props) => {
    const [values, setValues] = useState(INITIAL_SERVICE);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    };

    const resetForm = () =>  setValues(INITIAL_SERVICE);


    const {addOrEdit, serviceEdit} = props;
    const onSubmitAddService =  e => {
        try {
            e.preventDefault();
            addOrEdit(values, resetForm);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => { if (serviceEdit !== null)  setValues({...serviceEdit}) }, [serviceEdit]);




    return (
        <form onSubmit={onSubmitAddService}>
            <div className="divContent">
                <div>
                    <label>Name service</label>
                    <input type="text" placeholder="Enter name service" name="nameService" value={values.nameService} onChange={handleInputChange}/>
                </div>
                <div >
                    <label>Duration</label>
                    <input  type="text"  placeholder="Enter duration" name="duration" value={values.duration} onChange={handleInputChange}/>
                </div>
                <div className="divContent">
                    <label>Price</label>
                    <input type="text" placeholder="Enter price" name="price" value={values.price} onChange={handleInputChange}/>
                </div>
                <div><Button variant="contained" style={{width: 250,height: 50, textAlign:"center" }} color="primary" type="submit">Submit</Button></div>
            </div>
        </form>
    );
};
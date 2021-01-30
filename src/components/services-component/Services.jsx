import React, {useContext, useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./styles-services.css"
import {Popup} from "../popup/Popup";
import {AddEditService} from "./AddEditService";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import {Contexts} from "../context/contexts";

export const Services = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [serviceEdit, setServiceEdit] = useState(null);
    const {services, fetchService, removeService, addService, editService} = useContext(Contexts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => fetchService(),[]);

    const addOrEdit = (service,resetForm) => {
        if(service.id === 0) addService(service);
        else editService(service);
        resetForm();
        fetchService();
        setOpenPopup(false);
    };

    const openInPopup = item => {
        setServiceEdit(item);
        setOpenPopup(true);
    };

    return (
        <div id="formContentServices">
            <div className="butConteiner">
                <div><label>Services</label></div>
                <div><Button variant="contained" color="secondary" aria-label="Add to service" onClick={ () => { setOpenPopup(true); setServiceEdit(null); }  }><AddIcon/></Button></div>
            </div>
            <div className="listContainer">
                <ul>
                    {
                        services.map((service, key) => (
                        <li key={key}>
                                { service.nameService }
                                <Button variant="contained" color="secondary" onClick={ () => openInPopup(service)}><EditIcon /></Button>
                                <Button variant="contained" color="secondary" onClick={ () => removeService(service.id) }><CloseIcon /></Button>
                        </li>)
                        )
                    }
                </ul>
            </div>

            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Add Service" >
                <AddEditService addOrEdit = {addOrEdit} serviceEdit={serviceEdit} />
            </Popup>
        </div>
    )
}
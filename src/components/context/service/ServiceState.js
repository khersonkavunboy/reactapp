import React, {useReducer} from 'react'
import axios from "axios";
import {Contexts} from "../contexts";
import {reducer} from "../Reducer";
import {ADD_SERVICE, EDIT_SERVICE, FETCH_SERVICES, REMOVE_SERVICE} from "../types";

const urlServices = "http://localhost:3030/services";

export const ServiceState = ({children}) =>{
    const initialService = { services:[]  };
    const [state, dispatch] = useReducer(reducer, initialService);

    const fetchService = async () => {
        const result = await axios.get(urlServices);
        const payload = Object.keys(result.data).map(key => {
            return {
                ...result.data[key]
            }
        });

        dispatch({
            type: FETCH_SERVICES, payload
        })
    };

    const addService = async service => {
        try {
            await axios.post(urlServices, service);
           dispatch({
               type:ADD_SERVICE,
               payload:  { ...service }
           })
        } catch (e) {
            console.log(e);
        }
    };

    const editService = async service => {
        try {
            await axios.put(`${urlServices}/${service.id}`, {...service});
            dispatch({
                type:EDIT_SERVICE,
                payload: {...service}
            })
        } catch (e) {
            console.log(e);
        }
    };


    const removeService = async id => {
        await  axios.delete(`${urlServices}/${id}`);
        dispatch({
            type: REMOVE_SERVICE,
            payload:id
        });
    };



    return(
        <Contexts.Provider value={{fetchService, addService, editService, removeService, services:state.services}}>
            {children}
        </Contexts.Provider>
    )
}
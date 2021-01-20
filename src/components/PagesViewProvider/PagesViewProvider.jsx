import React, {useState, useEffect} from 'react';
import "./testData.css"
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function TestData(){
    const [providers, setProviders] = useState([]);

    useEffect(() => loadProviders(),[]);

    const loadProviders = async () =>{
        const result = await axios.get("http://localhost:3030/providers");
        setProviders(result.data)
    };

    return (
        <>
            <table id="customers">
                <tr>
                    <th>Organization Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Function</th>
                </tr>
                {
                    providers.map((provider, index)=>(
                        <tr key={index}>
                            <td>{provider.nameCompany}</td>
                            <td>{provider.address}</td>
                            <td>{provider.numberPhone}</td>
                            <td>{provider.fromHourse}</td>
                            <td>{provider.toHourse}</td>
                            <td>
                                <Link to={'/'}>View</Link>
                                <Link to={'/'}>Edit</Link>
                                <Link to={'/'}>Delete</Link>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}


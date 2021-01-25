import React, {useState, useEffect} from 'react';
import "./PagesViewProvider.css"
import axios from 'axios';
import DataTable from '../GridTable/GridTable';
import Button from "@material-ui/core/Button";
import {CellParams} from "@material-ui/data-grid";

const rows = [
    { id: 1, fullName: 'Snow Snow', numberPhone: '382282842871', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
    { id: 2, fullName: 'Snow Snow', numberPhone: 'wefnlkewnflkwen', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
    { id: 3, fullName: 'Snow Snow', numberPhone: '382282842871', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
    { id: 4, fullName: 'Snow Snow', numberPhone: '382282842871', dateTime: Date.now(), service:"Боулинг", duration:'1 hours' },
];


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'dateTime', headerName: 'Date Time', width: 250 },
    { field: 'fullName', headerName: 'Client fullname', width: 200 },
    { field: 'numberPhone', headerName: 'Telephone number', type: 'number', width: 200 },
    { field: 'service', headerName: 'Service', type: 'text', width: 200 },
    { field: 'duration', headerName: 'Duration', type: 'text', width: 200 },
    { field: "", headerName: "Function", sortable: false, width: 200, disableClickEventBubbling: true,
        renderCell:(params: CellParams) => {
            const onClick = () => {
                const fields = params.api.getAllColumns().map(c => c.field);
                const thisRow = {};
                fields.forEach(f => thisRow[f] = params.getValue(f));
                //rows.delete(thisRow.id);
            };
            return <Button variant="contained" color="secondary" onClick={onClick}>Cancel order</Button>;
        }
    }
];
  



export const PagesViewProvider = () => {
    // const [providers, setProviders] = useState([]);
    // useEffect(() => loadProviders(), []);
    // const loadProviders = async () => {
    //     const result = await axios.get("http://localhost:3030/providers");
    //     setProviders(result.data)
    // };

    return (
        <>
            <div className="textStyle"><h1>Provider dashboard</h1></div>
            <DataTable rows={rows} columns={columns} />
        </>
    )
}


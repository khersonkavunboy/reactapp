import React from 'react';
import {GroupDataProviderOrClient} from "./GroupDataProviderOrClient";
import Button from "@material-ui/core/Button";
import {INITIAL_DATAPAGE} from "../../data/INITIAL_DATAPAGE";
import {ValueFormatterParams} from "@material-ui/data-grid";


const deleteOrderCustomer = e => {
    try{
        console.log("Params", e.row);
        INITIAL_DATAPAGE.dataRowsClient.filter(item => item.id !== e.row.id);
    }catch (e){
        console.log(e.message());
    }
};

const columns = [
    ...INITIAL_DATAPAGE.columns,
    {
        field: "", headerName: "Function", sortable: false, width: 200, disableClickEventBubbling: true,
        renderCell:(params : ValueFormatterParams) => (
        <Button variant="contained" color="secondary" onClick={()=>deleteOrderCustomer(params)}>Cancel order</Button>
        )
    }
];

export const PagesViewClient = () =>{
    return (
        <GroupDataProviderOrClient title="Customer orders" rows={INITIAL_DATAPAGE.dataRowsClient} columns={columns} />
    )
};
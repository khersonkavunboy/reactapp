import React from 'react';
import Button from "@material-ui/core/Button";
import {GroupDataProviderOrClient} from "./GroupDataProviderOrClient";
import {ValueFormatterParams} from "@material-ui/data-grid";
import {INITIAL_DATAPAGE} from "../../data/INITIAL_DATAPAGE";


const deleteOrderCustomer = e => {
    try{
        console.log("Params", e.row);
        INITIAL_DATAPAGE.dataRowsProvider.filter(item=> item.id !== e.row.id);
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

export const PagesViewProvider = () => {
    return (
        <GroupDataProviderOrClient title="Provider dashboard" rows={INITIAL_DATAPAGE.dataRowsProvider} columns={columns}/>
    )
};


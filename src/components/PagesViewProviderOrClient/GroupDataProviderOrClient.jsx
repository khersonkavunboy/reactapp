import React from 'react';
import DataTable from "../GridTable/GridTable";
import "./PagesViewProvider.css"


export const GroupDataProviderOrClient = (props) =>{
    const {title, rows, columns} = props;
    return (
        <>
            <div className="textStyle"><h1>{title}</h1></div>
            <DataTable rows={rows} columns={columns} />
        </>
    )
};
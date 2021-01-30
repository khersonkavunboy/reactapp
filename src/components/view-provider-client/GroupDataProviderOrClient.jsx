import React from 'react';
import GridTable from "../grid-table/GridTable";
import "./styles-view-provider-client.css"


export const GroupDataProviderOrClient = (props) =>{
    const {title, rows, columns} = props;
    return (
        <div className="container">
            <div className="textStyle"><h1>{title}</h1></div>
            <hr />
            <GridTable rows={rows} columns={columns} />
        </div>
    )
};
import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./Services.css"

export const  Services = () => {
    return (
        <div id="formContentServices">
            <div className="box2">
                <div className="butConteiner">
                    <div>
                        <label>Services</label>
                    </div>
                    <div>
                        <Button variant="contained" color="secondary" aria-label="Add to service"><AddIcon /></Button>
                    </div>
                </div>
                <div className="listContainer" >
                    <ul>
                        <li>Services1</li>
                        <li>Services1</li>
                        <li>Services1</li>
                        <li>Services1</li>
                        <li>Services1</li>
                        <li>Services1</li>
                        <li>Services1</li>
                        <li>Services1</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
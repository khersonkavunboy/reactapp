import React from 'react'
import "./VerticalServices.css"
import {DataVerticalServices} from "../Data/DataVerticalServices"



export default function VerticalServicesList(){
    return(
      <div className="verticalMenu">
          <ul className="SidebarList">
          {
              DataVerticalServices.map((val, key)=>{
                  return(
                    <li className="row" key={key} onClick={ () => window.location.pathname = val.link }>
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                  );
              })
          }
          </ul>
      </div>
    );
}
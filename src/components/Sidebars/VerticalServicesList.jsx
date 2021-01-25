import React from 'react'
import "./VerticalServices.css"
import {INITIAL_DATAPAGE} from "../../Data/INITIAL_DATAPAGE.js"
import {Link} from "react-router-dom";

export default function VerticalServicesList(){
    return(
      <div className="verticalMenu">
          <ul className="SidebarList">
          {
              INITIAL_DATAPAGE.category.map((val, key)=>{
                  return(
                    <li className="row" key={key} >
                        <div id="icon">{val.icon}</div>
                        <Link id="title" to={val.link}>{val.nameCategory}</Link>
                    </li>
                  );
              })
          }
          </ul>
      </div>
    );
}
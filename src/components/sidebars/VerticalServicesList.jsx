import React from 'react'
import {INITIAL_DATAPAGE} from "../../data/INITIAL_DATAPAGE.js"
import {Link} from "react-router-dom";
import "./styles-vertical-services.css"

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
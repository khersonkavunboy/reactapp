import React from 'react'
import VerticalServicesList from "../sidebars/VerticalServicesList";
import {SliderShow}  from "../slider/SliderShow.js";
import {RecomendationOrTopSales} from "../recomendations-topsales/RecomendationOrTopSales"
import {INITIAL_DATAPAGE} from "../../data/INITIAL_DATAPAGE";
import "./MainPages.css"

export const MainPages = () =>{
    return (
        <div className="flexConteinerRow">
          <div><VerticalServicesList /></div>
          <div className="flexConteinerColumn">
            <div><SliderShow pictures={INITIAL_DATAPAGE.sliderPictures} /></div>
            <div><RecomendationOrTopSales titleName="Top Sales" data={INITIAL_DATAPAGE.topsales} /></div>
            <div><RecomendationOrTopSales titleName="Recomendations" data={INITIAL_DATAPAGE.recommendations}/></div>
          </div>
      </div>
    );
}

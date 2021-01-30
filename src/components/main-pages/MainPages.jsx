import React from 'react'
import VerticalServicesList from "../sidebars/VerticalServicesList";
import {SliderShow}  from "../slider/SliderShow.js";
import {RecomendationOrTopSales} from "../recomendations-topsales/RecomendationOrTopSales"
import {INITIAL_DATAPAGE} from "../../data/INITIAL_DATAPAGE";
import "./style-main-pages.css"

export const MainPages = () => {
    return (
        <div className="flexConteinerRow">
            <VerticalServicesList/>
                <div className={'flexConteinerColumn'}>

                    <div className={"column"}>
                        <SliderShow pictures={INITIAL_DATAPAGE.sliderPictures} />
                    </div>

                    <RecomendationOrTopSales titleName="Top Sales" data={INITIAL_DATAPAGE.topsales} />
                    <RecomendationOrTopSales titleName="Recommendations" data={INITIAL_DATAPAGE.recommendations} />

                </div>
        </div>
    );
};

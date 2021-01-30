import React from 'react'
import {BlockSentense} from "../block-sentense/BlockSentense"
import "./styles-recomendation-topsales.css"


export const RecomendationOrTopSales = (props) => {
    const {titleName, data} = props;
    return (
        <div className="flexContainer">
            <div className="titleRecomendation">
                <h4>{titleName}</h4>
            </div>

            <div className="recomendationBlock">
                {
                    data.map((element,key) =>
                        <BlockSentense key={key} text={element.titleRecommendation || element.titleTopSales} picture={element.picture}
                                       divStyleClass="containerBlock" imgStyleClass ="imageSizeRecommendation" paragraphStyleClass="textRecommTop" />
                    )
                }
            </div>
        </div>
    )
}

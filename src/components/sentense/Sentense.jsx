import React, {useState} from 'react'
import {BlockSentense} from "../block-sentense/BlockSentense";
import {Popup} from "../popup/Popup.jsx";
import {OrderClient} from "../order-client/OrderClient";
import {INITIAL_DATAPAGE} from "../../data/INITIAL_DATAPAGE";
import "./styles-sentense.css"

export const Sentense = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const category = INITIAL_DATAPAGE.category.find(element => element.link === window.location.pathname);

    const openInPopup = item => {
        console.log("Item", item);
        setOpenPopup(true);
    };

    return (
        <div className="flexContainerSentense">
            <div className="divTitle">
                <h1>{ category.nameCategory }</h1>
            </div>


            <div className="divBlockSentense">
                {
                    INITIAL_DATAPAGE.dataSelectedCategory.filter(element => element.idCategory === category.idCategory).map((element,key) =>
                        <BlockSentense key={key} text={element.nameSentence} picture={element.picture} 
                        divStyleClass="divBlock" imgStyleClass ="imageSize" paragraphStyleClass="text"
                        onClick={ () => openInPopup(element) } /> 
                    )
                }
            </div>


            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Order client" >
                <OrderClient/>
            </Popup>
        </div>
    );
};
import React from 'react'

export const BlockSentense = (props) => {
    const {text, picture, onClick, divStyleClass, imgStyleClass, paragraphStyleClass} = props;
    return (
        <>
            <div className={divStyleClass} onClick={onClick}>
                <img className={imgStyleClass} src={picture} alt="pictureService" />
                <p className={paragraphStyleClass}>{text}</p>
            </div>
        </>
    );
};
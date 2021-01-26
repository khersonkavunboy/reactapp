import React from 'react'

export const SignUpInput = (props) => {

    const {id, placeholder, value, type, name, onChange} = props;

    return(
        <div>
            <input id={id} placeholder={placeholder} value={value} type={type}
                   name={name} onChange={onChange}/>
        </div>
    )


};
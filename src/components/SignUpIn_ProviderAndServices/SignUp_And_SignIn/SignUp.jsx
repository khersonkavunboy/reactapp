import React  from 'react';

export const SignUp = () => {
    return (
        <div>
        <div className="box1">
            <form>
                <input type="text" className="fadeIn second" name="nameCompany" placeholder="Enter name company"/>
                <input type="text" className="fadeIn second" name="address" placeholder="Enter address"/>
                <input type="text" className="fadeIn second" name="type" placeholder="Enter type"/>
                <div className="form-group fadeIn second">
                    <input type="text" name="fromHours" placeholder="Working from hours"/>
                    <input type="text" name="toHours" placeholder="Working to hours"/>
                </div>
                <input type="email" className="fadeIn second" name="email" placeholder="Enter email"/>
                <input type="password" className="fadeIn second" name="password" placeholder="Enter password"/>
                <input type="submit" className="fadeIn second" value="Sign Up"/>
            </form>
        </div>
        </div>
    )
}
import React from 'react';

export const Login = () => {
    return (
        <>
            <form>
                <input type="email" id="email" className="fadeIn second" name="email" placeholder="Enter email"/>
                <input type="password" id="password" className="fadeIn second" name="password"
                       placeholder="Enter password"/>
                <input type="submit" className="fadeIn second" value="Sign In" />
            </form>
        </>
    );
}
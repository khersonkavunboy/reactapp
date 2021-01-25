import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./HorizontalMenu.css"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export const HorizontalMenu = () => {
    const [state, setState] = useState(false);
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo"><NavLink to={"/"} className="nav-links" >Главная</NavLink></h1>

            <div className="menu-icon" onClick={() => setState(prevState => !prevState)}>
                {state ? <CloseIcon className="favBar"/> : <MenuIcon className="favBar"/>}
            </div>

            <ul className={state ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <NavLink className="nav-links" exact to={"/Provider"}>Provider</NavLink>
                    <NavLink className="nav-links" to={"/Client"}>Client</NavLink>
                    <NavLink className="nav-links" to={"/PagesViewProvider"}>View data provider</NavLink>
                </li>
            </ul>
        </nav>
    );
}
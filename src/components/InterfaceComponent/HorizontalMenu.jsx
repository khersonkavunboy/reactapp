import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./HorizontalMenu.css"
import CategoryIcon from '@material-ui/icons/Category';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export default  function HorizontalMenu () {
    const [state, setState] = useState(false);
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo"><CategoryIcon/> <NavLink to={"/"} className="nav-links" >Image</NavLink> </h1>

            <div className="menu-icon" onClick={() => setState(prevState => !prevState)}>
                {state ? <CloseIcon className="favBar"/> : <MenuIcon className="favBar"/>}
            </div>
            <ul className={state ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <NavLink className="nav-links" to={"/Provider"}>Provider</NavLink>
                    <NavLink className="nav-links" to={"/Client"}>Client</NavLink>
                    <NavLink className="nav-links" to={"/TestData"}>TestData</NavLink>
                </li>
            </ul>
        </nav>
    );
}
import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from 'react-router-dom';
const Dialogs = (props) => {
    let path = "/coment/" + props.id;
    return (
<>
    <NavLink className={classes.navlink} to={path}>{props.name}</NavLink>
    <br/>
</>
    );
}
export default Dialogs;
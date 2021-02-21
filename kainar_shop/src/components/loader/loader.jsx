import React from 'react';
import classes from './loader.module.css';
import loader from "../../img/loader.gif";

const Loader = () => {
    return <>
        <img className={classes.loading} src={loader} />
        </>
}
export default Loader;
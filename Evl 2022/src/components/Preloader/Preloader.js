import React from 'react';
import classes from "./Preloader.module.css";
import loader from "../../img/preloader.svg";
const Preloader = () => {
    return(
        <div className={classes.container}>
            <img className={classes.loading} src={loader} />
        </div>
    );
}
export default Preloader;

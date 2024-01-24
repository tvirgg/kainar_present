import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Users-cont.module.css';
import loader from "../../img/loading.gif";

const Loader = (props) => {
    return <>
        <img className={classes.loading} src={loader} />
        </>
}
export default Loader;
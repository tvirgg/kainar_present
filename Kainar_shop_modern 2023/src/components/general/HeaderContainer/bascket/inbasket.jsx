import React from 'react';
import classes from "../header.module.css";
const Bascket_item = (props) => {
    return (
        <>
            <div className={classes.list}>
                <h2>----------</h2>
                <h4 className={classes.item_name}>
                    name : {props.name}
                </h4>
                <h4 className={classes.item_name}>
                    price : {props.price}
                </h4>
                <h4 className={classes.item_name}>
                    pieces : {props.pieces}
                </h4>
                <h2>----------</h2>
            </div>
        </>
    );
}
export default Bascket_item;
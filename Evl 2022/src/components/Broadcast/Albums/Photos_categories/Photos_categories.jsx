import React, {useEffect, useState} from 'react';
import classes from "./Photos_categories.module.css";
import classNames from "classnames";

const Photos_categories = (props) => {
    var item = classNames({
        [classes.item]: true,
    });
    return (
            <div className={classes.item_container}>
                <div className={item} style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/'+props.id+'.png'})`
                }} onClick={()=>{
                        props.setisopen(!props.isopen)
                }}>
                </div>
                <div className={classes.item_contant}>
                    <div className={classes.item_contant_svg_block}>
                    </div>
                </div>
            </div>
    );
}
export default Photos_categories;

import React, {useEffect, useRef, useState} from 'react';
import classes from "./Litle_elements.module.css";
import classNames from "classnames";
const Litlemenu_element = (props) => {
    const ref = useRef(null);
    var albumes_photos = classNames({
        [classes.albumes_photos_item]: true,
        [classes.albumes_photos_item_active]: (props.id===props.curent_photo.id)
    });
    useEffect(() => {
        const img = new Image();
        img.src = `${process.env.PUBLIC_URL + '/'+props.id+'gta.png'}`;
        img.onload = function() {
            ref.current.style = `width: 36px; height: 36px; background-image: url(${process.env.PUBLIC_URL + '/'+props.id+'gta.png'}) !important`;
        }
    },[]);
    return (
        <div>
            <div className={albumes_photos} ref={ref} onClick={()=>{
                props.setIsgaler(true);
                props.SetCurrentphoto({url:`${process.env.PUBLIC_URL + '/'+props.id+'gta.png'}`, id:props.id});
            }}/>
        </div>

    );
}
export default Litlemenu_element;

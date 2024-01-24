import React, {useEffect, useRef, useState} from 'react';
import classes from "./Litle_elements.module.css";
import classNames from "classnames";
const Litlemenu_element = (props) => {
    const ref = useRef(null);
    var albumes_photos = classNames({
        [classes.albumes_photos_item]: true,
        [classes.albumes_photos_item_active]: (props.id===props.curent_photo.id)
    });
    let objectform = (photo, id)=>{
        let newibj={
            id: id,
            url: photo
        }
        return newibj;
    }
    useEffect(() => {
            ref.current.style = `width: 36px; height: 36px; background-image: url(http://167.71.38.182/images${props.photo.url}) !important`;
    },[]);
    return (
        <div>
            <div className={albumes_photos} ref={ref} onClick={()=>{
                props.setIsgaler(true);
                props.SetCurrentphoto(objectform(props.photo.url, props.id));
            }}/>
        </div>

    );
}
export default Litlemenu_element;

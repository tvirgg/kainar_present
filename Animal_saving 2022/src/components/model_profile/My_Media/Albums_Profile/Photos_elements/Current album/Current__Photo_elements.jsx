import React, {useEffect, useRef, useState} from 'react';
import classes from "./Current__Photo_elements.module.css";
const Current__Photos_element = (props) => {
    useEffect(() => {
    },[]);
    const ref = useRef(null);
    useEffect(() => {
        const img = new Image();
        img.src = `${props.photo}`;
        img.onload = function() {
            ref.current.style = `width: ${130*(this.width/this.height)}px; height: 130px; background-image: url(${props.photo}) !important`;
        }
    },[]);
    return (
        <div>
            <div className={classes.albumes_photos_item} ref={ref} onClick={()=>{
                props.setIsgaler(true);
                props.SetCurrentphoto({url:`${props.photo}`, id:props.id});
            }}/>
        </div>

    );
}
export default Current__Photos_element;

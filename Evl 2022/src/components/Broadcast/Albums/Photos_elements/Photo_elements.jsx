import React, {useEffect, useRef, useState} from 'react';
import classes from "./Photo_elements.module.css";
const Photos_element = (props) => {
    const ref = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.src = `${process.env.PUBLIC_URL + '/'+props.id+'gta.png'}`;
        img.onload = function() {
            ref.current.style = `width: ${130*(this.width/this.height)}px; height: 130px; background-image: url(${process.env.PUBLIC_URL + '/'+props.id+'gta.png'}) !important`;
        }
    },[]);
    return (
        <div>
            <div className={classes.albumes_photos_item} ref={ref} onClick={()=>{
                props.setIsgaler(true);
                                props.SetCurrentphoto({url:`${process.env.PUBLIC_URL + '/'+props.id+'gta.png'}`, id:props.id});
            }}/>
        </div>

    );
}
export default Photos_element;

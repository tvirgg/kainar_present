import React, {useEffect, useLayoutEffect, useRef} from 'react';
import classes from "./Photo_elements.module.css";

const Photos_element = (props) => {
    const ref = useRef(null);
    const fer = useRef(null);
    let objectform = (photo, id)=>{
        return {
            id: id,
            url: photo
        };
    }
    let oncheked = ()=>{
        if (fer.current.checked){
            props.SET_selectedimagearray(props.id);
        }else {
            props.DELITEFROMIMAGESDELECTAC(props.id);
        }
    }

    useLayoutEffect(() => {
        const img = new Image();
        img.src = `http://167.71.38.182/images${props.photos}`;
        img.onload = function() {
            ref.current.style = `width: ${150*(this.width/this.height)}px; height: 150px; background-image: url(http://167.71.38.182/images${props.photos}) !important`;
        }
    },[props.photos]);
    return (
        <div className={classes.albumes_photos_block}>
            <div className={classes.albumes_photos_item} ref={ref} onClick={()=>{
                props.setIsgaler(true);
                props.SetCurrentphoto(objectform(`${props.photos}`, props.id));

            }}>
            </div>
            {
                props.isimageselecting &&
                <div className={classes.edit_block}>
                    <input ref={fer} type="checkbox" id={`chekboxphotoelements${props.id}`} className={classes.chekbox}
                           onChange={() => {
                               oncheked();
                           }}/>
                    <label htmlFor={`chekboxphotoelements${props.id}`} id={`chekboxphotoelements${props.id}`}/>
                </div>
            }
        </div>

    );
}
export default Photos_element;

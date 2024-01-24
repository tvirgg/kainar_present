import React, {useEffect} from 'react';
import classes from "./Vide.module.css";
import {useRef} from "react";
import {NavLink} from "react-router-dom";
const Vide = (props) => {
    let ref = useRef();
    let mainref = useRef();
    useEffect(()=>{
        if (props.value.animal !== '' && mainref){
            mainref.current.style = `background-image: url(https://video.knightdomservers.com/thumbnail/${props.value.cover_img});`;
        }
    },[props.value.animal]);
    useEffect(()=>{
        if (props.country !== '' && props.country !== undefined){
            ref.current.style = `background-image: url(https://video.knightdomservers.com/thumbnail/${props.country}.svg);`;
        }
        else{
            ref.current.style = 'display: none';
        }
    },[props.country]);
    return (
        <NavLink to='/broadcasting' onClick={()=>{props.SETCURRENT(props.index+1); props.SETCURRENT_VideowatchAC(props.value? props.value: localStorage.getItem('current_video'));}} className={classes.len_elem} id='some' ref={mainref}>
            <div className={classes.left_top__block}>
                {
                    props.lovense_key && <div className={classes.toy_svg_block}>
                        <svg width="14px" viewBox="0 0 20 20" className={classes.toy_svg}><g><path d="M18.41 1.73c.86.8.08 3.14-.85 4.05L6.42 16.68a.24.24 0 01-.32 0L3.05 13.7a.23.23 0 010-.32L14.2 2.48c.93-.9 3.37-1.56 4.22-.75zM2.34 14.43l3.04 2.97a.23.23 0 010 .33l-1.49 1.45a.25.25 0 01-.33 0L.52 16.22a.23.23 0 010-.33l1.49-1.45a.25.25 0 01.33 0z"/><path d="M9.16 3.58c.38-.06.73.21.78.57.05.38-.23.72-.62.8 0 0-1.77-.16-3.12 1.14C4.85 7.39 5 8.98 5 8.98a.7.7 0 01-.8.59h-.02c-.4-.06-.66-.4-.6-.77 0 0-.07-2.06 1.61-3.68 1.68-1.61 3.97-1.54 3.97-1.54zm1.07 11.82a.72.72 0 01.63-.78s1.77.18 3.14-1.1c1.38-1.27 1.24-2.86 1.24-2.86a.7.7 0 01.81-.58h.04c.38.07.65.41.58.78 0 0 .03 2.06-1.68 3.65-1.7 1.58-4 1.48-4 1.48a.68.68 0 01-.76-.6z" opacity=".6"/><path d="M9.27.56c.05.4-.23.78-.62.88 0 0-3 .34-4.93 2.14-1.94 1.8-2.2 4.99-2.2 4.99a.83.83 0 01-.91.6H.57c-.4-.05-.66-.4-.54-.8 0 0 .1-3.39 2.56-5.8C5.06.15 8.47.02 8.47.02a.63.63 0 01.8.54zm1.46 18.88a.83.83 0 01.62-.88s3-.34 4.94-2.14c1.93-1.8 2.19-4.99 2.19-4.99a.83.83 0 01.91-.6h.04c.4.05.66.4.54.8 0 0-.1 3.39-2.56 5.8a8.56 8.56 0 01-5.88 2.55.63.63 0 01-.8-.54z" opacity=".2"/></g></svg>
                        <div className={classes.toy_svg_discr}>
                        </div>
                    </div>
                }
                {
                    (props.device == 'phone') && <div className={classes.phone_svg_block}>
                        <svg width="14px" viewBox="0 0 16 22" className={classes.phone_svg}><g fill="none"><path d="M0 20.167V1.833C0 .821.895 0 2 0h12c1.105 0 2 .82 2 1.833v18.334C16 21.179 15.105 22 14 22H2c-1.105 0-2-.82-2-1.833z" fill="#000" opacity=".6"/><path d="M3 17.756V4.244C3 3.557 3.627 3 4.4 3h7.2c.773 0 1.4.557 1.4 1.244v13.512c0 .687-.627 1.244-1.4 1.244H4.4c-.773 0-1.4-.557-1.4-1.244zM4 16h8V5H4v11zm5 1.5c0-.276-.448-.5-1-.5s-1 .224-1 .5.448.5 1 .5 1-.224 1-.5z" fill="#FFF"/></g></svg>
                        <div className={classes.phone_svg_discr}>
                                <span>
                                    Трансляция через телефон
                                </span>
                        </div>
                    </div>
                }
            </div>
            <div className={classes.bottom__block}>
                <div className={classes.bottom__block__name}>
                    {
                        props.video_name
                    }
                </div>
                <div className={classes.country_svg_block} ref={ref}>
                </div>
            </div>
            <div className={classes.len_elem_height}>
            </div>
        </NavLink>
    );
}
export default Vide;

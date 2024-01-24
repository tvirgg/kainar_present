import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from "./albumes.module.css";
import Cards from "./Photos_categories/Photos_categories";
import Photos_element from "./Photos_elements/Photo_elements";
import {useLocation} from "react-router-dom";
import Litlemenu_element from "./Little_menu/Litle_elements";
export default function Albumes(props) {
    const [isopen, setisopen] = useState(true);
    const galer_photo = useRef(null);
    const [isgaler, setIsgaler] = useState(false);
    useLayoutEffect(() => {
        if (isgaler){
            document.getElementById('header_container').style = "z-index: 0 !important;";
        }
    },[isgaler]);
    const location = useLocation();
    let lengmass = [
        { id :1},
        { id :2},
        { id :3},
        { id :4},
        { id :5},
        { id :6},
        { id :7}
    ]
    function Setphoto_coleg(a){
        props.SetCurrentphoto({
            url: `${process.env.PUBLIC_URL + '/' + props.current_photo.id + a + 'gta.png'}`,
            id: props.current_photo.id + a
        });
    }
    function Setphoto(side){
        if (side) {
            if (props.current_photo.id < lengmass.length){
                console.log(props.current_photo.id);
                Setphoto_coleg(1);
            }else{
                Setphoto_coleg(-(lengmass.length-1));
            }
        }else{
            if (props.current_photo.id > 1){
                Setphoto_coleg(-1);
            }else{
                Setphoto_coleg((lengmass.length-1));
            }
        }
    }
    useEffect(() => {
        if (isgaler){
            const img = new Image();
            img.src = `${process.env.PUBLIC_URL + '/'+props.current_photo.id+'gta.png'}`;
            img.onload = function() {
                galer_photo.current.style = `background-image: url(${process.env.PUBLIC_URL + '/'+props.current_photo.id+'gta.png'}) !important`;
            }
        }
    },[isgaler, props.current_photo]);
    useEffect(() => {
        if(isgaler){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflowY = 'scroll';
            document.body.style.overflowX = 'hidden';
        }
    },[isgaler, location.pathname]);
    let Cards_item = lengmass.map( m => <Cards id ={m.id} key={m.id} setisopen={setisopen} isopen={isopen}/> );
    let Photos_elements = lengmass.map( m => <Photos_element SetCurrentphoto={props.SetCurrentphoto} id ={m.id} key={m.id} isgaler={isgaler} setIsgaler={setIsgaler}/> );
    let Little_menu = lengmass.map( m => <Litlemenu_element SetCurrentphoto={props.SetCurrentphoto} id ={m.id} key={m.id} isgaler={isgaler} setIsgaler={setIsgaler} curent_photo={props.current_photo}/> );
    return (
        <div className={classes.albumes}>
            <h2 className={classes.albumes_lable}>
                <a onClick={()=>{setisopen(true)}}>
                    Альбомы
                </a>
                {
                    !isopen && <div className={classes.albumes_photo_category__lable}>
                        <svg fill="#FFFFFFFF" height="15px" viewBox="0 0 100 100"><path d="m28.66 8.85 8.78-7.32 40.54 48.67-40.92 48.24-8.72-7.4 34.7-40.9"/></svg>
                        <h2>
                            Public
                        </h2>
                    </div>
                }
            </h2>
            {
                isopen &&
                <div className={classes.albumes_container_parent}>
                    <div className={classes.albumes_container}>
                        {
                            Cards_item
                        }
                    </div>
                </div>
            }
            {!isopen &&
                <div className={classes.albumes_photos__container}>
                    <div className={classes.albumes_photos}>
                        {
                            Photos_elements
                        }
                    </div>
                </div>
            }
            {
                isgaler &&
                    <div className={classes.galer_viewer}>
                        <div className={classes.galer_viewer_container}>
                            <a className={classes.galer_escape} onClick={()=>{setIsgaler(false)}}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M17.4009 0.613295C16.8809 0.0932946 16.0409 0.0932946 15.5209 0.613295L9.00094 7.11996L2.48094 0.599961C1.96094 0.0799609 1.12094 0.0799609 0.600937 0.599961C0.0809375 1.11996 0.0809375 1.95996 0.600937 2.47996L7.12094 8.99996L0.600937 15.52C0.0809375 16.04 0.0809375 16.88 0.600937 17.4C1.12094 17.92 1.96094 17.92 2.48094 17.4L9.00094 10.88L15.5209 17.4C16.0409 17.92 16.8809 17.92 17.4009 17.4C17.9209 16.88 17.9209 16.04 17.4009 15.52L10.8809 8.99996L17.4009 2.47996C17.9076 1.97329 17.9076 1.11996 17.4009 0.613295Z"/></svg>
                            </a>
                            <div className={classes.arrow_left} onClick={()=>{Setphoto(false)}}>
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M12.2322 18.5345L4.69023 10.9925L12.2322 3.45052C12.9903 2.69243 12.9903 1.46783 12.2322 0.709745C11.4741 -0.0483419 10.2495 -0.0483421 9.49144 0.709745L0.569348 9.63184C-0.188738 10.3899 -0.188738 11.6145 0.569348 12.3726L9.49144 21.2947C10.2495 22.0528 11.4741 22.0528 12.2322 21.2947C12.9709 20.5366 12.9903 19.2926 12.2322 18.5345Z"/></svg>
                            </div>
                                    <div ref={galer_photo} className={classes.galer_photo}>
                                    </div>
                            <div className={classes.arrow_right} onClick={()=>{Setphoto(true)}}>
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M0.767783 3.4655L8.30977 11.0075L0.767783 18.5495C0.00969629 19.3076 0.00969623 20.5322 0.767783 21.2903C1.52587 22.0483 2.75047 22.0483 3.50856 21.2903L12.4307 12.3682C13.1887 11.6101 13.1887 10.3855 12.4307 9.62738L3.50856 0.705284C2.75047 -0.0528028 1.52587 -0.0528029 0.767784 0.705284C0.0291352 1.46337 0.00969701 2.70741 0.767783 3.4655Z"/></svg>
                            </div>
                        </div>
                        <div className={classes.galer_viewer_stick}>
                            {
                                Little_menu
                            }
                        </div>
                    </div>
            }
        </div>
    );;
}

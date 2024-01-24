import React, {useCallback, useLayoutEffect, useRef, useState} from "react";
import classNames from "classnames";
import classes from "./header.module.css";
import {NavLink, useLocation} from "react-router-dom";
import logo from "../../img/logo.svg";
import { useEffect } from "react";
import useWindowScroll from "../Instruments/useWindowScroll";
import useWindowSize from "../Instruments/useWindowSize";

export default function Header(props) {
    const [menu, setMenu] = useState(false);
    const [categorymenu, setCategorymenu] = useState(false);
    const [mobilebtns, setMobilebtns] = useState(false);
    var categoryClass = classNames({
        [classes.mobile_category_block]: true,
        [classes.mobile_category_block_active]: categorymenu
    });
    var category_menuClass = classNames({
        [classes.category_menu__svg__active]: categorymenu,
    });
    var mobilemtns_menuClass = classNames({
        [classes.mobile_buttons]: true,
        [classes.mobile_buttons_active]: mobilebtns,
        [classes.mobile_buttons_active_input]: menu
    });
    var right_btns = classNames({
        [classes.right_block]: true,
        [classes.right_block_active]: menu

    });
    var login_btn = classNames({
        [classes.login]: true,
        [classes.btn]: true,
        [classes.onclose]: props.blockscren
    });
    let [profilemenu, setprofilemenu] = useState(false);
    var logout_menu = classNames({
        [classes.logout]: true,
        [classes.logout_active]: profilemenu,
    });
    var profile_block__svg = classNames({
        [classes.profile_block__svg]: true,
        [classes.profile_block__svg_active]: profilemenu,
    });
    const location = useLocation();
    let [login, setlogin] = useState(true);
    useEffect(()=>{
        if(location.pathname.split('/')[1] === 'login'){
            setlogin(false);
        }else{
            setlogin(true);
        }
    },[location.pathname]);
    useEffect(()=>{
        props.Setblock(false);
    },[
        location.pathname
    ]);
    const [y, setY] = useState(window.scrollY);
    const ref = useRef(null);
    const catrreg = useRef(null);
    const catref = useRef();
    const header_container = useRef(null);
    const kainar_nav = useRef(null);
    const header_container_block = useRef(null);
    const size = useWindowSize();
    let [way, setway] = useState(false);
    let [firstclose, setfirstclose] = useState(1);
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setprofilemenu(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    useEffect(() => {
        function handleClickOutside(event) {
            if(catrreg.current && !catrreg.current.contains(event.target)){
                setMenu(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [catrreg]);
    useEffect(() => {
        function handleClickOutside(event) {
            if(catref.current && !catref.current.contains(event.target)){
                setCategorymenu(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [catref]);
    let Set_headerposition = (a) =>{
        if(location.pathname.split('/')[1] === ''){
            if (header_container  && size.width <1024 &&  matchMedia('(pointer:coarse)').matches){
                if (!a && !way && scroll>=94) {
                    if (firstclose === 1){
                        header_container.current.style = "position: fixed;  top: -100px; transition: 0.4s;";
                        kainar_nav.current.style = "position: fixed;  top: -50px; transition: 0.4s;"
                        header_container_block.current.style = "padding-top: 94px;";
                        setway(true);
                        setfirstclose(2);
                    }
                    else if (firstclose === 2){
                        header_container.current.style = "position: fixed;  top: -100px; z-index: 500;";
                        kainar_nav.current.style = "position: fixed;  top: -50px; z-index: 150;"
                        header_container_block.current.style = "padding-top: 94px;";
                        setway(true);
                    }
                } else if (a && way){
                    header_container.current.style = "position: fixed; top: 0; z-index: 500;";
                    kainar_nav.current.style = "position: fixed; top: 54px; z-index: 150;";
                    header_container_block.current.style = "padding-top: 94px";
                    setway(false);
                }
            }
            else if (header_container && size.width >=1024){
                header_container.current.style = "position: fixed; top: 0; z-index: 500;";
                kainar_nav.current.style = "position: relative; top: 0; z-index: 150;"
                header_container_block.current.style = "padding-top: 54px;";
            }
        }
        else if(location.pathname.split('/')[1] === 'broadcasting'){
            kainar_nav.current.style = "display: none;";
            if (matchMedia('(pointer:coarse)').matches){
                if (header_container  && size.width <980 &&  matchMedia('(pointer:coarse)').matches){
                    if (!a && !way && scroll>=54) {
                        if (firstclose === 1){
                            header_container.current.style = "position: fixed;  top: -80px; transition: 0.4s;";
                            header_container_block.current.style = "padding-top: 54px; z-index: 500;";
                            setway(true);
                            setfirstclose(2);
                        }
                        else if (firstclose === 2){
                            header_container.current.style = "transition: 0.4s; position: fixed;  top: -80px; z-index: 500;";
                            header_container_block.current.style = "padding-top: 54px;";
                            setway(true);
                        }
                    } else if (a && way){
                        header_container.current.style = "position: fixed; top: 0; z-index: 500; transition: 0.4s;";
                        header_container_block.current.style = "padding-top: 54px";
                        setway(false);
                    }
                }
            }else{
                header_container.current.style = "transition: 0.4s; position: fixed;  top: 0; z-index: 500;";
                header_container_block.current.style = "padding-top: 54px;";
            }
        }
        else if(location.pathname.split('/')[1] === 'Model_profile' || 'friends' || 'moderators' || 'settings') {
            if (matchMedia('(pointer:coarse)').matches){
                if (header_container  && size.width <1024 &&  matchMedia('(pointer:coarse)').matches){
                    if (!a && !way && scroll>=74) {
                        if (firstclose === 1){
                            header_container.current.style = "position: fixed;  top: -80px; transition: 0.4s;";
                            header_container_block.current.style = "padding-top: 94px; z-index: 500;";
                            if(document.getElementById('profile_nav')){
                            document.getElementById('profile_nav').style = "position: fixed; top: -54px; z-index: 150; transition: 0.4s;";}
                            setway(true);
                            setfirstclose(2);
                        }
                        else if (firstclose === 2){
                            header_container.current.style = "transition: 0.4s; position: fixed;  top: -80px; z-index: 500;";
                            if(document.getElementById('profile_nav')){
                            document.getElementById('profile_nav').style = "position: fixed; top: -54px; z-index: 150; transition: 0.4s;";}
                            header_container_block.current.style = "padding-top: 94px;";
                            setway(true);
                        }
                    } else if (a && way){
                        header_container.current.style = "position: fixed; top: 0; z-index: 500; transition: 0.4s;";
                        if(document.getElementById('profile_nav')){
                        document.getElementById('profile_nav').style = "position: fixed; top: 54px; z-index: 150; transition: 0.4s;";}
                        if(location.pathname.split('/')[1] === 'categories'){
                        header_container_block.current.style = "padding-top: 54px";
                        }else{
                            header_container_block.current.style = "padding-top: 94px";
                        }
                        setway(false);
                    }
                }else if( size.width >1024){
                    if (scroll>=54){
                    header_container.current.style = "transition: 0.4s; position: fixed;  top: 0; z-index: 500;";
                    header_container_block.current.style = "padding-top: 54px; z-index: 500;";
                    if(document.getElementById('profile_nav')){
                    document.getElementById('profile_nav').style = "position: relative; top: 0; z-index: 150; transition: 0.4s;";}}
                }
            }else{
                header_container.current.style = "transition: 0.4s; position: fixed;  top: 0; z-index: 500;";
                if(document.getElementById('profile_nav')){
                document.getElementById('profile_nav').style = "position: relative; top: 0; z-index: 150; transition: 0.4s;";}
            }
        }
    }
        const handleNavigation = useCallback(
            e => {
                const window = e.currentTarget;
                if (y > window.scrollY) {
                    Set_headerposition(true);
                } else if (y < window.scrollY) {
                    Set_headerposition(false);
                }
                setY(window.scrollY);
            }, [y]
        );
    const scroll = useWindowScroll();
    useLayoutEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation, matchMedia('(pointer:coarse)').matches, location]);
    useLayoutEffect(() => {
        setY(window.scrollY);
        let cleanpathes = ['broadcasting', 'user', 'settings', 'docs', 'ref', 'moderators', 'friends', 'support', 'categories'];
        for(let d = 0; d<=cleanpathes.length-1;  d++){
            if (location.pathname.split('/')[1] == cleanpathes[d]){
                if (kainar_nav.current){
                    kainar_nav.current.style = "display: none;";
                }
            }
        }},[location.pathname]);
    useLayoutEffect(() => {
        setfirstclose(1);
        setway(false);
        if(location.pathname.split('/')[1] === '') {
            kainar_nav.current.style = "display: flex;";
            header_container_block.current.style = "padding-top: 54px";
            if (matchMedia('(pointer:coarse)').matches){
                header_container_block.current.style = "padding-top: 94px";
                header_container.current.style = "position: fixed; top: 0; z-index: 500; transition: 0.4s;";
                kainar_nav.current.style = "position: fixed; top: 54px; z-index: 150; transition: 0.4s;";
            }
        }
        else if (location.pathname.split('/')[1] !== ''){
            header_container_block.current.style = "padding-top: 54px";
            if(location.pathname.split('/')[1] === 'Model_profile'){
                if (matchMedia('(pointer:coarse)').matches){
                    if (size.width< 1024){
                        if ( document.getElementById('profile_nav')){
                            header_container_block.current.style = "padding-top: 94px";
                            document.getElementById('profile_nav').style = "position: fixed; top: 54px; z-index: 150; transition: 0.4s;";
                        }
                    }else{
                        if ( document.getElementById('profile_nav')){
                            header_container_block.current.style = "padding-top: 54px";
                            document.getElementById('profile_nav').style = "position: relative; top: 0; z-index: 150; transition: 0.4s;";
                        }
                    }
                }else{
                    if ( document.getElementById('profile_nav')){
                        document.getElementById('profile_nav').style = "position: relative; top: 0; z-index: 150; transition: 0.4s;";
                    }
                }
            }
        }
        if (header_container && size.width >=1024){
            header_container.current.style = "position: fixed; top: 0; z-index: 500;";
        }
    },[location.pathname, matchMedia('(pointer:coarse)').matches]);
    /*///////////////////////////////////////////////////////////////////////////*/
    let mobilemenu = useRef();
    useEffect(() => {
        function handleClickOutside(event) {
            if (mobilemenu.current && !mobilemenu.current.contains(event.target)) {
                setMobilebtns(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobilemenu]);
return(
        <div className={classes.header_container}  ref={header_container_block} id="header_container_block">
            <div className={classes.nav_block}  ref={header_container} id="header_container">
                <div className={classNames(classes.navbar, classes.nav_block_left)}>
                    <div className={classes.nav_block__items}>
                        <a onClick={() => { props.Hidemenu(!props.globalmenumode)}} className={classNames(classes.nav_element, classes.nav_btn)}>
                            <svg height="20px" fill="#ffffff" viewBox="0 -53 384 384" className={classes.header_global_menu__btn}
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                                <path
                                    d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                                <path
                                    d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                            </svg>
                        </a>
                        <NavLink  to='/'>
                            <img alt="logo" src={logo} className={classes.nav_block__logo}/>
                        </NavLink>
                    </div>
                </div>
                <div>
                    <div className={classes.center_block}>
                        {
                            props.isauth &&
                        <NavLink  to='/upload_video'>
                            <h1>UPLOAD</h1>
                        </NavLink>
                        }
                    </div>
                </div>
                {
                    !props.isauth && <div>
                    <div className={right_btns}>
                        <div className={classNames(classes.nav_butons)}>
                            <a className={classNames(classes.btn_signup, classes.btn)} onClick={()=>{props.SetRegistrationblock(true)}}>Регистрация</a>
                            {login && <a className={login_btn} onClick={()=>{props.SetLOGINblock(true);}}>Вход</a>}
                        </div>
                    </div>
                    <div>
                        <a className={mobilemtns_menuClass} onClick={()=>{if(!mobilebtns){setMobilebtns(!mobilebtns)}}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="30px" fill="#f1f1f1">
                                <path d="M116,64a12,12,0,1,1,12,12A12.01375,12.01375,0,0,1,116,64Zm12,52a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,116Zm0,64a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,180Z"/>
                            </svg>
                        </a>
                        {mobilebtns &&
                        <div className={classes.mobile_buttons_block} ref={mobilemenu}>
                            <div className={classes.mobile_buttons_block__buttons}>
                                <a className={classNames(classes.btn_signup, classes.btn, classes.btn_signup_mobile)} onClick={()=>{props.SetRegistrationblock(true);
                                    setMobilebtns(false);}}>Регистрация</a>
                                    {login && <a className={classNames(classes.login, classes.btn, classes.login_mobile)} onClick={()=>{ props.Setblock(true); setMobilebtns(false);}}>Вход</a>}
                            </div>
                        </div>
                        }
                    </div>
                </div>
                }
                {
                    props.isauth &&
                        <div className={classes.start_broadcasting_container}>
                            <div className={classNames(logout_menu)} onClick={()=>{setprofilemenu(!profilemenu)}}>
                                <div className={classes.profile_block__photo_img} style={{
                                    backgroundImage: `url("https://video.knightdomservers.com/thumbnail/${props.profilePhoto}")`
                                }}/>
                                <svg className={classNames(profile_block__svg)} viewBox="0 0 10 5"><path fill="#FFFFFFFF" d="m10 0-5 5-5-5z"/></svg>
                                {
                                    profilemenu && <div className={classes.profile_block_menucontainer} ref={ref}>
                                        <NavLink to={`/myprofile`} className={classes.profile_block_menucontainer_main_item}>
                                            <div className={classes.profile_block_menucontainer_main_item_ava} style={{
                                                backgroundImage: `url("https://video.knightdomservers.com/thumbnail/${props.profilePhoto}`
                                            }}/>
                                            <p className={classes.profile_block_menucontainer_main_item_p}>
                                                {
                                                    props.nick
                                                }
                                            </p>
                                        </NavLink>
                                        <div className={classes.profile_block_menucontainer_hr}/>
                                        <NavLink to={`/myprofile`} className={classes.profile_block_menucontainer_item}>
                                            <svg className={classes.profile_block_menucontainer_item_svg} viewBox="0 0 100 100"><path stroke="null" d="M64.909 66.439c5.504 1.826 29.79 12.403 29.79 12.403 2.847 1.231 5.08 4.674 5.08 7.726v-.946c0 3.08-2.454 5.714-5.482 5.946 0 0-26.869 2.198-44.245 2.198-17.989 0-44.265-2.186-44.265-2.186C2.7 91.344.221 88.673.221 85.622v.946c0-3.08 2.246-6.508 5.017-7.72 0 0 24.847-10.947 29.873-12.41 5.026-1.462 9.868-.345 14.889-.423 4.995-.079 9.404-1.403 14.909.424zm.544-21.986c-3.502 5.628-8.787 11.585-15.4 11.585-6.221 0-10.877-5.453-15.403-11.585C31.014 39.526 31.6 32.51 31.6 23.256c0-9.255 7.235-17.022 18.453-17.022 10.865 0 18.399 7.332 18.399 15.559s.504 17.033-2.998 22.66z" fillRule="evenodd"/></svg>
                                            <p className={classes.profile_block_menucontainer_item_p}>
                                                Мой профиль
                                            </p>
                                        </NavLink>
                                        <div className={classes.profile_block_menucontainer_hr}/>
                                        <div className={classes.profile_block_menucontainer_item} onClick={()=>{props.LOGOUTAC()}}>
                                            <svg className={classes.profile_block_menucontainer_item_svg} viewBox="0 0 100 100"><path stroke="null" d="M50 99.219c27.183 0 49.219-22.036 49.219-49.219S77.183.781 50 .781.781 22.817.781 50 22.817 99.219 50 99.219zM36.347 20.213v12.193c-5.012 4.009-8.222 10.176-8.222 17.093 0 12.081 9.794 21.875 21.875 21.875s21.875-9.794 21.875-21.875c0-6.921-3.214-13.091-8.23-17.1V20.21c11.31 5.178 19.167 16.596 19.167 29.85C82.813 68.18 68.123 82.87 50 82.87S17.187 68.181 17.187 50.06c0-13.25 7.854-24.666 19.16-29.846zm8.212-8.494h10.91v27.344h-10.91V11.719z" fillRule="evenodd"/></svg>
                                            <p className={classes.profile_block_menucontainer_item_p}>
                                                Выйти
                                            </p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                }
            </div>
            <div className={classNames(classes.kainar_nav, classes.firstmode_nav_block)} id="kainar_nav" ref={kainar_nav}>
                <div className={classNames(classes.nav, classes.firstmode_nav)}>
                    <NavLink className={classNames(classes.nl, classes.adapt_first_nl)} activeClassName={classes.nla} exact to="/">Главная</NavLink>
                </div>
                {menu &&
                        <div className={classes.mobile_search_input_block} ref={catrreg}>
                            <svg className={classes.mobile_search_input_block_search__svg} height="18px" fill="#F8F8F87F"
                                 viewBox="0 0 19.9 19.7">
                                <g fill="none" stroke="#848F91">
                                    <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/>
                                    <circle cx="8" cy="8" r="7"/>
                                </g>
                            </svg>
                            <input className={classes.mobile_search_input_block__input} autoFocus={true} placeholder={''} role="search"/>
                            <a onClick={()=>{setMenu(false)}} className={classes.mobile_search_input_block_closesvg_block}>
                                <svg id="icons-close-3"
                                     viewBox="0 0 100 100" height="15px">
                                    <path fill="#6c6d6f"
                                          d="M95.497 82.93l-32.7-32.7 32.7-32.701a8.992 8.992 0 0 0 0-12.745 8.992 8.992 0 0 0-12.744 0l-32.701 32.7-32.701-32.7a8.992 8.992 0 0 0-12.745 0 8.992 8.992 0 0 0 0 12.745l32.7 32.7-32.7 32.702a8.992 8.992 0 0 0 0 12.744 8.992 8.992 0 0 0 12.745 0l32.7-32.7 32.702 32.7a8.992 8.992 0 0 0 12.744 0c3.506-3.53 3.506-9.239 0-12.744z"/>
                                </svg>
                            </a>
                    </div>
                }
                {!menu &&
                <div className={classes.right_nav}>
                    <a className={categoryClass} onClick={()=>{setCategorymenu(!categorymenu)}}>
                        <svg id="icons-categories" viewBox="0 0 100 100" width="15px" height="15px" fill="#ffffff">
                            <path d="M6.3 25.4h87.4a5.5 5.5 0 0 0 0-11H6.3a5.5 5.5 0 0 0 0 11zm0 60.1H39c3 0 5.4-2.4 5.4-5.4 0-3-2.4-5.5-5.4-5.5H6.3a5.5 5.5 0 0 0 0 11zm0-30h60.1a5.5 5.5 0 0 0 0-11H6.3a5.5 5.5 0 0 0 0 11z" stroke="null"/>
                        </svg>
                        <span className={classes.mobile_category_text}>
                            Категории
                        </span>
                        <div className={classes.triangle}>
                            <svg className={category_menuClass} height="8px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="#ffffff"
                                   viewBox="0 0 28.769 28.769">
                                <g id="c106_arrow">
                                    <path d="M28.678,5.798L14.713,23.499c-0.16,0.201-0.495,0.201-0.658,0L0.088,5.798C-0.009,5.669-0.027,5.501,0.04,5.353
                                C0.111,5.209,0.26,5.12,0.414,5.12H28.35c0.16,0,0.31,0.089,0.378,0.233C28.798,5.501,28.776,5.669,28.678,5.798z"/>
                                </g>
                            </svg>
                        </div>
                    </a>
                    <div>
                        <a className={classes.mobile_search} onClick={() => {
                            setMenu(true);
                        }}>
                            <svg className={classes.mobile_search__svg} height="18px"
                                 viewBox="0 0 19.9 19.7">
                                <g>
                                    <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/>
                                    <circle cx="8" cy="8" r="7"/>
                                </g>
                            </svg>
                            <span className={classes.mobile_search__text}>

                            </span>
                        </a>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

import React, {useState, useEffect, useLayoutEffect} from 'react';
import classes from './globalmenu.module.css';
import {NavLink, useLocation} from "react-router-dom";
import classNames from "classnames";
import Cards from "./Cards/card.jsx";
import useWindowSize from "../Instruments/useWindowSize";
import useWindowScroll from "../Instruments/useWindowScroll";
export default function GlobalMenu(props) {
    const location = useLocation();
    const [pathgender, setPathgender] = useState('general');
    const [path, setPath] = useState(false);
    const [goodpath, setgoodpath] = useState([ '', 'general', 'news', 'favorites', 'collection', 'history']);
    const [r, setr] = useState(true);
    const [s, sets] = useState(false);
    const size = useWindowSize();
    useEffect(() => {
        if((size.width<1024 && !props.globalmenu === true) ||(props.registermenu === false && !props.globalmenu === true)){
            props.Setblock(true);
        }else if ((size.width<1024 && !props.globalmenu === false) ||(props.registermenu === false && !props.globalmenu === false)){
            props.Setblock(false);
        }else {
            props.Setblock(false);
        }
    }, [size.width, props.globalmenu]);
    useLayoutEffect(() => {
        for(let i = 0; i<=6; i++){
            if(location.pathname.split('/')[1] == goodpath[i]){
                props.Setregister(true);
                if (size.width>1024){
                    props.Setglobalmenu(false);
                }
                if(location.pathname.split('/')[1] === ''){
                    setPathgender('general');
                    setPath(true);
                    break;
                } else{
                    setPath(true);
                    break;
                }
            }
            else if(location.pathname.split('/')[1] !== goodpath[i]){
                setPath(false);
                props.Setglobalmenu(true);
                props.Setregister(false);
            }
        }
    },[location.pathname]);
    const scroll = useWindowScroll();
    useLayoutEffect(() => {
        var global_menu = document.getElementById('global_menu');
        var forign = document.getElementById('forign');
        if(scroll>35 && size.width>1023 && props.registermenu === true) {
            global_menu.style = "position: fixed; top: 54px;";
            if(props.globalmenu === true){
                forign.style = "display: block; width: 64px; height: calc(100vh - 37px);";
            }else{
                forign.style = "display: block; width: 218px; height: calc(100vh - 37px);";
            }
        }else if(size.width>1023 && props.registermenu === true){
            global_menu.style = "position: static;";
            forign.style = "display: none;";
        }else if (size.width<=1024 || props.registermenu === false){
            forign.style = "display: none;";
            global_menu.style = "position: fixed !important; top: 54px; transition: 0.4s !important;";
        }
    },[scroll, size.width, props.globalmenu, props.registermenu]);
    useLayoutEffect(() => {
        if(size.width<1024){
            if(r === true){
                sets(props.globalmenu);
                props.Hidemenu(true);
                setr(false);
            }
        }
        else if(size.width>=1024){
            if(r === false) {
                setr(true);
                props.Hidemenu(s);
            }
        }
    }, [props, r, s, size.width]);
    let Movenav = () =>{
        if (size.width<=1023 || matchMedia('(pointer:coarse)').matches){
            props.Hidemenu(!props.globalmenu);
        }
    }
    var menu_blockParentClass = classNames({
        [classes.menu_container]: true,
        [classes.menu_container_active]: (!props.globalmenu === true),
        [classes.menu_container_abolute]: (!props.globalmenu === false && path ===false),
        [classes.menu_container_abolute_active]: (!props.globalmenu === true && path ===false)
    });
    var menu_blockClass = classNames({
        [classes.menu_block]: true,
        [classes.menu_block_active]: props.globalmenu
    });
    let lengmass = [
        { native :'Русский', key: "RUSSIAN"},
        { native :'English', key: "ENGLISH"},
        { native :'Deutsch', key: "GERMAN"},
        { native :'Français', key: "FRENCH"}
    ]
    let Cards_item = lengmass.map( m => <Cards key ={m.key} value={m} Setbasiclenguage={props.Setbasiclenguage}  language={props.language}/> );
    return(
        <div>
            <div className={menu_blockParentClass} id="global_menu">
                <div className={menu_blockClass}  id="global_menu__block">
                    <div className={classes.menu_block__main}>
                        <NavLink  onClick={()=>{Movenav()}} activeClassName={classes.menu_block__item_active} className={classNames(classes.menu_block__item, classes.menu_block__item_first)} exact to="/">
                            <div>
                                <svg fill="#909090" height="16px" className={classes.menu_block__item_svg} viewBox="0 0 16 16">
                                    <path d="M15.669 7.93L8.399.665a.564.564 0 00-.798 0L.331 7.93a1.13 1.13 0 00.798 1.929h.767v5.183c0 .313.252.565.564.565h3.281v-5.083h4.236v5.083h3.563a.564.564 0 00.565-.565V9.86h.766a1.13 1.13 0 00.798-1.929z"/>
                                </svg>
                            </div>
                            <span className={classes.menu_block_label}>
                            На главную
                </span>
                        </NavLink>
                    </div>
                    <div className={classes.alladd_block}>
                        <div className={classes.border_line}/>
                        <div className={classes.adding_block}>
                            <h1 className={classes.menu__label}>
                                ДЛЯ ТЕБЯ
                            </h1>
                            <NavLink to='/mammal' onClick={()=>{Movenav()}} className={classes.menu_block__item} activeClassName={classes.menu_block__item_active}>
                        <span className={classes.adding_block_label}>
                            Млекопитающие
                        </span>
                            </NavLink>
                            <NavLink to="/birds" onClick={()=>{Movenav()}} className={classes.menu_block__item} activeClassName={classes.menu_block__item_active}>
                        <span className={classes.adding_block_label}>
                            Птицы
                        </span>
                            </NavLink>
                            <NavLink onClick={()=>{Movenav()}} className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/amphibians'>
                        <span className={classes.adding_block_label}>
                            Земноводные
                        </span>
                            </NavLink>
                            <NavLink onClick={()=>{Movenav()}} className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/fish'>
                        <span className={classes.adding_block_label}>
                            Рыбы
                        </span>
                            </NavLink>
                        </div>
                    </div>

                    <div className={classes.alladd_block}>
                        <h1 className={classes.menu__label}>
                            ИНЦИКЛОПЕДИЯ
                        </h1>
                        <NavLink onClick={()=>{Movenav()}}  className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/mammal'>
                            <span className={classes.adding_block_label}>
                                Млекопитающие
                            </span>
                        </NavLink>
                        <NavLink onClick={()=>{Movenav()}}  className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/birds'>
                        <span className={classes.adding_block_label}>
                            Птицы
                        </span>
                        </NavLink>
                        <NavLink onClick={()=>{Movenav()}}  className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/fish'>
                        <span className={classes.adding_block_label}>
                            Земноводные
                        </span>
                        </NavLink>
                        <NavLink onClick={()=>{Movenav()}}  className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/amphibians'>
                        <span className={classes.adding_block_label}>
                            Рыбы
                        </span>
                        </NavLink>
                        <NavLink onClick={()=>{Movenav()}}  className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/iut'>
                        <span className={classes.adding_block_label}>
                            Ракообразные
                        </span>
                        </NavLink>
                        <NavLink onClick={()=>{Movenav()}}  className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/iut'>
                        <span className={classes.adding_block_label}>
                            Экология
                        </span>
                        </NavLink>
                        <NavLink onClick={()=>{Movenav()}}  className={classes.menu_block__item} activeClassName={classes.menu_block__item_active} to='/iut'>
                        <span className={classes.adding_block_label}>
                            Вымирающие виды
                        </span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div id="forign">
            </div>
        </div>
    );
}

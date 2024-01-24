import React, {useEffect, useRef, useState} from 'react';
import classes from "./Main.module.css";
import Vide from "./Vide/Vide.jsx";
import classNames from "classnames";
import useWindowSize from "../Instruments/useWindowSize";
import {compose} from "redux";
import {connect} from "react-redux";
import {SETCURRENT_CHATMODELIDAC} from "../../redux/state/Broadcast_reducer";
const mapStateToProps = state => {
    return {
        videos: state.Broadcast_listData.videos,
        isvide: state.AppData.isvide
    }
};
const DispatchToProps = (dispatch) => {
    return {
        SETCURRENT_CHATMODELIDAC: (mode) =>{
            dispatch(SETCURRENT_CHATMODELIDAC(mode));
        }
    };
};
const Main = (props) => {
    const category_block = useRef(null);
    const [isclose, setIsclose] = useState(false);
    let Vide_item = props.videos.map( function(m, index){return( <Vide SETCURRENT={props.SETCURRENT_CHATMODELIDAC} index={index} key ={`${index}_girl_${m.id}`} value={m} country={m.country} name={m.name} lovense_key={m.lovense_key} device={m.device} cover={m.cover}/>) });
    function getScrollbarWidth() {
        // Creating invisible container
        const outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll'; // forcing scrollbar to appear
        outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
        document.body.appendChild(outer);
        // Creating inner element and placing it in the container
        const inner = document.createElement('div');
        outer.appendChild(inner);
        // Calculating difference between container's full width and the child width
        const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
        // Removing temporary elements from the DOM
        outer.parentNode.removeChild(outer);
        return scrollbarWidth;
    }
    function useWindowSized() {
        const [someSize, setWindowSize] = useState(1);
        function handleResized() {
            setWindowSize(document.getElementById('some').clientHeight);
        }
        useEffect(() => {
            window.addEventListener("resize", handleResized);
            handleResized();
            return () => window.removeEventListener("resize", handleResized);
        });

        return someSize;}

    function useWindowSolwed() {
        const [someSize, setWindowSize] = useState(1);
        function handleResized() {
            setWindowSize(someSize+1);
        }
        useEffect(() => {
            window.addEventListener("orientationchange", handleResized);
            handleResized();
            return () => window.removeEventListener("orientationchange", handleResized);
        },[]);

        return someSize;
    }

    let leilize = useWindowSolwed();
    let listheight = useWindowSized();
    let istablet = matchMedia('(pointer:coarse)').matches;
    let size = useWindowSize();
    let scrollbarWid = getScrollbarWidth();

    useEffect(() => {
        if(!isclose && matchMedia('(pointer:coarse)').matches === false) {
            let cancelled = false;
            const getHeight = () => {
                if (document.getElementById('some')){
                    const current =  document.getElementById('some');
                    if (!current || ! current.clientHeight ||current.clientHeight < 50) {
                        if (!cancelled) {
                            requestAnimationFrame(getHeight);
                        }
                    } else {
                        listheight = document.getElementById('some').clientHeight;
                        let rick = listheight * 2;
                        category_block.current.style= `height: ${rick}px`;
                    }
                }
            };
            getHeight();
            return () => {
                cancelled = true;
            };
        }
        else if(isclose && matchMedia('(pointer:coarse)').matches === false) {
            if (document.getElementById('some')){
                listheight = document.getElementById('some').clientHeight;
                let coll = listheight * 4 + 25;
                category_block.current.style= `height: ${coll}px`;
            }
        }
        else if(matchMedia('(pointer:coarse)').matches === true || scrollbarWid === 0) {
            if (document.getElementById('some')){
                listheight = document.getElementById('some').clientHeight;
                let sept = listheight * 2 + 15;
                category_block.current.style= `height: ${sept}px`;
            }
        }
    },[listheight, isclose, istablet, matchMedia('(pointer:coarse)').matches, scrollbarWid, size.width, navigator.maxTouchPoints, window.matchMedia("(orientation: portrait)"), leilize]); {/*/window.screen.orientation.angle/*/}
    let a = false;
    if (a){
        let b = window.screen.orientation.angle;
        console.log(b);
    }
    function Rebacca () {
        if (matchMedia('(pointer:coarse)').matches == true){
            listheight = document.getElementById('some').clientHeight;

            let corc = listheight * 2 + 20;
            category_block.current.style = `height: ${corc}px`;
        }
    }
    useEffect(() => {
        if (isclose){
            const interval = setInterval(() => {
                Rebacca();
            }, 2500);
            return () => clearInterval(interval);
        }
    },[isclose, matchMedia('(pointer:coarse)').matches]);//проверяем открыт ли, или сменился ли режим

    var see_all_buttonClass = classNames({
        [classes.see_all_button]: true,
        [classes.see_all_button_active]: isclose
    });
    var see_allClass = classNames({
        [classes.see_all]: true,
        [classes.see_all_active]: isclose
    });
    return (
        <div className={classes.category_block} id="ct_block">
            <a className={classes.category_block_a}>
                {props.name}
            </a>
            <div className={classes.main_block_container} ref={category_block} id="main_block_category">
                <div className={classes.main_block}>
                    {Vide_item}
                </div>
            </div>
            <div className={classes.bottom_line}>
                <div className={see_all_buttonClass}>
                    <a className={see_allClass} onClick={()=>{setIsclose(!isclose)}}>
                        <h2 className={classes.see_all__text}>
                            {isclose?`СВЕРНУТЬ`: `ЕЩЕ`}
                        </h2>
                        <svg className={classes.see_all__svg} viewBox="0 0 10 8" fill="#ffffff">
                            <path d="M1.41.795L5 4.375 8.59.795 10 2.205l-5 5-5-5L1.41.795z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default compose(
    connect(mapStateToProps,DispatchToProps),
)(Main);

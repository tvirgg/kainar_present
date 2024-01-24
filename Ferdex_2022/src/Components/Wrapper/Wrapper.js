import './Wrapper.css';
import robot from "../../images/robotic.png";
import robotic_mob from "../../images/robotic_mob.png";
import React, {useEffect, useMemo, useState} from "react";
import ds from "../../images/ds.svg";
import tw from "../../images/tw.svg";
import Wrapper_vector from "../../images/Wrapper_vector.png";

function Wrapper() {
    return (
        <div className="Wrapper block">
            <div className="header">
                <h2 className="header_label cover_top">
                    Ferdex
                </h2>
                <div className="header_right cover_top">
                    <a href="" className="header_right__a">
                        <img src={ds} alt="discord" />
                    </a>
                    <a href="" className="tw header_right__a">
                        <img src={tw} alt="twitter" className="header_icon"/>
                    </a>
                </div>
            </div>
            <div className="Wrapper_contain">
                <h1 className="Label cover_top">
                    Ferdex
                </h1>
                <a className="mint_btn">
                    <span className="cover_top">
                        MINT SOON
                    </span>
                </a>
                <img src={robot} className="main_roobt cover_top"/>
                <img src={robotic_mob} className="robotic_mob"/>
                <img src={Wrapper_vector} alt="Wrapper_vector" className="Wrapper_vector cover_top"/>
            </div>
        </div>
    );
}

export default Wrapper;

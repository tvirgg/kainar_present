import React from 'react';
import "./WeCan.css";
import desc from "../../images/Wecan.png";
import mob from "../../images/Wecan_mob.png";
const WeCan = () => {
    return (<div className="Wecan block uniq">
                <div className="Wecan_container">
                    <img src={desc} alt="" className="desc"/>
                    <img src={mob} alt="" className="mob"/>
                </div>
            </div>
        )
    };

export default WeCan;

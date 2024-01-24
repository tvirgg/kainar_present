import React from 'react';
import "./Team.css";
import desc from "../../images/team_desc.png";
import mob from "../../images/team_mob.png";
const Team = () => {
    return (<div className="Wecan block">
                <div className="Wecan_container">
                    <img src={desc} alt="" className="desc"/>
                    <img src={mob} alt="" className="mob"/>
                </div>
            </div>
        )
    };

export default Team;

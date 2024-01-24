import React from 'react';
import "./Team.css";
// import ubisoft from "../../images/Ubisoft.png";
// import dreamworks from "../../images/Dreamworks.png";
// import Lionsgate from "../../images/LionsGate.png";
const Team = () => {
    return (
        <div className="team">
            <div className="team__wrap">
                <div className='backgroudnTeam'></div>
                <div className="team_h1">
                    The Team
                </div>
                <div className="team__container">
                    <div className="team__container__item">
                        <div className="profile_photo">
                            <div className='Jimmy'></div>
                        </div>
                        <h2 className="team_card_Title">
                            Jimmy.meth 
                        </h2>
                    </div>
                    <div className="team__container__item">
                        <div className="profile_photo">
                            <div className='ALPAN'></div>
                        </div>
                        <h2 className="team_card_Title">
                            ALPAN
                        </h2>
                    </div>
                    <div className="team__container__item">
                        <div className="profile_photo">
                            <div className='ROLL'></div>
                        </div>
                        <h2 className="team_card_Title">
                            ROLL
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Team;

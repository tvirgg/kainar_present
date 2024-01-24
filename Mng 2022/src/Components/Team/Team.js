import React from 'react';
import "./Team.css";
import ubisoft from "../../images/Ubisoft.png";
import dreamworks from "../../images/Dreamworks.png";
import Lionsgate from "../../images/LionsGate.png";
const Team = () => {

    return (<div className="team">
                <div className="team__wrap">
                    <div animateIn="animate__fadeIn" animateOnce={true} className="team_h1">
                        The Team
                    </div>
                    <div className="team__container">
                        <div animateIn="animate__fadeInLeft" animateOnce={true} className="team__container__item">
                            <div className="profile_photo Eugene">
                            </div>
                            <h2 className="team_card_Title">
                                Ruzill
                            </h2>
                        </div>
                        <div animateIn="animate__fadeIn" animateOnce={true} className="team__container__item">
                            <div className="profile_photo Andrey">
                            </div>
                            <h2 className="team_card_Title">
                                Mountainz
                            </h2>
                        </div>
                        <div animateIn="animate__fadeInRight" animateOnce={true} className="team__container__item">
                            <div className="profile_photo Nikita">
                            </div>
                            <h2 className="team_card_Title">
                                Jpegalex.sol
                            </h2>
                        </div>
                    </div>
                    <div className="team__container secrow">
                        <div animateIn="animate__fadeInLeft" animateOnce={true} className="team__container__item">
                            <div className="profile_photo Anton">
                            </div>
                            <h2 className="team_card_Title">
                                Ant3zy
                            </h2>
                        </div>
                        <div animateIn="animate__fadeIn" animateOnce={true} className="team__container__item">
                            <div className="profile_photo RTZ">
                            </div>
                            <h2 className="team_card_Title">
                                RTZ
                            </h2>
                        </div>
                    </div>
                </div>
            <div className="companies">
                <img src={ubisoft} alt="" className="ubisoft"/>
                <img src={dreamworks} alt="" className="dreamworks"/>
                <img src={Lionsgate} alt="" className="Lionsgate"/>
            </div>
            </div>
        )
    };

export default Team;

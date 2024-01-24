import React from 'react';
import "./Team.css";
const Team = () => {

    return (<div className="team">
                <div className="team__wrap">
                    <div animateIn="animate__fadeIn" animateOnce={true} className="team_h1">
                        OUR TEAM
                    </div>
                    <div className="team__container">
                        <div animateIn="animate__fadeInLeft" animateOnce={true} className="team__container__item">
                            <div className="profile_photo Eugene">
                            </div>
                            <h2 className="team_card_Title">
                                Lil Joint
                            </h2>
                        </div>
                        <div animateIn="animate__fadeIn" animateOnce={true} className="team__container__item">
                            <div className="profile_photo Andrey">
                            </div>
                            <h2 className="team_card_Title">
                                Llinarr
                            </h2>
                        </div>
                        <div animateIn="animate__fadeInRight" animateOnce={true} className="team__container__item">
                            <div className="profile_photo Nikita">
                            </div>
                            <h2 className="team_card_Title">
                                Dr. Dope
                            </h2>
                        </div>
                    </div>
                    <div className="team__container secrow">
                        <div animateIn="animate__fadeIn" animateOnce={true} className="team__container__item">
                            <div className="profile_photo RTZ">
                            </div>
                            <h2 className="team_card_Title">
                                Big J
                            </h2>
                        </div>
                        <div animateIn="animate__fadeInLeft" animateOnce={true} className="team__container__item">
                            <div className="profile_photo Anton">
                            </div>
                            <h2 className="team_card_Title">
                                Chief Spliff
                            </h2>
                        </div>
                        <div animateIn="animate__fadeIn" animateOnce={true} className="team__container__item">
                            <div className="profile_photo RTZ_last">
                            </div>
                            <h2 className="team_card_Title">
                                1pac
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

export default Team;

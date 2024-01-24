import './About.css';
import React from "react";
import topleft from "../../images/Lian-topleft.png";
import botright from "../../images/Lian-botright.png";
import botleft from "../../images/Lian-botleft.png";
import topright from "../../images/Lian-topright.png";
import Galery from "../Galery/Galery";
function About() {
    return (

        <div className="About sect">
            <img src={topleft} alt="" className="topleft"/>
            <img src={topright} alt="" className="topright"/>
            <img src={botleft} alt="" className="botleft"/>
            <img src={botright} alt="" className="botright"/>
            <div className="block">
                <div className="About_text">
                    <h1 className="About_text_h1">
                        Who are <br></br><span className="vilet">MONGOMONS</span>?
                    </h1>
                    <p className="About_text_p">
                        <span className="vilet">Mongomons</span> is a collection of 10.000 exceptionally detailed creatures.
                        <br></br>
                        <br></br>
                        Their origin is so secret, that even <span className="vilet">Mongomons</span> forgot where they come from.
                        It is said that their land is an oasis filled with various forms of life.
                        <br></br>
                        <br></br>
                        At a first glance, they seem like cute and intelligent creatures, and in fact, they are!
                        You thought we would say the opposite, didn't you?
                    </p>
                </div>
            </div>
            <div className="galer_about">
                <Galery/>
            </div>
        </div>
    );
}

export default About;

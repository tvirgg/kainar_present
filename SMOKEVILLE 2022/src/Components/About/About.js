import './About.css';
import React from "react";
import Galery from "../Galery/Galery";
function About() {
    return (

        <div className="About sect">
            <div className="block">
                <div className="About_text">
                    <h1 className="About_text_h1">
                        Welcome to <span className="vilet">Smokeville</span>
                    </h1>
                    <p className="About_text_p">
                        <span className="vilet">Smokeville</span>  is a collection of 4444 smokers on Solana blockchain.
                        Good vibes and the best community ever. Combine that with the utility,
                        and you will be thriving. Community always comes first and we know that
                        better than anyone else.
                        <br></br>Join our server now, you won't regret it!
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

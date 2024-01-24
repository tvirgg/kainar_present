import React, {useEffect} from 'react';
import "./Preloader.css";
import wrapvideo from "../../images/loading.mp4";
const Preloader= () => {
    useEffect(() => {
        setInterval(() => {
            document.getElementById("preloader").style="opacity: 0 !important;";
        }, 3350);
    }, []);
    return (<div className="preloader">
                <div className="logo" id="preloader">
                    <video autoPlay muted loop className="logo_center">
                        <source src={wrapvideo} type="video/mp4"/>
                    </video>
                </div>
    </div>
    )
};

export default Preloader;

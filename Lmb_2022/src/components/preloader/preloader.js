import React, { useEffect } from 'react';
import "./preloader.css";
import "../base64_preloader.css";

const Preloader = () => {
    useEffect(() => {
        setInterval(() => {
            // document.getElementById("preloader").style = "opacity: 0 !important;";
        }, 1800);
    }, []);

    return (
        <div className="preloader">
            <div className="logoPreolder" id="preloader">
                {/* LUMBEERS */}
                {/* <svg className="imageLogoPreolder blob" version="1.0" xmlns="http://www.w3.org/2000/svg" width="1080.000000pt" height="1080.000000pt" viewBox="0 0 1080.000000 1080.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    </g>
                </svg>
                <img src={imageLogoPreolder} alt="" className="imageLogoPreolder blob" /> */}
                <div className='logo imageLogoPreolderLogo'><div className='imageLogoPreolderblock imageLogoPreolder blob'></div></div>
            </div>
        </div>
    )
};

export default Preloader;

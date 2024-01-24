import React, { useState, useEffect, useRef } from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Galery_sec.css";
import renderPrevButtonlink from "../../images/prev_next.png";
import transparentdorset from '../../images/transparentdorset.png'

const responsive = {
    0: { items: 1 },
    480: { items: 3 },
    740: { items: 4 },
    1024: { items: 5 },
};



const Galery_sec = () => {
    const [isgaler, setisgaler] = useState(false);
    const [curentphoto, setcurentphoto] = useState({
        id: 1,
        url: "/images/render32.png"
    });
    const images = [
        {
            id: 0,
            url: "/images/render32.png"
        },
        {
            id: 1,
            url: "/images/render41.png"
        },
        {
            id: 2,
            url: "/images/render42.png"
        },
        {
            id: 3,
            url: "/images/render52.png"
        },
        {
            id: 4,
            url: "/images/render57.png"
        },
        {
            id: 5,
            url: "/images/render59.png"
        },
        {
            id: 6,
            url: "/images/render61.png"
        },
        {
            id: 7,
            url: "/images/render62.png"
        },
        {
            id: 8,
            url: "/images/render63.png"
        }
    ];
    const items = [
        <img src={images[0].url} className="item" alt="" />,
        <img src={images[1].url} className="item" alt="" />,
        <img src={images[2].url} className="item" alt="" />,
        <img src={images[3].url} className="item" alt="" />,
        <img src={images[4].url} className="item" alt="" />,
        <img src={images[5].url} className="item" alt="" />,
        <img src={images[6].url} className="item" alt="" />,
        <img src={images[7].url} className="item" alt="" />,
        <img src={images[8].url} className="item" alt="" />
    ];
    let NIGHTS = items.map((m, key) =>
        <div className="item_block2" onClick={() => { setisgaler(true); setcurentphoto(images[key]); }} key={key}>
            {m}
        </div>
    );
    const changegalephoto = (arg) => {
        if (arg) {
            if (curentphoto.id + 1 !== images.length) {
                setcurentphoto(images[curentphoto.id + 1]);
            } else {
                setcurentphoto(images[0]);
            }
        } else {
            if (curentphoto.id !== 0) {
                setcurentphoto(images[curentphoto.id - 1]);
            } else {
                setcurentphoto(images[images.length - 1]);
            }
        }
    }
    useEffect(() => {
        if (isgaler) {
            document.body.style.overflowY = "hidden";
            // document.body.style.overflowX = "scroll";
        } else {
            document.body.style.overflowY = "scroll";
        }
        // console.log("galer changed");
    }, [isgaler]);
    const divStyle = {
        background: `url("${curentphoto.url}") no-repeat center`,
        width: "700px",
        backgroundSize: "contain",
        alignItems: "center"
    }
    return (
        <div className="galerbody_sec">
            <div className="galerbody_container">
                {
                    NIGHTS
                }
            </div>
            {/* <div className='galleryForsetTransparent'>
                <img src={transparentdorset} alt="" className='galleryForsetTransparent_image' />
            </div> */}
            {
                isgaler && <div className="Custgaler_sec">
                    <div className="cust_galer_container">
                        <div className="cust_galer_container_top" onClick={() => { setisgaler(false); }}>
                            <svg className="cust_galer_container_top__close" viewBox="0 0 100 100" height="20px" onClick={() => { setisgaler(false); }}>
                                <path
                                    d="M95.497 82.93l-32.7-32.7 32.7-32.701a8.992 8.992 0 0 0 0-12.745 8.992 8.992 0 0 0-12.744 0l-32.701 32.7-32.701-32.7a8.992 8.992 0 0 0-12.745 0 8.992 8.992 0 0 0 0 12.745l32.7 32.7-32.7 32.702a8.992 8.992 0 0 0 0 12.744 8.992 8.992 0 0 0 12.745 0l32.7-32.7 32.702 32.7a8.992 8.992 0 0 0 12.744 0c3.506-3.53 3.506-9.239 0-12.744z" />
                            </svg>
                        </div>
                        <div className="cust_galer_container_main">
                            <div style={divStyle} className="cust_galer_container_main__photo">
                            </div>
                        </div>
                        <div className="cust_galer_container_bottom">
                            <div className="cust_galer_container_bottom_block">
                                <div className="galer_prev" onClick={() => { changegalephoto(false); }}>
                                    <svg width="34" height="34" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow_galer inside reverse">
                                        <path d="M45.25 21.3708C49.5833 23.8727 49.5833 30.1273 45.25 32.6292L10.75 52.5478C6.41666 55.0496 1 51.9223 1 46.9186L1 7.08141C1 2.07771 6.41666 -1.0496 10.75 1.45225L45.25 21.3708Z" fill="#FFFFFF" />
                                    </svg>
                                </div>
                                <div className="galer_next" onClick={() => { changegalephoto(true); }}>
                                    <svg width="34" height="34" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow_galer inside">
                                        <path d="M45.25 21.3708C49.5833 23.8727 49.5833 30.1273 45.25 32.6292L10.75 52.5478C6.41666 55.0496 1 51.9223 1 46.9186L1 7.08141C1 2.07771 6.41666 -1.0496 10.75 1.45225L45.25 21.3708Z" fill="#FFFFFF" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='background_image_galarysec'></div>
            <div className='background_image_galarysec_bacdropFilter'></div>

        </div>

    )
};

export default Galery_sec;

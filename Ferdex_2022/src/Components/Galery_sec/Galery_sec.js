import React, {useState, useEffect, useRef} from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Galery_sec.css";
import renderPrevButtonlink from "../../images/left_arrow_galer.png";
import renderNextButtonlink from "../../images/right_arrow_galer.png";
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16} from "../../images/galery";

const Galery_sec = () => {
    const [isgaler, setisgaler] = useState(false);
    const [curentphoto, setcurentphoto] = useState(        {
        id: 1,
        url: "https://i.postimg.cc/Y0BfgFgw/0012.png"
    });
    const images = [
        {
            id: 0,
            url: img1
        },
        {
            id: 1,
            url: img2
        },
        {
            id: 2,
            url: img3
        },
        {
            id: 3,
            url: img4
        },
        {
            id: 4,
            url: img5
        },
        {
            id: 5,
            url: img6
        },
        {
            id: 6,
            url: img7
        },
        {
            id: 7,
            url: img8
        },
        {
            id: 8,
            url: img9
        },
        {
            id: 9,
            url: img10
        },
        {
            id: 10,
            url: img11
        },
        {
            id: 11,
            url: img12
        },        {
            id: 12,
            url: img13
        },
        {
            id: 13,
            url: img14
        },
        {
            id: 14,
            url: img15
        },
        {
            id: 15,
            url: img16
        }
    ];
    const items = [
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[2]);}}>
            <img src={images[2].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[7]);}}>
            <img src={images[7].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[8]);}}>
            <img src={images[8].url}  className="item"/>
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[9]);}}>
            <img src={images[9].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[4]);}}>
            <img src={images[4].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[11]);}}>
            <img src={images[11].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[14]);}}>
            <img src={images[14].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[13]);}}>
            <img src={images[13].url}  className="item"/>
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[15]);}} id="dnone">
            <img src={images[15].url}  className="item" />
        </div>,
    ];
    let NIGHTS = items.map((m, key) => m);
    const changegalephoto = (arg) =>{
        if (arg){
            if(curentphoto.id+1 !== images.length){
                setcurentphoto(images[curentphoto.id + 1]);
            }else{
                setcurentphoto(images[0]);
            }
        }else{
            if(curentphoto.id !== 0){
                setcurentphoto(images[curentphoto.id - 1]);
            }else{
                setcurentphoto(images[images.length -1]);
            }
        }
    }
    useEffect(() => {
        if (isgaler){
            document.body.style.overflowY = "hidden";
            document.body.style.overflowX = "scroll";
        }else{
            document.body.style.overflowY = "scroll";
        }
    }, [isgaler]);
    const divStyle = {
        background: `url("${curentphoto.url}") no-repeat center`,
        width: "700px",
        backgroundSize: "contain",
        alignItems: "center"
    }
    return (<div className="block galerbody_sec">
                <div className="galerbody_container">
                    {
                        NIGHTS
                    }
                </div>
                    {isgaler && <div className="Custgaler_sec">
                        <div className="cust_galer_container">
                            <div className="cust_galer_container_top" onClick={()=>{setisgaler(false);}}>
                                <svg className="cust_galer_container_top__close" height="20px" oonClick={()=>{setisgaler(false);}} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.14893 1.15381L7.47076 7.49997M13.7926 13.8461L7.47076 7.49997M7.47076 7.49997L13.7926 1.15381M7.47076 7.49997L1.14893 13.8461" stroke="white"/>
                                    <ellipse cx="1.14943" cy="1.15385" rx="1.14943" ry="1.15385" fill="white"/>
                                    <ellipse cx="1.14943" cy="13.8462" rx="1.14943" ry="1.15385" fill="white"/>
                                    <ellipse cx="13.8506" cy="1.15385" rx="1.14943" ry="1.15385" fill="white"/>
                                    <ellipse cx="13.8506" cy="13.8462" rx="1.14943" ry="1.15385" fill="white"/>
                                </svg>
                            </div>
                            <div className="cust_galer_container_main">
                                <div style={divStyle} className="cust_galer_container_main__photo">
                                </div>
                            </div>
                            <div className="cust_galer_container_bottom">
                                <div className="cust_galer_container_bottom_block">
                                    <a className="galer_prev" onClick={()=>{changegalephoto(false);}}>
                                        <img src={renderPrevButtonlink} alt="" className="arrow_galer"/>
                                    </a>
                                    <a className="galer_next" onClick={()=>{changegalephoto(true);}}>
                                        <img src={renderNextButtonlink} alt="" className="arrow_galer"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>}
                    <div>
                </div>
            </div>
    )
};

export default Galery_sec;

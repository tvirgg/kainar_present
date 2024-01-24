import React, {useState, useEffect, useRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import renderPrevButtonlink from "../../images/left_arrow_galer.png";
import renderNextButtonlink from "../../images/right_arrow_galer.png";
import "./Galery.css";
const responsive = {
    0: { items: 1 },
    480: { items: 1 },
    740: { items: 3 },
    1024: { items: 3 },
    1980: { items: 3 },
};

const Galery = () => {
    const [isgaler, setisgaler] = useState(false);
    const [curentphoto, setcurentphoto] = useState(        {
        id: 1,
        url: "https://i.postimg.cc/6QhRZMPR/1.png"
    });

    const images = [
        {
            id: 0,
            url: "https://i.postimg.cc/6QhRZMPR/1.png"
        },
        {
            id: 1,
            url: "https://i.postimg.cc/hjydyfct/207.png"
        },
        {
            id: 2,
            url: "https://i.postimg.cc/j21y5CFF/209.png"
        },
        {
            id: 3,
            url: "https://i.postimg.cc/jdWz1QW0/225.png"
        },
        {
            id: 4,
            url: "https://i.postimg.cc/hjPm19FY/300.png"
        },
        {
            id: 5,
            url: "https://i.postimg.cc/brZ2KpwH/370.png"
        },
        {
            id: 6,
            url: "https://i.postimg.cc/Jh8ZtfpM/404.png"
        },
        {
            id: 7,
            url: "https://i.postimg.cc/MHgjwNck/49.png"
        }
    ]
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
    const items = [
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[0]);}}>
            <img src={images[0].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[1]);}}>
            <img src={images[1].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[2]);}}>
            <img src={images[2].url}  className="item"/>
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[3]);}}>
            <img src={images[3].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[4]);}}>
            <img src={images[4].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[0]);}}>
            <img src={images[5].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[1]);}}>
            <img src={images[6].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[2]);}}>
            <img src={images[7].url}  className="item"/>
        </div>
    ];
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
    const renderPrevButton = () => {
        if (!isgaler){
        return <a className="renderPrevButton">
            <img src={renderPrevButtonlink} alt="" className="arrow_galer arrow_galer_fst"/>
        </a>;
        }
    };
    const renderNextButton = () => {
        if (!isgaler){
            return <a className="renderNextButton">
                <img src={renderNextButtonlink} alt="" className="arrow_galer arrow_galer_sc"/>
            </a>;
        }
    };

    return (<div className="galerbody">
                    <AliceCarousel
                        items={items}
                        responsive={responsive}
                        controlsStrategy="none"
                        autoPlay={true}
                        autoPlayInterval={5000}
                        animationDuration={500}
                        autoPlayStrategy="none"
                        infinite
                        disableDotsControls
                        renderPrevButton={renderPrevButton}
                        renderNextButton={renderNextButton}
                    />
            <div>
                {isgaler && <div className="Custgaler_sec">
                    <div className="cust_galer_container">
                        <div className="cust_galer_container_top">
                            <svg onClick={()=>{setisgaler(false);}} className="cust_galer_container_top__close" viewBox="0 0 100 100" height="20px">
                                <path
    d="M95.497 82.93l-32.7-32.7 32.7-32.701a8.992 8.992 0 0 0 0-12.745 8.992 8.992 0 0 0-12.744 0l-32.701 32.7-32.701-32.7a8.992 8.992 0 0 0-12.745 0 8.992 8.992 0 0 0 0 12.745l32.7 32.7-32.7 32.702a8.992 8.992 0 0 0 0 12.744 8.992 8.992 0 0 0 12.745 0l32.7-32.7 32.702 32.7a8.992 8.992 0 0 0 12.744 0c3.506-3.53 3.506-9.239 0-12.744z"/>
                            </svg>
                        </div>
                        <div className="cust_galer_container_main">
                            <div style={divStyle} className="cust_galer_container_main__photo">
                            </div>
                        </div>
                                                    <div className="cust_galer_container_bottom">
                            <div className="cust_galer_container_bottom_block">
                                <a className="galer_prev" onClick={()=>{changegalephoto(false);}}>
                                    <img src={renderPrevButtonlink} alt="" className="arrow_galer inside"/>
                                </a>
                                <a className="galer_next" onClick={()=>{changegalephoto(true);}}>
                                    <img src={renderNextButtonlink} alt="" className="arrow_galer inside"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
    </div>

    )
};

export default Galery;

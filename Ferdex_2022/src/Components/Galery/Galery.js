import React, {useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import renderPrevButtonlink from "../../images/left_arrow_galer.png";
import renderNextButtonlink from "../../images/right_arrow_galer.png";
import "./Galery.css";
import {img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16} from "../../images/galery";
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
        url: img1
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
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[5]);}}>
            <img src={images[5].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[6]);}}>
            <img src={images[6].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[7]);}}>
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
            <img src={renderPrevButtonlink} alt="" className="arrow_galer"/>
        </a>;
        }
    };
    const renderNextButton = () => {
        if (!isgaler){
            return <a className="renderNextButton">
                <img src={renderNextButtonlink} alt="" className="arrow_galer"/>
            </a>;
        }
    };

    return (<div className="galerbody block">
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
                            <svg className="cust_galer_container_top__close" height="20px" onClick={()=>{setisgaler(false);}}  viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
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
            </div>
    </div>

    )
};

export default Galery;

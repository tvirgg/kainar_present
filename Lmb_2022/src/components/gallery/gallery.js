import React, { useState, useEffect } from 'react';
import "./gallery.css";
import '../fonts/icekingdomfrozencyrillic_bold.ttf';
import "react-alice-carousel/lib/alice-carousel.css";
import transparentdorset from '../../images/transparentdorset.png'

// import wrapvideo from "../../images/loading.mp4";
import AliceCarousel from 'react-alice-carousel';
import prev_next from '../../images/prev_next.png'

const responsive = {
    0: { items: 1 },
    480: { items: 1 },
    740: { items: 3 },
    1024: { items: 3 },
    1980: { items: 3 },
};
const Gallery = () => {
    const [isgaler, setisgaler] = useState(false);
    const [curentphoto, setcurentphoto] = useState({
        id: 1,
        url: "https://lumbeers.com/images/render24.jpg"
    });
    let images = [
        {
            "id": 0,
            "url": "https://lumbeers.com/images/render24.jpg"
        },
        {
            "id": 1,
            "url": "https://lumbeers.com/images/render29.jpg"
        },
        {
            "id": 2,
            "url": 'https://lumbeers.com/images/render31.jpg'
        },
        {
            "id": 3,
            "url": 'https://lumbeers.com/images/render32.jpg'
        },
        {
            "id": 4,
            "url": 'https://lumbeers.com/images/render35.jpg'
        },
        {
            "id": 5,
            "url": 'https://lumbeers.com/images/render38.jpg'
        },
        {
            "id": 6,
            "url": 'https://lumbeers.com/images/render39.jpg'
        },
        {
            "id": 7,
            "url": 'https://lumbeers.com/images/render41.jpg'
        },
        {
            "id": 8,
            "url": 'https://lumbeers.com/images/render44.jpg'
        },
    ]
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
    const items = [
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[0]); }}>
            <img src={images[0].url} className="item" alt="" />
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[1]); }}>
            <img src={images[1].url} className="item" alt="" />
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[2]); }}>
            <img src={images[2].url} className="item" alt="" />
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[3]); }}>
            <img src={images[3].url} className="item" alt="" />
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[4]); }}>
            <img src={images[4].url} className="item" alt="" />
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[0]); }}>
            <img src={images[5].url} className="item" alt="" />
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[1]); }}>
            <img src={images[6].url} className="item" alt="" />
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[2]); }}>
            <img src={images[7].url} className="item" alt="" />
        </div>,
        <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[3]); }}>
            <img src={images[8].url} className="item" alt="" />
        </div>,
        // <div className="item_block" onClick={() => { setisgaler(true); setcurentphoto(images[4]); }}>
        //     <img src={images[9].url} className="item" alt="" />
        // </div>
    ];
    useEffect(() => {
        if (isgaler) {
            document.body.style.overflowY = "hidden";
            // document.body.style.overflowX = "scroll";
            // @ts-ignore
        } else {
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
        if (!isgaler) {
            return <div className="galer_prev">
                <svg width="34" height="34" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow_galer inside reverse">
                    <path d="M45.25 21.3708C49.5833 23.8727 49.5833 30.1273 45.25 32.6292L10.75 52.5478C6.41666 55.0496 1 51.9223 1 46.9186L1 7.08141C1 2.07771 6.41666 -1.0496 10.75 1.45225L45.25 21.3708Z" fill="#FFFFFF" />
                </svg>
            </div>;
        } else {
            return <div></div>
        }
    };
    const renderNextButton = () => {
        if (!isgaler) {
            return <div className="galer_next">
                <svg width="34" height="34" viewBox="0 0 49 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow_galer inside">
                    <path d="M45.25 21.3708C49.5833 23.8727 49.5833 30.1273 45.25 32.6292L10.75 52.5478C6.41666 55.0496 1 51.9223 1 46.9186L1 7.08141C1 2.07771 6.41666 -1.0496 10.75 1.45225L45.25 21.3708Z" fill="#FFFFFF" />
                </svg>
            </div>;
        }
        else {
            return <div></div>
        }
    };
    return (
        <div className="galerbody">
            <div className='galerbody_title'>
                <div style={{ zIndex: 5999 }}>Welcome to&nbsp;<span className='colorNameNft'>Lumbeers!</span></div>
            </div>
            {/* <div className='galleryForsetTransparent'>
                <img src={transparentdorset} alt="" className='galleryForsetTransparent_image' />
            </div> */}
            <div className='galerbody_text'>
                <span className='colorNameNft'>Lumbeers</span>&nbsp;are unlucky mf's, that's why they've created their Loot Boxes - to be profitable when someone else gets nothing. Some will say rigged, well... It's their loot boxes after all. 
                <br /><br />Loot boxes will welcome a lot of lumbeers and a lot of solana degens. Furthermore, Lumbeers will get 80% of the revenue made by Loot Boxes. From Loot Boxes you will be able to get $SOL, $LUM (our native token), Free Loot Boxes and different bluechip and hyped NFTs.
                <br /><br /><div style={{ color: '#FFFFFF93' }}>Find out more about the project and join us!</div>
           
            </div>
            <div className="galerbody_container_MAIN">
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
            </div>
            <div>
                {isgaler && <div className="Custgaler_sec">
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
                </div>}
            </div>

            <div className='background_image_galary'></div>
            <div className='background_image_galary_bacdropFilter'></div>
        </div>
    )
};

export default Gallery;

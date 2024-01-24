import React, { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    mainIdSelect,
    maincategorySelect,
    curentProfilepageSelect,
    curentpiecesSelect,
    curentnameSelect,
    curentdescriptionSelect,
    curentpriceSelect,
    curentphotourlSelect
} from "./GoodProfile-selector";
import { setProfilePageCreater, GetInBascketCreater, PullOutBascketCreater } from "../../redux/state/GoodsData_reducer.js";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import classes from './GoodProfile.module.css';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

export function GoBackButton() {
    let history = useHistory();
    return (
        <a onClick={() => history.goBack()} className={classes.goBackButton}>
            <svg className={classes.svg_back} xmlns="http://www.w3.org/2000/svg" width="65" viewBox="0 0 50 50" fill="none"
                 stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="19" y2="38"></line>
                <polyline points="12 25 19 18 26 25"></polyline>
            </svg>
        </a>
    );
}

const GoodProfile = ({ match }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const swiperRef = useRef(null);
    const mainId = useSelector(mainIdSelect);
    const maincategory = useSelector(maincategorySelect);
    const curentProfilepage = useSelector(curentProfilepageSelect);
    const pieces = useSelector(curentpiecesSelect);
    const name = useSelector(curentnameSelect);
    const description = useSelector(curentdescriptionSelect);
    const price = useSelector(curentpriceSelect);
    const photourl = useSelector(curentphotourlSelect);

    useEffect(() => {
        let profId = match.params.profId || mainId;
        let profcategory = match.params.profcategory || maincategory;

        if (!profId || !profcategory) {
            history.push("/shop");
            return;
        }

        dispatch(setProfilePageCreater(profId, profcategory));
    }, [mainId, maincategory, match.params.profId, match.params.profcategory, history, dispatch]);

    const handleBasket = useCallback((goodobj, isAdding) => {
        dispatch(isAdding ? GetInBascketCreater(goodobj) : PullOutBascketCreater(goodobj));
    }, [dispatch]);

    return (
        <div className={classes.prof_c}>
            <div className={classes.row}>
                <GoBackButton />
                <h1 className={classes.main_lable}>{name}</h1>
            </div>
            <div className={classes.row}>
                <div className={`${classes.col} ${classes.galer_block}`}>
                    <div className={classes.galery}>
                        <Swiper
                            onSwiper={(swiper) => swiperRef.current = swiper}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            className={classes.some_swiper_class}
                        >
                            {photourl.map(m => (
                                <SwiperSlide key={m}>
                                    <div className={classes.slideContainer}>
                                        <img src={m} alt="Slider Image" className={classes.slideImage} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                            <div className={`${classes.btn_block} swiper-button-next`} ></div>
                            <div className={`${classes.btn_block} swiper-button-prev`}></div>
                        </div>
                    <div className={classes.row_main}>
                        <h3 className={classes.in_bask}>IN BASKET NOW:</h3>
                        <h3 className={classes.info_block_spec}>{pieces}</h3>
                    </div>

                    <div className={classes.btn_block}>
                        <button className={classes.btn_light} onClick={() => handleBasket(curentProfilepage, false)}>-</button>
                        <button className={classes.btn_dark} onClick={() => handleBasket(curentProfilepage, true)}>+</button>
                    </div>
                </div>
                <div className={`${classes.col} ${classes.info_block}`}>
                    <div className={classes.info_block__price}>
                        <h2 className={classes.info_block_spec}>Price: {price} $</h2>
                    </div>
                    <h5>Worldwide delivery - 20 $</h5>
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default GoodProfile;

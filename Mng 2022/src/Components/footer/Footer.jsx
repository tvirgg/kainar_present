import React, {useEffect, useRef, useState} from "react";
import classes from "./footer.module.css";
import logo from "../../img/logo_footer.svg"
import translate from "../i18n/translate";
import classNames from "classnames";
import Cards from "../globalmenu/Cards/card.jsx";
import useWindowSize from "../Instruments/useWindowSize";
import {useLocation} from "react-router-dom";
export default function Footer(props) {
    const location = useLocation();
    const [lenselect, setlenselect] = useState(false);
    var languageClass = classNames({
        [classes.change_len_block__menu_def]: true,
        [classes.change_len_block__menu]: lenselect
    });
    const size = useWindowSize();
    let ref = useRef(null);
    let footer_col_third= useRef(null);
    let footer_col_four = useRef(null);
    useEffect(() => {
        if(!props.registermenu){
            ref.current.style= "margin-left: 0px !important";
        }},[props.registermenu]);
    useEffect(() => {
        if (size.width > 1024 && props.registermenu === true){
        if(props.globalmenumode === false){
            ref.current.style= "margin-left: 217px !important";
        }
        else{
            ref.current.style= "margin-left: 64px !important";
        }}
        else if(location.pathname.split('/')[1] === 'broadcasting'){
            if (size.width > 980){
                if(props.chatmode){
                    ref.current.style= "margin-right: 448px !important;";
                }
                else{
                    ref.current.style= "margin-left: 0 !important; margin-right: 0 !important;";
                }
            }
            else{
                ref.current.style= "margin-left: 0 !important; margin-right: 0 !important;";
            }}
        else{
            ref.current.style= "margin-left: 0px";
        }
    },[props.globalmenumode, size, props.registermenu, props.chatmode, location.pathname]);
    useEffect(() => {
        if (props.chatmode){
            // if (size.width <= 1400 && size.width > 980){
            //     footer_col_third.current.style="width: 40%;";
            //     footer_col_four.current.style="width: 40%;";
            // }else{
            //     footer_col_third.current.style="";
            //     footer_col_four.current.style="";
            // }
        }
    },[size, props.chatmode]);
    let Cards_item =()=>{
        if(props.languagessint){return Object.keys(props.languagessint).map( m => <Cards key={`${m}+kenfooter`} value={m}/> );}
    }
    const refmenu = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (refmenu.current && !refmenu.current.contains(event.target)) {
                setlenselect(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refmenu]);
    return(
        <div className={classes.footer_container} ref={ref}>
            <div className={classes.footer}>
                <div className={classes.footer_block}>
                    <div className={classes.footer_left}>
                        <div className={classes.footer_left__logoblock}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={classes.footer_left__logoblock__logo}>
                                <img src={logo} alt="logo" className={classes.footer_logoicon}/>
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}

                        </div>
                        <div className={classes.footer_left__info}>
                            <p>
                                В эру информационных технологий люди проводят все больше времени в интернете отдаляясь от природы. Общее развитие человека -неотъемлемая составляющая жизни и роста личности. Просмотр фильмов и видео в настоящее время это основной источник информации для масс. Существует множество различных решений и площадок для такого вида деятельности, одно из которых – модель сайта в виде видеохостинга.
                                <br/><br/>
                                Видеохостинг позволяет загружать и просматривать видео о жизни животных в браузере. Очень легко можно смотреть различные фильмы, оставлять комментарии, узнавать о животных, рассматривать их и читать о них. Так же имеется бесплатная энциклопедия, классифицированная по видам. Во вторую очередь это - социальная сеть. Данное Web-приложение позволяет организовать общество на более серьезный лад суждения о проблемах современных: экологии, зоологии, природы и в своей основе будет нести информационный мотив. В приложении есть возможность зарегистрироваться, авторизоваться вносить личные данные пользователя и редактировать их.
                            </p>
                        </div>
                    </div>
                    {/*<div className={classes.footer_right}>*/}
                    {/*    <div className={classNames(classes.footer_right__elem, classes.footer_right__elem__third)} ref={footer_col_third}>*/}
                    {/*        <h4 className={classes.footer_right__elem_h1}>*/}
                    {/*            РАБОТАЙТЕ С НАМИ*/}
                    {/*        </h4>*/}
                    {/*        <div className={classes.border_line}/>*/}
                    {/*        <p>*/}
                    {/*            Стать частью нас*/}
                    {/*        </p>*/}
                    {/*        <div className={classes.border_line}/>*/}
                    {/*        <p>*/}
                    {/*            Получить партнерскую ссылку*/}
                    {/*        </p>*/}
                    {/*        <div className={classes.border_line}/>*/}
                    {/*    </div>*/}
                    {/*    <div className={classNames(classes.footer_right__elem, classes.footer_right__elem__ford)} ref={footer_col_four}>*/}
                    {/*        <h4 className={classes.footer_right__elem_h1}>*/}
                    {/*            ПОМОЩЬ & ПОДДЕРЖКА*/}
                    {/*        </h4>*/}
                    {/*        <div className={classes.border_line}/>*/}
                    {/*        <p>*/}
                    {/*            Контакты и поддержка*/}
                    {/*        </p>*/}
                    {/*        <div className={classes.border_line}/>*/}
                    {/*        <p>*/}
                    {/*            Написать нам письмо*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={classes.footer_additing}>
                        <div className={classes.footer_additing_info}>
                            <p>
                                В эру информационных технологий люди проводят все больше времени в интернете отдаляясь от природы. Общее развитие человека -неотъемлемая составляющая жизни и роста личности. Просмотр фильмов и видео в настоящее время это основной источник информации для масс. Существует множество различных решений и площадок для такого вида деятельности, одно из которых – модель сайта в виде видеохостинга.
                                <br/><br/>
                                Видеохостинг позволяет загружать и просматривать видео о жизни животных в браузере. Очень легко можно смотреть различные фильмы, оставлять комментарии, узнавать о животных, рассматривать их и читать о них. Так же имеется бесплатная энциклопедия, классифицированная по видам. Во вторую очередь это - социальная сеть. Данное Web-приложение позволяет организовать общество на более серьезный лад суждения о проблемах современных: экологии, зоологии, природы и в своей основе будет нести информационный мотив. В приложении есть возможность зарегистрироваться, авторизоваться вносить личные данные пользователя и редактировать их.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.footer_additing_block}>
                    <div className={classes.border_line}/>
                    <div className={classes.footer_additing_block_item}>
                        <p>
                            © 2021 FERDEX
                        </p>
                        <p>
                            SPB, Russia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

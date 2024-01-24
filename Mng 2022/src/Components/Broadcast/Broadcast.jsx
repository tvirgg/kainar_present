import React, {useEffect, useState} from "react";
import classes from "./broadcast.module.css";
import classNames from "classnames";
import useWindowSize from "../Instruments/useWindowSize";
import profile_photo from "../../img/prof_logo.jpg";
import like from "../../img/like.svg";
import Public from "./Pablic/Public";
import Privat from "./Privat/Privat";
import Profile from "./Profile/Profile";
import Chat_list from "./Chat_list/Chat_list";
export default function Broadcast(props) {
    let [localstoragevideo, setlocalstoragevideo] = useState(localStorage.getItem('current_video'));

    useEffect(() => {
        if (localstoragevideo){
            setlocalstoragevideo(localStorage.getItem('current_video'));
    }},[localStorage]);
    var broadcast__chat = classNames({
        [classes.broadcast__chat]: true,
        [classes.broadcast__chat_disable]: !props.chatmode
    });
    var forign__chat = classNames({
        [classes.forign__chat]: true,
        [classes.forign_disable]: !props.chatmode
    });
    const [chatmod, setChatmod] = useState(1);
    var menu_first = classNames({
        [classes.chat_lables_row__item]: true,
        [classes.chat_lables_row__item__active]: (chatmod===1)
    });
    var menu_third = classNames({
        [classes.chat_lables_row__item]: true,
        [classes.chat_lables_row__item__active]: (chatmod===3)
    });
    const size = useWindowSize();
    useEffect(() => {
        var forign__chatid = document.getElementById('forign__chat');
        var broadcast__chatid = document.getElementById('broadcast__chat');
        if (size.width >980){
            if (props.chatmode) {
                if (matchMedia('(pointer:coarse)').matches){
                    broadcast__chatid.style = "position: fixed; top: 54px; left: calc(100vw - 450px); z-index: 200;";
                    forign__chatid.style = "display: block;";
                }if(props.registermenu){
                    forign__chatid.style = "min-width: 465px !important;";
                }else{
                broadcast__chatid.style = "position: fixed; top: 54px; left: calc(100vw - 465px); z-index: 200;";
                forign__chatid.style = "display: block;";
            }
            }else{
                broadcast__chatid.style = "position: fixed; top: 54px; left: 200vw;";
                forign__chatid.style = "display: none !important;";
            }
        }else{
            props.SetCurrentchatmode(true);
            broadcast__chatid.style = "position: static;";
            forign__chatid.style = "display: none;";
        }
    },[size.width, props.globalmenu, broadcast__chat, forign__chat, matchMedia('(pointer:coarse)').matches], props.registermenu);

    return (
        <div className={classes.broadcast_container}>
            <div className={classes.broadcast_block}>
                <div className={classes.broadcast__video}>
                    <div className={classes.broadcast_block_top__mobile}>
                        <div className={classes.prf_sqr}>
                            <div className={classNames(classes.profile_block__photo, classes.profile_block__photo_mob)}>
                                <img className={classes.profile_block__photo_img} src={profile_photo} alt="profile-logo"/>
                                <svg className={classes.profile_block__photo__svg} viewBox="0 0 100 100" height="5px" fill="#9ee10c">
                                    <path d="M.2 49.95C.2 22.617 22.467.5 49.984.5c27.505 0 49.784 22.117 49.784 49.45S77.489 99.4 49.984 99.4C22.467 99.4.2 77.283.2 49.95z"/>
                                </svg>
                            </div>
                            <div className={classNames(classes.profile_block__bsinfo, classes.profile_block__bsinfo_mobile)}>
                                <h2 className={classes.profile_block__name}>
                                    {props.current_data.username}
                                </h2>
                            </div>
                        </div>
                            <a className={classes.like_block_mobile}>
                                <svg fill="#909090" height="20px" viewBox="0 0 100 100"
                                     className="globalmenu_menu_block__item_svg__2SgWw">
                                    <path
                                    d="M69.02 9.97c-7.42 0-14.14 3-19.04 7.84C45.08 13 38.34 10 30.9 10c-14.97.04-27.1 12.2-27.1 27.2.03 34.46 46.27 52.83 46.27 52.83s46.2-18.48 46.14-52.95c0-15-12.16-27.13-27.16-27.1z"/>
                                </svg>
                            </a>
                    </div>
                    <div className={classes.broadcast_video}>
                        <video width="70%" preload="auto" controls autoplay>
                            <source src={`https://video.knightdomservers.com/video/${props.current_video_id? props.current_video_id : localstoragevideo.current_video_id}`} type="video/mp4" />
                        </video>
                    </div>
                    <a className={classes.broadcast__video__openchat} onClick={() => {
                        props.SetCurrentchatmode(!props.chatmode)
                    }}>{!props.chatmode?(
                        <svg width="20px" fill="#ffffff" version="1.1" viewBox="0 0 20 20" className={classes.video_chatbtn}>
                            <g>
                                <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"/>
                            </g>
                        </svg>
                    ):(``)}
                    </a>
                    <div className={classes.under_broadcast}>
                        <div className={classes.profile_block}>
                            <div className={classes.profile_block__photo}>
                                <img className={classes.profile_block__photo_img} src={profile_photo} alt="profile-logo"/>
                                <svg className={classes.profile_block__photo__svg} viewBox="0 0 100 100" height="13px" fill="#9ee10c">
                                    <path d="M.2 49.95C.2 22.617 22.467.5 49.984.5c27.505 0 49.784 22.117 49.784 49.45S77.489 99.4 49.984 99.4C22.467 99.4.2 77.283.2 49.95z"/>
                                </svg>
                            </div>
                            <div className={classes.profile_block__bsinfo}>
                                <h2 className={classes.profile_block__name}>
                                    Sakura
                                </h2>
                            </div>
                        </div>
                            <a className={classes.like_block}>
                                <img className={classes.like_img} src={like}  alt="like"/>
                            </a>
                        <h1 className={classes.under_broadcast_h1}>{
                            props.current_video.video_name? props.current_video.video_name : localstoragevideo.video_name
                        }</h1>
                    </div>
                </div>
                <div className={forign__chat} id="forign__chat">
                </div>
                <div className={broadcast__chat} id="broadcast__chat">
                    <div className={classes.broadcast__chat_block}>
                        <div className={classes.broadcast__chat_block_internal}>
                            <div className={classes.chat}>
                                <div className={classes.chat_lables_row}>
                                    <a className={classNames(classes.chat_lables_row__item, classes.broadcast__chat_block_internal_btn_back)} onClick={()=>{setChatmod(1)}}>
                                        <a onClick={() => {
                                            props.SetCurrentchatmode(!props.chatmode)
                                        }} className={classes.broadcast__chat_block_internal_btn_back}>
                                            <svg width="20px" version="1.1" viewBox="0 0 20 20" className={classes.back_svg} fill="#909090">
                                                <g>
                                                    <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"/>
                                                </g>
                                            </svg>
                                        </a>
                                    </a>
                                    <a className={menu_first} onClick={()=>{setChatmod(1)}}>
                                        Комментарии
                                    </a>
                                    <a className={menu_third}  onClick={()=>{setChatmod(3)}}>
                                        Профиль
                                    </a>
                                </div>
                                <div className={classes.chat_container}>
                                    {(chatmod === 1) && <Public/>}
                                    {(chatmod === 3) && <Profile  current_data={props.current_data} SetCurrentphoto={props.SetCurrentphoto} current_photo={props.current_photo}/>}
                                    {(chatmod === 2) && <Privat/>}{
                                    (chatmod === 4) && <Chat_list/>}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

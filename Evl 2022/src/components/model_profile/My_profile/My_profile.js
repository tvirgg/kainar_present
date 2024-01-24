import React, {useRef, useState} from 'react';
import classes from "./My_profile.module.css";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    isAUTHAC,
    Setglobalmenu
} from "../../../redux/state/App_reducer";
import axios from "axios";

const My_profile = (props) => {
    let [edit, isedit] = useState(false);
    let [rand, setRand] = useState(1)

    const inputFile = useRef(null)
    const inputBg = useRef(null)


    const backgroundUpload = async (e) => {
        const file = e.target.files[0];
        if(!file)
            return;

        file.isUploading = true;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("videoFile", "user");

        const token = JSON.parse(localStorage.getItem("token"));

        await axios.post('https://video.knightdomservers.com/api/user/setBackground',
            formData,
            {
                headers: {
                    'Authorization': `BEARER ${token}`
                }
            })

        await props.isAUTHAC();
        setRand(r => r + 1)
    }

    const avatarUpload = async (e) => {
        const file = e.target.files[0];
        if(!file)
            return;

        file.isUploading = true;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("videoFile", "user");

        const token = JSON.parse(localStorage.getItem("token"));

        await axios.post('https://video.knightdomservers.com/api/user/setAvatar',
            formData,
            {
                headers: {
                    'Authorization': `BEARER ${token}`
                }
        })

        await props.isAUTHAC();
        setRand(r => r + 1)
    }

    return(
        <div className={classes.profile_block}>
            <div className={classes.profile_block_container}>
                <div className={classes.profile_block_top} style={{
                    backgroundImage: `url("https://video.knightdomservers.com/thumbnail/${props.backghoundimage}?v=${rand}")`
                }}>
                    <div className={classes.profile_block_top_edit_block}>
                        <a className={classes.profile_block_top_edit} onClick={()=>{isedit(!edit)}}>
                            <svg height="14px" fill="#F8F8F899" viewBox="0 0 100 100"><path d="M15.1 64.1L37.2 85.4 79.9 41.8 57.8 20.5z"/><path d="M31.5 91.3L9.4 69.9 0 100z"/><path d="M77.8 0L63.5 14.6 85.7 36 100 21.3z"/></svg>
                            <p className={classes.profile_block_top_span}>
                                Изменить фон
                            </p>
                        </a>
                        {
                            edit && <div className={classes.isedit_block}>
                                <a className={classes.isedit_block_item} onClick={() => inputBg.current.click()} >
                                    <svg className={classes.isedit_block_item_svg} height="14px" viewBox="0 0 100 100"><path d="M85.8 2H14.2C8.6 2 4 6 4 11v63.7c0 5 4.6 9 10.2 9h71.6c5.6 0 10.2-4 10.2-9V11c0-5-4.6-9-10.2-9zm0 71.6H14.2V12.2h71.6v61.4zm0 17.2a8 8 0 0 1-8 8H22.2a8 8 0 0 1-8-8h71.6zM50 44.2a11.5 11.5 0 1 1 0-23 11.5 11.5 0 0 1 0 23zm23 15.3v3.8H27v-3.8C27 51.8 42.3 48 50 48c7.7 0 23 3.8 23 11.5z"/></svg>
                                    <p className={classes.isedit_block_item_p}>
                                        Загрузить <br/>изображение
                                    </p>
                                    <input type="file" ref={inputBg} onChange={backgroundUpload}/>
                                </a>
                            </div>
                        }
                    </div>
                </div>
                <div className={classes.profile_block_container_addit}>
                    <div className={classes.profile_block_name}>
                        <div className={classes.profile_block_photo}>
                            <div className={classes.profile_block__photo_img} style={{
                                backgroundImage: `url("https://video.knightdomservers.com/thumbnail/${props.profilePhoto}?v=${rand}")`
                            }}/>
                            <div onClick={() => inputFile.current.click()} className={classes.change_photo_block}>
                                <svg fill="#FFFFFFFF" height="40px" viewBox="0 0 40 40"><path fillRule="evenodd" clipRule="evenodd" d="M15 3.333l-3.05 3.334H6.668A3.343 3.343 0 003.334 10v20c0 1.834 1.5 3.334 3.333 3.334h26.667c1.833 0 3.333-1.5 3.333-3.334V10c0-1.833-1.5-3.333-3.333-3.333h-5.283L25 3.334H15zm5 25A8.336 8.336 0 0111.668 20c0-4.6 3.734-8.333 8.334-8.333S28.334 15.4 28.334 20s-3.733 8.334-8.333 8.334zM25.335 20a5.333 5.333 0 11-10.667 0 5.333 5.333 0 0110.667 0z"/>
                                </svg>
                                <input type='file' ref={inputFile} style={{display: 'none'}} onChange={avatarUpload}/>
                            </div>
                        </div>
                        <a className={classes.profile_block_name_container}>
                                    <span className={classes.profile_block_name_container_block}>
                                        {props.username}
                                    </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const DispatchToProps = (dispatch) => {
    return {
        Hidemenu: (mode) =>{
            dispatch(Setglobalmenu(mode));
        },
        isAUTHAC: () =>{
            dispatch(isAUTHAC());
        }
    };
};
const mapStateToProps = state => {
    return {
        profilePhoto: state.ProfileData.current_data.avatar,
        username: state.ProfileData.current_data.username,
        backghoundimage: state.ProfileData.current_data.backghoundimage,

    }
};
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(My_profile);

import React, {forwardRef, useEffect, useRef, useState} from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'
import classes from "./Upload_videofile.module.css";
import "./Datepicker.css";
import {connect} from "react-redux";
import {ISEDDITINFORMATIONAC, PostUserData, SetCurrentDATA} from "../../redux/state/Profile_reducer";
import CustomSelect from "../utils/CustomSelect";
import axios from "axios";
import {GetCategories} from "../../redux/state/App_reducer";
import {Navigate, useHistory} from "react-router-dom";

function Upload_videofile(props) {

    const history = useHistory();

    const [video, setVideo] = useState('');
    const [cover, setCover] = useState('');

    const videoRef = useRef(null);
    const coverRef = useRef(null);

    const handleVideo = (e) => {
        const file = e.target.files[0];
        if(!file)
            return;

        setVideo(_ => file)
    }

    const handleCover = (e) => {
        const file = e.target.files[0];
        if(!file)
            return;

        setCover(_ => file)
    }

    const handleUpload = async (upload) => {

        const token = JSON.parse(localStorage.getItem("token"));

        const response = await axios.post(`https://video.knightdomservers.com/video/upload`, upload, {
            headers: {
                'Authorization': `BEARER ${token}`
            }
        })

        const newVideo = response.data;

        const videoName = newVideo.video_id;
        const coverName = newVideo.cover_img;

        const uploadVideo = new FormData();
        uploadVideo.append("file", video);
        uploadVideo.append("videoFile", videoName);

        await axios.post(`https://video.knightdomservers.com/video/setVideo`, uploadVideo, {
            headers: {
                'Authorization': `BEARER ${token}`
            },
            onUploadProgress: (progress) => {
                const totalLength = progress.lengthComputable ? progress.total : progress.target.getResponseHeader('content-length') || progress.target.getResponseHeader('x-decompressed-content-length');
                console.log("onUploadProgress", totalLength);
                if (totalLength !== null) {
                    console.log("upload", Math.round( (progress.loaded * 100) / totalLength ));
                }
            }
        })

        const uploadCover = new FormData();
        uploadCover.append("file", cover);
        uploadCover.append("videoFile", coverName);

        await axios.post(`https://video.knightdomservers.com/video/setCover`, uploadCover, {
            headers: {
                'Authorization': `BEARER ${token}`
            }
        })

        await axios.post(`https://video.knightdomservers.com/video/reveal/${videoName}`, undefined, {
            headers: {
                'Authorization': `BEARER ${token}`
            }
        })

        await props.GetCategories();
        history.push("/");
    }

    return (
        <div>
            <Formik
                initialValues={{
                    video_name: "Новое видео",
                    category: "mammals",
                }}
                onSubmit={(values) => {
                    const upload = {
                        video_name: values.name,
                        category: values.category
                    }

                    handleUpload(upload)
                }}
                validationSchema={null}
            >
                {({ values, errors, touched, setFieldValue, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className={classes.form} >
                        <div className={classes.container_top}>
                        </div>
                        <div className={classes.form_block}>
                            <div className={classes.form_block_item}>
                                    <span className={classes.form_block_item_span}>
Имя Видео:
                                    </span>
                                <div className={classes.form_block_item_sec_block}>
                                <input
                                    className={classes.form_item}
                                    name={`name`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                    {touched.name && errors.name && <p className={classes.eror}>{errors.name}</p>}
                                </div>
                            </div>
                            <div className={classes.form_block_item}>
                                    <span className={classes.form_block_item_span}>
Категория:
                                    </span>
                                <CustomSelect
                                    onChange={value=>setFieldValue('category',value.value)}
                                    value={values.gender}
                                    type={`text`}
                                    options={[{value: 'mammals', label: 'Млекопитающие'},
                                            {value: 'birds', label: 'Птицы'},
                                        {value: 'fishes', label: 'Рыбы'},
                                        {value: 'amphibians', label: 'Земноводные'}]}
                                />
                            </div>
                            <div className={classes.form_block_item}>
                                    <span className={classes.form_block_item_span}>
Видео:
                                    </span>
                                <div className={classes.form_block_item_sec_block}>
                                    <input
                                        type='file'
                                        ref={videoRef}
                                        name={`file`}
                                        onChange={handleVideo}
                                        onBlur={handleBlur}
                                    />

                                    <button onClick={() => videoRef.current.click()}>Выбрать файл</button>
                                </div>
                            </div>
                            <div className={classes.form_block_item}>
                                    <span className={classes.form_block_item_span}>
Обложка:
                                    </span>
                                <div className={classes.form_block_item_sec_block}>
                                    <input
                                        type='file'
                                        ref={coverRef}
                                        name={`file`}
                                        onChange={handleCover}
                                        onBlur={handleBlur}
                                    />

                                    <button onClick={() => coverRef.current.click()}>Выбрать файл</button>
                                </div>
                            </div>
                            <button className={classes.save} disabled={!isValid} type={`submit`}
                                    onClick={handleSubmit}>
                                Сохранить
                            </button>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
}

const DispatchToProps = (dispatch) => {
    return {
        SetCurrentDATA: (mode) =>{
            dispatch(SetCurrentDATA(mode));
        },
        PostUserData: (mode) =>{
            dispatch(PostUserData(mode));
        },
        ISEDDITINFORMATIONAC: (mode) =>{
            dispatch(ISEDDITINFORMATIONAC(mode));
        },
        GetCategories: ()=>{
            dispatch(GetCategories());
        }
    };
};

export default connect(null, DispatchToProps)(Upload_videofile);

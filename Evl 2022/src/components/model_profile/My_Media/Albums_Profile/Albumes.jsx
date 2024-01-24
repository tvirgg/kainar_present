import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classes from "./albumes.module.css";
import Cards from "./Photos_categories/Photos_categories.jsx";
import Photos_element from "./Photos_elements/Photo_elements.jsx";
import {useLocation} from "react-router-dom";
import Litlemenu_element from "./Little_menu/Litle_elements.jsx";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    CLEAR_SELECTEDALBUMESAC,
    CLEAR_SELECTEDIMAGESAC,
    DELETEALBUMESAC,
    DELETEIMAGESAC, DELITEFROMALBUMESDELECTAC, DELITEFROMIMAGESDELECTAC,
    isAddnewAlmub, isEDITALBUM,
    SET_ISSELECTEDALBUMESAC,
    SET_ISSELECTEDIMAGESAC,
    SET_SELECTEDALBUMESAC,
    SET_selectedimagearray,
    SetCurrentAlbum,
    SetCurrentContain,
    SetmyCurrentphoto
} from "../../../../redux/state/Profile_reducer";
import classNames from "classnames";
const mapStateToProps = state => {
    return {
        MyAlbumes: state.ProfileData.MyAlbumes,
        current_photo: state.ProfileData.current_photo,
        current_album: state.ProfileData.current_album,
        current_album_contain: state.ProfileData.current_album_contain,
        isalbumselecting: state.ProfileData.isalbumselecting,
        albumsidselect: state.ProfileData.albumsidselect,
        isimageselecting: state.ProfileData.isimageselecting,
        edit_album: state.ProfileData.edit_album
    }
};
const DispatchToProps = (dispatch) => {
    return {
        SetmyCurrentphoto: (mode) =>{
            dispatch(SetmyCurrentphoto(mode));
        },
        SetCurrentAlbum: (mode) =>{
            dispatch(SetCurrentAlbum(mode));
        },
        SetCurrentContain: () =>{
            dispatch(SetCurrentContain());
        },
        isAddnewAlmub: (mode) =>{
            dispatch(isAddnewAlmub(mode));
        },
        SET_ISSELECTEDALBUMESAC: (mode) =>{
            dispatch(SET_ISSELECTEDALBUMESAC(mode));
        },
        SET_SELECTEDALBUMESAC: (mode) =>{
            dispatch(SET_SELECTEDALBUMESAC(mode));
        },
        DELETEALBUMESAC: (mode) =>{
            dispatch(DELETEALBUMESAC(mode));
        },
        CLEAR_SELECTEDALBUMESAC: (mode) =>{
            dispatch(CLEAR_SELECTEDALBUMESAC(mode));
        },
        SET_selectedimagearray: (mode) =>{
            dispatch(SET_selectedimagearray(mode));
        },
        CLEAR_SELECTEDIMAGESAC: () =>{
            dispatch(CLEAR_SELECTEDIMAGESAC());
        },
        DELETEIMAGESAC: (mode) =>{
            dispatch(DELETEIMAGESAC(mode));
        },
        SET_ISSELECTEDIMAGESAC: (mode) =>{
            dispatch(SET_ISSELECTEDIMAGESAC(mode));
        },
        isEDITALBUM: (mode) =>{
            dispatch(isEDITALBUM(mode));
        },
        DELITEFROMALBUMESDELECTAC: (mode) =>{
            dispatch(DELITEFROMALBUMESDELECTAC(mode));
        },
        DELITEFROMIMAGESDELECTAC: (mode) =>{
            dispatch(DELITEFROMIMAGESDELECTAC(mode));
        },

    }}
function Albumes_profile(props) {
    const [isopen, setisopen] = useState(true);
    const galer_photo = useRef(null);
    const [isgaler, setIsgaler] = useState(false);
    const [sended, setsended] = useState(false);
    const location = useLocation();

    function Setphoto_coleg(current_photo, a){
        let newibj={
            id: current_photo.id + a,
            url:  props.current_album_contain.photos[current_photo.id + a].url,
        }
        props.SetmyCurrentphoto(newibj);
    }
    function onckickdelete (){
        if (isopen){
            props.DELETEALBUMESAC();
            props.SET_ISSELECTEDALBUMESAC(false);
        }else{
            props.DELETEIMAGESAC();
            props.SET_ISSELECTEDIMAGESAC(false);
        }
        setsended(!sended);
    }
    let Welcomphoto = (e) =>{
        if(e.target.files.length){
            console.log(e.target.files);
        }
    }
    function Setphoto(side){
        if (side) {
            if (props.current_photo.id+2 <= props.current_album_contain.photos.length){
                Setphoto_coleg( props.current_photo, 1);
            }else{
                Setphoto_coleg(props.current_photo, (-props.current_album_contain.photos.length+1));
            }
        }else{
            if (props.current_photo.id > 0){
                Setphoto_coleg(props.current_photo,-1);
            }else{
                Setphoto_coleg(props.current_photo, props.current_album_contain.photos.length-1);
            }
        }
    }

    useLayoutEffect(() => {
        if (isgaler){
            console.log(props.current_photo.url);
                galer_photo.current.style = `background-image: url(http://167.71.38.182/images${props.current_photo.url}) !important`;
        }
    },[isgaler, props.current_photo]);
    useEffect(() => {
        if(isgaler){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflowY = 'scroll';
            document.body.style.overflowX = 'hidden';
        }
    },[isgaler, location.pathname]);
    const [MyAlbumes, setMyAlbumes] = useState(props.MyAlbumes);
    useEffect(() => {
        setMyAlbumes(props.MyAlbumes);
    },[props]);
    let Cards_item = MyAlbumes.map( m => <Cards key={`${m.name}_Cards_item`} isEDITALBUM={props.isEDITALBUM} DELITEFROMALBUMESDELECTAC={props.DELITEFROMALBUMESDELECTAC} photoscount={m.photoscount} videocount={m.videocount} CLEAR_SELECTEDALBUMESAC={props.CLEAR_SELECTEDALBUMESAC} SET_ISSELECTEDALBUMESA={props.SET_ISSELECTEDALBUMESAC} sended={sended} setsended={setsended} SET_SELECTEDALBUMESAC={props.SET_SELECTEDALBUMESAC} current_album={props.current_album.id} isalbumselecting={props.isalbumselecting} SetCurrentContain={props.SetCurrentContain} name={m.name} id={m.id} photos ={m.photos} setisopen={setisopen} isopen={isopen} SetCurrentAlbum={props.SetCurrentAlbum}/> );
    let Photos_elements = props.current_album_contain.photos.map( m => <Photos_element key={`${m.name}Photos_elements_${m.id}`} m={m} state={props} DELITEFROMIMAGESDELECTAC={props.DELITEFROMIMAGESDELECTAC} SET_selectedimagearray={props.SET_selectedimagearray} sended={sended} setsended={setsended} id={m.id} SetCurrentphoto={props.SetmyCurrentphoto} isimageselecting={props.isimageselecting} photos={m.url}  isgaler={isgaler} setIsgaler={setIsgaler} isalbumselecting={props.isalbumselecting}/> );
    let Little_menu =  props.current_album_contain.photos.map( m => <Litlemenu_element SetCurrentphoto={props.SetmyCurrentphoto} photo={m} id={m.id} key={`${m.id}Little_menu_${m.id}`} isgaler={isgaler} setIsgaler={setIsgaler} curent_photo={props.current_photo}/> );
    return (
        <div className={classes.albumes}>
            <div className={classes.albumes_top}>
                <h2 className={classes.albumes_lable}>
                    <a onClick={()=>{setisopen(true); props.SET_ISSELECTEDALBUMESAC(false); props.CLEAR_SELECTEDIMAGESAC(); props.SET_ISSELECTEDIMAGESAC(false);}}>
                        Альбомы
                    </a>
                    {
                        !isopen && <div className={classes.albumes_photo_category__lable}>
                            <svg fill="#FFFFFFFF" height="15px" viewBox="0 0 100 100"><path d="m28.66 8.85 8.78-7.32 40.54 48.67-40.92 48.24-8.72-7.4 34.7-40.9"/></svg>
                            <a>
                                {props.current_album.name}
                            </a>
                        </div>
                    }
                </h2>
                {
                    !props.isalbumselecting && !props.isimageselecting && <a className={classes.edit_block} onClick={isopen? ()=>{props.SET_ISSELECTEDALBUMESAC(true); props.SET_ISSELECTEDIMAGESAC(false)}:()=>{props.SET_ISSELECTEDALBUMESAC(false); props.SET_ISSELECTEDIMAGESAC(true);}}>
                            <svg height="14px" className={classes.edit_block_svg} viewBox="0 0 100 100"><path d="M15.1 64.1L37.2 85.4 79.9 41.8 57.8 20.5z"/><path d="M31.5 91.3L9.4 69.9 0 100z"/><path d="M77.8 0L63.5 14.6 85.7 36 100 21.3z"/></svg>

                    </a>
                }
                {
                    (props.isalbumselecting || props.isimageselecting) && <div className={classes.edit_block_editing}>
                        <a  className={classNames(classes.edit_block_delete)} onClick={()=>{onckickdelete();}}>
                            Удалить
                        </a>
                        <a  className={classNames(classes.albumes_lable, classes.edit_block_span)} onClick={()=>{props.SET_ISSELECTEDALBUMESAC(false); props.CLEAR_SELECTEDALBUMESAC(); props.CLEAR_SELECTEDIMAGESAC(); props.SET_ISSELECTEDIMAGESAC(false);}}>
                            Отмена
                        </a>

                    </div>
                }
            </div>
            {
                isopen &&
                <div className={classes.albumes_container_parent}>
                    <div className={classes.albumes_container}>
                        {
                            Cards_item
                        }
                        <a className={classes.albumes_container_new} onClick={()=>{props.isAddnewAlmub(true)}}>
                            <div className={classes.add_block_container}>
                                <div className={classes.add_block}>
                                    <svg className={classes.add_block__svg} width="28px" viewBox="0 0 100 100"><path stroke="null" fillRule="evenodd" d="M57.07143020629883 42.92857360839844L57.07143020629883 0.5 42.92857360839844 0.5 42.92857360839844 42.92857360839844 0.5 42.92857360839844 0.5 57.07143020629883 42.92857360839844 57.07143020629883 42.92857360839844 99.5 57.07143020629883 99.5 57.07143020629883 57.07143020629883 99.5 57.07143020629883 99.5 42.92857360839844z"/></svg>
                                    <div className={classes.add_block__p}>
                                        Создать альбом
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            }
            {!isopen &&
            <div className={classes.albumes_photos__container}>
                <div className={classes.albumes_photos}>
                    {
                        Photos_elements
                    }
                    <label  className={classNames(classes.albumes_container_photo)}>
                        <a className={classes.add_block} onClick={()=>{}}>
                            <svg className={classes.add_block__svg} width="28px" viewBox="0 0 100 100"><path stroke="null" fillRule="evenodd" d="M57.07143020629883 42.92857360839844L57.07143020629883 0.5 42.92857360839844 0.5 42.92857360839844 42.92857360839844 0.5 42.92857360839844 0.5 57.07143020629883 42.92857360839844 57.07143020629883 42.92857360839844 99.5 57.07143020629883 99.5 57.07143020629883 57.07143020629883 99.5 57.07143020629883 99.5 42.92857360839844z"/></svg>
                            {/* eslint-disable-next-line no-unused-expressions */}
                            <input className={classes.file_loader} type="file" name="photo" required multiple onChange={Welcomphoto}/>
                            <div className={classes.add_block__p}>
                                Добавить фото
                            </div>
                        </a>
                    </label>
                </div>
            </div>
            }
            {
                isgaler &&
                <div className={classes.galer_viewer}>
                    <div className={classes.galer_viewer_container}>
                        <a className={classes.galer_escape} onClick={()=>{setIsgaler(false)}}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M17.4009 0.613295C16.8809 0.0932946 16.0409 0.0932946 15.5209 0.613295L9.00094 7.11996L2.48094 0.599961C1.96094 0.0799609 1.12094 0.0799609 0.600937 0.599961C0.0809375 1.11996 0.0809375 1.95996 0.600937 2.47996L7.12094 8.99996L0.600937 15.52C0.0809375 16.04 0.0809375 16.88 0.600937 17.4C1.12094 17.92 1.96094 17.92 2.48094 17.4L9.00094 10.88L15.5209 17.4C16.0409 17.92 16.8809 17.92 17.4009 17.4C17.9209 16.88 17.9209 16.04 17.4009 15.52L10.8809 8.99996L17.4009 2.47996C17.9076 1.97329 17.9076 1.11996 17.4009 0.613295Z"/></svg>
                        </a>
                        <div className={classes.arrow_left} onClick={()=>{Setphoto(false)}}>
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M12.2322 18.5345L4.69023 10.9925L12.2322 3.45052C12.9903 2.69243 12.9903 1.46783 12.2322 0.709745C11.4741 -0.0483419 10.2495 -0.0483421 9.49144 0.709745L0.569348 9.63184C-0.188738 10.3899 -0.188738 11.6145 0.569348 12.3726L9.49144 21.2947C10.2495 22.0528 11.4741 22.0528 12.2322 21.2947C12.9709 20.5366 12.9903 19.2926 12.2322 18.5345Z"/></svg>
                        </div>
                        <div ref={galer_photo} className={classes.galer_photo}>
                        </div>
                        <div className={classes.arrow_right} onClick={()=>{Setphoto(true)}}>
                            <svg width="13" height="22" viewBox="0 0 13 22" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M0.767783 3.4655L8.30977 11.0075L0.767783 18.5495C0.00969629 19.3076 0.00969623 20.5322 0.767783 21.2903C1.52587 22.0483 2.75047 22.0483 3.50856 21.2903L12.4307 12.3682C13.1887 11.6101 13.1887 10.3855 12.4307 9.62738L3.50856 0.705284C2.75047 -0.0528028 1.52587 -0.0528029 0.767784 0.705284C0.0291352 1.46337 0.00969701 2.70741 0.767783 3.4655Z"/></svg>
                        </div>
                    </div>
                    <div className={classes.galer_viewer_stick}>
                        {
                            Little_menu
                        }
                    </div>
                </div>
            }
        </div>
    );
}
export default compose(
    connect(mapStateToProps, DispatchToProps),
)(Albumes_profile);

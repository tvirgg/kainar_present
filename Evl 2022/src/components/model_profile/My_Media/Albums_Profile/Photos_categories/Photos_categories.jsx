import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

import classes from "./Photos_categories.module.css";

const Photos_categories = (props) => {
    let ref = useRef();
    let [back, isback] = useState('');
    useLayoutEffect(() => {
        if(props.photos[0]){
            isback(`http://167.71.38.182/images/${props.photos[0].url}`);
        }else{
            isback(`http://167.71.38.182/images/no_album.png`);
        }
    },[props.photos]);
    let oncheked = ()=>{
        if (ref.current.checked){
            props.SET_SELECTEDALBUMESAC(props.id);
        }else{
            props.DELITEFROMALBUMESDELECTAC(props.id);
        }
    }
    let objectform = (id, name, photos)=>{
        return {
            id: id,
            name: name, photos: photos
        };
    }
    let objectformedit = (mode, id)=>{
        return {
            mode: mode,
            id: id
        };
    }
    return (
        <div className={classes.item_container}>
            <div className={classes.item_grad} onClick={()=>{
                props.setisopen(!props.isopen); props.CLEAR_SELECTEDALBUMESAC(); props.SetCurrentAlbum(objectform(props.id, props.name, props.photos.url)); props.SetCurrentContain(); props.SET_ISSELECTEDALBUMESA(false);
            }}/>
            <div className={classes.item} style={{
                backgroundImage: `url(${back})`}}>
            </div>
            <div className={classes.album_bottom}>
                <span>
                    {
                        props.name
                    }
                </span>
                <div>
                    <div className={classes.right_block}>
                        <div className={classes.photos_block}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" fill="#FFFFFFFF" version="1.1" x="0px" y="0px" viewBox="0 0 307.308 307.308"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/><link type="text/css" rel="stylesheet" />
                                <g>
                                    <path d="M284.909,66.146h-81.345l-16.426-27.595c-1.607-2.698-4.514-4.351-7.654-4.351h-51.662c-3.14,0-6.048,1.653-7.654,4.351   l-16.426,27.595H77.049v-6.082c0-4.919-3.988-8.907-8.907-8.907H35.185c-4.92,0-8.907,3.988-8.907,8.907v6.082h-3.88   C10.027,66.146,0,76.174,0,88.543v162.166c0,12.37,10.027,22.398,22.397,22.398h262.512c12.37,0,22.398-10.028,22.398-22.398   V88.543C307.308,76.174,297.279,66.146,284.909,66.146z M153.653,233.379c-35.21,0-63.753-28.543-63.753-63.754   c0-35.209,28.543-63.753,63.753-63.753c35.21,0,63.753,28.544,63.753,63.753C217.406,204.836,188.863,233.379,153.653,233.379z    M270.935,112.322h-27.91c-4.919,0-8.907-3.988-8.907-8.908c0-4.92,3.988-8.908,8.907-8.908h27.91c4.921,0,8.908,3.988,8.908,8.908   C279.843,108.334,275.855,112.322,270.935,112.322z"/>
                                                    <circle cx="153.653" cy="169.625" r="44.538"/>
                                </g>
                            </svg>
                                <div className={classes.photos_cout}>
                                    {props.photoscount}
                            </div>
                        </div>
                        <div className={classes.videos_block}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" fill="#FFFFFFFF" version="1.1" x="0px" y="0px" viewBox="0 0 488.3 488.3"><link xmlns="" type="text/css" rel="stylesheet"/><link xmlns="" type="text/css" rel="stylesheet"/>
                                <g>
                                    <path d="M488.3,142.5v203.1c0,15.7-17,25.5-30.6,17.7l-84.6-48.8v13.9c0,41.8-33.9,75.7-75.7,75.7H75.7C33.9,404.1,0,370.2,0,328.4   V159.9c0-41.8,33.9-75.7,75.7-75.7h221.8c41.8,0,75.7,33.9,75.7,75.7v13.9l84.6-48.8C471.3,117,488.3,126.9,488.3,142.5z"/>
                                </g>
                            </svg>
                            <div className={classes.photos_cout}>
                                {props.videocount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                props.isalbumselecting && <div className={classes.edit_block}>
                    <input ref={ref} type="checkbox" id={`chekboxcategory.${props.id}`} className={classes.chekbox}
                           onChange={() => {
                               oncheked()
                           }}/>
                    <label htmlFor={`chekboxcategory.${props.id}`} id={`chekboxcategory.${props.id}`}/>
                    <a onClick={()=>{props.isEDITALBUM(objectformedit(true, props.id))}}>
                        <svg className={classes.category_svg} viewBox="0 0 20 20"><path d="M17.71 10c0-.34-.02-.66-.07-.97l2.17-1.65a.5.5 0 00.13-.64l-2.06-3.47a.53.53 0 00-.63-.22l-2.56 1a7.59 7.59 0 00-1.73-.97L12.57.41a.51.51 0 00-.51-.42H7.94a.5.5 0 00-.5.42l-.38 2.65a7.77 7.77 0 00-1.74.98l-2.56-1a.52.52 0 00-.63.23L.07 6.73a.48.48 0 00.13.63l2.18 1.65a6.05 6.05 0 00-.02 1.96L.2 12.62a.5.5 0 00-.13.64l2.06 3.47a.53.53 0 00.63.22l2.56-1c.54.4 1.1.73 1.73.98l.39 2.65c.05.25.26.42.51.42h4.12c.25 0 .47-.17.5-.42l.38-2.65a7.8 7.8 0 001.74-.98l2.56 1c.23.09.5 0 .63-.22l2.06-3.47a.48.48 0 00-.13-.63l-2.15-1.66c.04-.3.06-.63.06-.97zM10 13.75A3.82 3.82 0 016.14 10 3.82 3.82 0 0110 6.25 3.82 3.82 0 0113.86 10 3.82 3.82 0 0110 13.75z"/></svg>
                    </a>
                </div>
            }
        </div>
    );
}
export default Photos_categories;

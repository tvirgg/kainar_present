import React from "react";
import classes from "./Profile.module.css";
import classNames from "classnames";
import profile_photo from "../../../img/prof_logo.jpg";
import Albumes from "../Albums/Albumes";
import Profile_info from "../Profile_info/Profile_info";
export default function Profile(props) {
    return (
        <div>
            <div className={classes.profile_container}>
                <div className={classes.basic_info} style={{
                        backgroundImage: `url("https://video.knightdomservers.com/thumbnail/${props.current_data.backghoundimage}")`
                    }}>
                    <img src={`https://video.knightdomservers.com/thumbnail/${props.current_data.avatar}`} alt="profile_photo" className={classes.basic_info__profile_photo}/>
                    <div className={classes.basic_info__name}>
                        <h1 className={classes.profile_block__name_bsc}>
                            {props.current_data.username}
                        </h1>
                    </div>
                </div>
                <div className={classes.basic_info_mobile}>
                    <img src={profile_photo} alt="profile_photo" className={classNames(classes.basic_info__profile_photo, classes.basic_info__profile_photo_mobile)}/>
                    <div className={classes.basic_info__name}>
                        <h1 className={classes.profile_block__name_bsc}>
                            {props.current_data.sex}
                        </h1>
                    </div>
                </div>
                <Profile_info current_data={props.current_data}/>
                {/*<Albumes SetCurrentphoto={props.SetCurrentphoto} current_photo={props.current_photo}/>*/}
            </div>
            </div>

    );
}

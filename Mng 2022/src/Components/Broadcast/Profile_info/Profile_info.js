import React from "react";
import classes from "./Profile_info.module.css";
export default function Profile_info(props) {
    return (
        <div className={classes.profile_container__info}>
            <table>
                <tr><td className={classes.profile_container_lable}>Имя:</td><td>{props.current_data.username}</td></tr>
                <tr><td className={classes.profile_container_lable}>Пол:</td><td>{props.current_data.sex}</td></tr>
            </table>
        </div>
    );
}

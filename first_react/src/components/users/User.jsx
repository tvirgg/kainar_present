import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
let User = ({u, followingInProgress, unfollow, follow}) => {

    return <div className={classes.user_card_wrap}>

           <span>
                <div>
                <div className={classes.user_card}>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={classes.profil_photo} src={u.small != null ? u.small : "https://pbs.twimg.com/profile_images/1081531670656962561/J9QiHhLT_400x400.jpg"}/>
                    </NavLink>

                </div>
                <div>

                {u.followed
                    ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                        unfollow(u.id);
                    }}>Unfallow</button>
                    : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                        follow(u.id);
                    }}>Follow</button>
                }
                    <span>
                <span>
                     <div>{u.name}</div>
                </span>
                <span>
                     <div>
                     {"u.location.city"}
                     </div>
                     <div>
                     {"u.location.country"}
                     </div>
                </span>
            </span>
                </div>
                </div>
            </span>

            </div>
        }

export default User;
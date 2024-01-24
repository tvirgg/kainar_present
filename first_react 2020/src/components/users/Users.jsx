import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Users.module.css';
import {NavLink} from "react-router-dom";
import Pagination from "./Paginator";

const Users = (props) => {

    return <div className={classes.user_card_wrap}>
<Pagination curentPage={ props.curentPage} onPageChanged={props.onPageChanged} totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <div className={classes.user_card}>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={classes.profil_photo} src={u.photos.small != null ? u.photos.small : "https://pbs.twimg.com/profile_images/1081531670656962561/J9QiHhLT_400x400.jpg"}/>
                        </NavLink>
                    </div>
                <div>

                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unfallow(u.id);
                    }}>Unfallow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.fallow(u.id);
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

            </div>)
        }
    </div>
}
export default Users;
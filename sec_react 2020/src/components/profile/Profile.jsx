import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Profile.module.css';
import Postscontainer from "../main-wrapper/Posts/postscontainer";
import {Container} from "react-bootstrap";
import Profileinfo from "./Profileinfo";

const Profile = (props) => {
    return(
        <Container>

            <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <Postscontainer/>
        </Container>
)

}
export default Profile;
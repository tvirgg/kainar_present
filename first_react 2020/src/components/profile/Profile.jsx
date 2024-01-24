import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Profile.module.css';
import Postscontainer from "../main-wrapper/Posts/postscontainer";
import {Container} from "react-bootstrap";
import Profileinfo from "./Profileinfo";

const Profile = (props) => {
    return(
        <Container>

            <Profileinfo SaveProfile={props.SaveProfile} isowner={props.isowner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} SavePhoto={props.savePhoto}/>
            <Postscontainer/>
        </Container>
)

}
export default Profile;
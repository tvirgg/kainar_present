import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container} from "react-bootstrap";
import Loader from "./loader";
import classes from './Profile.module.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import Profile_data_form from "./ProfileDataForm";


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
const Profileinfo = (props) => {
    let [editmode, Seteditmode] = useState(false);
    if(!props.profile){
        return (
            <Loader />
        )
    }
    const Photo_selected = (e) => {
        if (e.target.files.length){
            props.SavePhoto(e.target.files[0]);
        }
    }

    const Profile_data = (props) =>{
        return <div>
            <h3>
                <b>Looking for a job : </b> {props.profile.lookingForAJob? "yes" : "no"}
            </h3>
            <h3>
                <b>My skills : </b> {props.profile.lookingForAJobDescription}
            </h3>
            <h3>
                <b>AboutMe : </b> {props.profile.aboutMe}
            </h3>
            <h3>
                <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </h3>
            {props.isowner && <Button variant="outline-info" onClick={props.goToEditMode} >Select new</Button>}
        </div>
    }
    const onSubmit = (formData) => {
        console.log(formData);
        props.SaveProfile(formData).then(
            () => {
                Seteditmode(false);
            }
        );
    }
    return(
        <Container>
            <Row>
                <Col md={4}>
                    <h2  className={classes.profile_name}>{props.profile.fullName}</h2>
                    <img className={classes.profile_img} src={props.profile.photos.large!= null ? props.profile.photos.large : "https://pbs.twimg.com/profile_images/1081531670656962561/J9QiHhLT_400x400.jpg" } />
                    <div className={classes.profile_select_image_block}>
                        { props.isowner && <input className={classes.select_Photobtn}  id="file-upload" type={"file"} onChange={Photo_selected}  />}
                        { props.isowner && <label htmlFor="file-upload" className={classes.custom_file_upload}>
                             Upload Photo
                        </label>}
                    </div>

                </Col>
                <Col md={4}>
                    { editmode ? <Profile_data_form initialValues={props.profile} onSubmit={onSubmit}  profile={props.profile}/> : <Profile_data isowner={props.isowner} profile={props.profile}  goToEditMode={() => {Seteditmode(true)} }  />}
                </Col>
                <Col md={4}>
                    <h3 className={classes.status}>
                        <ProfileStatusWithHooks isowner={props.isowner} status={props.status} updateStatus={props.updateStatus}/>
                    </h3>
                </Col>
            </Row>

        </Container>
)

}
export default Profileinfo;
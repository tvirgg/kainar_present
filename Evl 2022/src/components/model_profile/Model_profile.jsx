import React from 'react';
import classes from "./Model_profile.module.css";
import My_information from "./My_info/My_information.jsx";
import Albumes_profile from "./My_Media/Albums_Profile/Albumes.jsx";
import My_profile from "./My_profile/My_profile.js";
import {connect} from "react-redux";
const Model_profile = (props) => {
    return (
            <div className={classes.wrap}>
                <div className={classes.container}>
                    <div className={classes.row_item}>
                        <div className={classes.first_col}>
                            <My_profile/>
                        </div>
                        <div className={classes.second_col}>
                            <My_information/>
                            {/*/  <Albumes_profile/>/*/}
                        </div>
                    </div>
                </div>
            </div>
    );
}


const mapStateToProps = state => {
    return {
        isauth: state.AppData.isauth
    }
};
export default connect(mapStateToProps, null)(Model_profile);

import React from 'react';
import classes from "./Reg_block.module.css";
import Registration_Form from "./Registration_form/Registration_Form";
import classNames from "classnames";
import {compose} from "redux";
import {connect} from "react-redux";
import {Setregistrationblock, SetregistrationMODELblock} from "../../redux/state/App_reducer";
const DispatchToProps = (dispatch) => {
    return {
        SetregistrationMODELblock: (mode) =>{
            dispatch(SetregistrationMODELblock(mode));
        },
        Setregistrationblock: (mode) =>{
            dispatch(Setregistrationblock(mode));
        },

    };
};
const Registrationblock = (props) => {
    return (
        <div className={classes.reg_container}>
            <div className={classes.reg_block}>
                <div className={classes.reg_block_top}>
                    <div className={classes.reg_block_top_block}>
                        <h1>
                            Зарегистрировать <span className={classes.mobile_none}>бесплатный</span> аккаунт
                        </h1>
                        <svg className={classes.lock} fill="#9af550" viewBox="0 0 12 16"><path d="m11.6 7.904v6.816c0 .704-.56 1.28-1.246 1.28h-8.708c-.685 0-1.246-.576-1.246-1.28v-6.816c0-.704.561-1.28 1.246-1.28h.499v-3.264c0-1.856 1.744-3.36 3.863-3.36 2.118 0 3.847 1.504 3.847 3.36v3.264h.499c.685 0 1.246.576 1.246 1.28zm-4.51 5.824-.422-2.4c.36-.224.61-.64.61-1.104 0-.72-.563-1.296-1.266-1.296-.704 0-1.266.592-1.266 1.296 0 .464.25.88.61 1.104l-.438 2.4zm1.122-10.368c0-.896-1.03-1.664-2.216-1.664s-2.2.768-2.2 1.664v3.264h4.416z"/></svg>
                        <a className={classes.close_block} onClick={() => {
                            props.Setregistrationblock(false);
                        }}>
                            <svg className={classes.close} viewBox="0 0 100 100"><path d="M60.2 34.2L50 44.4 39.8 34.2c-1.5-1.5-4-1.5-5.6 0-1.5 1.5-1.5 4 0 5.6L44.4 50 34.2 60.2c-1.5 1.5-1.5 4 0 5.6 1.5 1.5 4 1.5 5.6 0L50 55.6l10.2 10.2c1.5 1.5 4 1.5 5.6 0 1.5-1.5 1.5-4 0-5.6L55.6 50l10.2-10.2c1.5-1.5 1.5-4 0-5.6-1.6-1.5-4.1-1.5-5.6 0z"/><path d="M50 10.5c-21.8 0-39.5 17.7-39.5 39.5S28.2 89.5 50 89.5 89.5 71.8 89.5 50 71.8 10.5 50 10.5zm0 89.5C22.4 100 0 77.6 0 50S22.4 0 50 0s50 22.4 50 50-22.4 50-50 50z"/></svg>
                        </a>
                    </div>
                </div>
                <div className={classes.reg_block_main}>
                    <div className={classes.reg_block_main_left}>
                        <Registration_Form/>
                            {/*<div className={classes.or_container}>*/}
                            {/*</div>*/}
                        {/*    <div className={classes.or}>*/}
                        {/*        или*/}
                        {/*    </div>*/}
                        {/*    <div className={classes.google_auth_container}>*/}
                        {/*        <div className={classes.google_auth}>*/}
                        {/*            <svg fill="#FFFFFFFF" height="20px" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 11.9V8.2h9.4l.2 2c0 5.7-3.8 9.8-9.6 9.8a10 10 0 1 1 6.7-17.4l-2.8 2.8c-.8-.7-2-1.5-3.9-1.5A6 6 0 0 0 4 10a6 6 0 0 0 6 6.1c3.8 0 5.2-2.6 5.5-4.2H10z" opacity=".8"/></svg>*/}
                        {/*        </div>*/}
                        {/*        <div className={classes.google_auth_right}>*/}
                        {/*            <h2>Войти через Google</h2>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*<div className={classNames(classes.google_auth_container, classes.twitter)}>*/}
                        {/*    <div className={classes.google_auth}>*/}
                        {/*        <svg fill="#FFFFFFFF" height="20px" viewBox="0 0 100 100"><path fill="currentColor" d="M99.895 19.04a40.798 40.798 0 0 1-11.775 3.243c4.24-2.544 7.484-6.536 9.03-11.326a41.992 41.992 0 0 1-13.022 4.99c-3.742-3.992-9.03-6.487-14.918-6.487-11.327 0-20.507 9.181-20.507 20.457 0 1.597.2 3.194.549 4.69-17.015-.848-32.083-9.03-42.212-21.405-1.746 2.994-2.744 6.537-2.744 10.279 0 7.135 3.593 13.372 9.081 17.064-3.343-.15-6.486-1.048-9.28-2.595v.25c0 9.929 7.085 18.211 16.465 20.108a21.661 21.661 0 0 1-5.439.698 19.68 19.68 0 0 1-3.842-.4c2.595 8.134 10.18 14.071 19.11 14.22A41.003 41.003 0 0 1 .105 81.31c9.08 5.838 19.808 9.23 31.384 9.23 37.67 0 58.227-31.234 58.227-58.277l-.05-2.644c3.992-2.844 7.485-6.486 10.229-10.578z"/></svg>*/}
                        {/*    </div>*/}
                        {/*    <div className={classNames(classes.google_auth_right, classes.twitter_container)}>*/}
                        {/*        <h2>Войти через Twitter</h2>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={classes.conditions}>*/}
                        {/*    Регистрируясь, вы соглашаетесь с <a>*/}
                        {/*    Условиями*/}
                        {/*</a>*/}
                        {/*</div>*/}
                    </div>
                    <div className={classes.reg_block_main_right}>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default compose(
    connect(null,DispatchToProps),
)(Registrationblock);

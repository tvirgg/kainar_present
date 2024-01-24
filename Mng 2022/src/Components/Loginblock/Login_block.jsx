import React from 'react';
import classes from "./Login_block.module.css";
import Registration_Form from "./Login_form/Login_Form.jsx";
import classNames from "classnames";
import {compose} from "redux";
import {connect} from "react-redux";
import {SetLOGINblock} from "../../redux/state/App_reducer";
const DispatchToProps = (dispatch) => {
    return {
        SetLOGINblock: (mode) =>{
            dispatch(SetLOGINblock(mode));
        }
    };
};
const Loginblock = (props) => {
    return (
        <div className={classes.reg_container}>
            <div className={classes.reg_block}>
                <div className={classes.reg_block_top}>
                    <div className={classes.reg_block_top_block}>
                        <h1>
                            Вход
                        </h1>
                        <a className={classes.close_block} onClick={() => {
                            props.SetLOGINblock(false)
                        }}>
                            <svg className={classes.close} viewBox="0 0 100 100"><path d="M95.497 82.93l-32.7-32.7 32.7-32.701a8.992 8.992 0 0 0 0-12.745 8.992 8.992 0 0 0-12.744 0l-32.701 32.7-32.701-32.7a8.992 8.992 0 0 0-12.745 0 8.992 8.992 0 0 0 0 12.745l32.7 32.7-32.7 32.702a8.992 8.992 0 0 0 0 12.744 8.992 8.992 0 0 0 12.745 0l32.7-32.7 32.702 32.7a8.992 8.992 0 0 0 12.744 0c3.506-3.53 3.506-9.239 0-12.744z"/></svg>
                        </a>
                    </div>
                </div>
                <div className={classes.reg_block_main}>
                    <div className={classes.reg_block_main_left}>
                        <Registration_Form/>
                        {/*<div className={classes.row_pass}>*/}
                        {/*    <a className={classes.forgetpass} onClick={()=>{*/}
                        {/*        props.SetLOGINblock(false);*/}
                        {/*        props.SET_RECOVERYFORMAC(true);*/}
                        {/*    }}>*/}
                        {/*        Forgot password ?*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        {/*<div className={classes.row_block}>*/}
                        {/*    <div className={classes.or_container}>*/}
                        {/*    </div>*/}
                        {/*    <div className={classes.or}>*/}
                        {/*        или*/}
                        {/*    </div>*/}
                        {/*    <div className={classes.or_container}>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*    <div className={classes.google_auth_container}>*/}
                        {/*        <div className={classes.google_auth}>*/}
                        {/*            <svg fill="#FFFFFFFF" height="20px" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 11.9V8.2h9.4l.2 2c0 5.7-3.8 9.8-9.6 9.8a10 10 0 1 1 6.7-17.4l-2.8 2.8c-.8-.7-2-1.5-3.9-1.5A6 6 0 0 0 4 10a6 6 0 0 0 6 6.1c3.8 0 5.2-2.6 5.5-4.2H10z" opacity=".8"/></svg>*/}
                        {/*        </div>*/}
                        {/*        <div className={classes.google_auth_right}>*/}
                        {/*            <h2>Google</h2>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*<div className={classNames(classes.google_auth_container, classes.twitter)}>*/}
                        {/*    <div className={classes.google_auth}>*/}
                        {/*        <svg fill="#FFFFFFFF" height="20px" viewBox="0 0 100 100"><path fill="currentColor" d="M99.895 19.04a40.798 40.798 0 0 1-11.775 3.243c4.24-2.544 7.484-6.536 9.03-11.326a41.992 41.992 0 0 1-13.022 4.99c-3.742-3.992-9.03-6.487-14.918-6.487-11.327 0-20.507 9.181-20.507 20.457 0 1.597.2 3.194.549 4.69-17.015-.848-32.083-9.03-42.212-21.405-1.746 2.994-2.744 6.537-2.744 10.279 0 7.135 3.593 13.372 9.081 17.064-3.343-.15-6.486-1.048-9.28-2.595v.25c0 9.929 7.085 18.211 16.465 20.108a21.661 21.661 0 0 1-5.439.698 19.68 19.68 0 0 1-3.842-.4c2.595 8.134 10.18 14.071 19.11 14.22A41.003 41.003 0 0 1 .105 81.31c9.08 5.838 19.808 9.23 31.384 9.23 37.67 0 58.227-31.234 58.227-58.277l-.05-2.644c3.992-2.844 7.485-6.486 10.229-10.578z"/></svg>*/}
                        {/*    </div>*/}
                        {/*    <div className={classNames(classes.google_auth_right, classes.twitter_container)}>*/}
                        {/*        <h2>Twitter</h2>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default compose(
    connect(null,DispatchToProps),
)(Loginblock);

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.jsx';
import * as axios from "axios";
import {logout, setrequire, Setuserdata} from "../../redux/state/Auth_reducer";
import {connect} from 'react-redux';
class HeaderContainer extends  React.Component{
    render() {
    return<>
        <Header {...this.props}/>
    </>
}}
const mapStateToProps = (state) => ({
    isAuth: state.AuthData.isAuth,
    login: state.AuthData.login
});
export default connect (mapStateToProps, {logout}) (HeaderContainer);
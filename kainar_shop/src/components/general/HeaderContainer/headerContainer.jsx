import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.jsx';
import {connect} from 'react-redux';
class HeaderContainer extends  React.Component{
    render() {
    return<>
        <Header {...this.props}/>
    </>
}}
const mapStateToProps = (state) => ({
    Common_counter: state.GoodsData.Common_counter
});
export default connect (mapStateToProps) (HeaderContainer);
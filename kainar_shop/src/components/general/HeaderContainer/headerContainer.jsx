import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.jsx';
import {connect} from 'react-redux';
import {Bascket_counterSelect, Common_counterSelect} from "./Header-selector";
class HeaderContainer extends  React.Component{
    render() {
    return<>
        <Header {...this.props}/>
    </>
}}
const mapStateToProps = (state) => ({
    Common_counter: Common_counterSelect(state),
    Basket: Bascket_counterSelect(state)
});
export default connect (mapStateToProps) (HeaderContainer);
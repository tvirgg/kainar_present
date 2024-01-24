import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { connect, Provider } from "react-redux";
import { Route, withRouter, HashRouter } from "react-router-dom";
import store from './redux/state/redux-store';
import Main_wrapper from "./components/main-wrapper/Mainwrap";
import classes from "./App.module.css"
import GoodProfile from "./components/goodprofile/GoodProfileContainer";
import BlogCont from "./components/blog/BlogContainer";
import BasketComponentContainer from "./components/basket/BasketComponentContainer";
import Footer from "./components/general/FooterContainer/footer";
import Header from "./components/general/HeaderContainer/header";
import ShowCase from "./components/showcase/ShowCaseContainer";
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Routes = () => (
    <Route render={({location}) => (
        <div className={classes.wrapper__box}>
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="slide" timeout={500}>
                    <Switch location={location}>
                        <Route exact path={"/"} component={Main_wrapper} />
                        <Route path={"/shop"} component={ShowCase} />
                        <Route path={"/goodprofile/:profcategory?/:profId?"} component={GoodProfile} />
                        <Route path={"/blog"} component={BlogCont} />
                        <Route path={"/basket"} component={BasketComponentContainer} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )}
    />);


const App = ({ initialized }) => {
    return (
        <div className={classes.AppContainer}>
            <div className={classes.AppHeader}>
                <Header />
            </div>
            <div className={classes.AppContent}>
                <Routes />
            </div>
            <div className={classes.AppFooter}>
                <Footer />
            </div>
        </div>
    );
};


const mapStateToProps = (state) => ({
    initialized: state.AppData.initialized
});

const AppContainer = connect(mapStateToProps)(withRouter(App));

const Myapp_JSApp = () => {
    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    );
};

export default React.memo(Myapp_JSApp);
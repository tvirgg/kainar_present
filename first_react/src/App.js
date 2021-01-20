import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Suspense} from 'react';
import './App.css';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from './redux/state/redux-store';
import Main_wrapper from './components/main-wrapper/Mainwrap';
import {Router, BrowserRouter, Route, withRouter, HashRouter} from "react-router-dom";
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";
import {initializeApp} from "./redux/state/app-reducer";
import Loader from "./components/users/loader";
const Comentcontainer = React.lazy(() => import('./components/comment/comentcontainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader />
        }
        return (
            <div>
                    <HeaderContainer/>
                    <Route path={"/main-wrapper"} render={() => <Main_wrapper/>}/>
                <Route path={"/coment"} render={() => { return <Suspense fallback={<Loader />}><Comentcontainer/></Suspense>}}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                <Route path={"/profile/:userId?"} render={() => { return <Suspense fallback={<Loader />}><ProfileContainer/></Suspense>}}/>
                    <Route path={"/login"} render={() => <Login/>}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const Myapp_JSApp = (props) => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}
export default Myapp_JSApp;
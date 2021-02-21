import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Suspense} from 'react';
import './App.css';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from './redux/state/redux-store';
import {Route, withRouter, HashRouter} from "react-router-dom";
import HeaderContainer from "./components/general/HeaderContainer/headerContainer";
import Main_wrapper from "./components/main-wrapper/Mainwrap";
import ShowCaseCont from "./components/showcase/ShowCaseContainer";
import GoodProfileContainer from "./components/goodprofile/GoodProfileContainer";
import BlogContainer from "./components/blog/BlogContainer";
import BasketComponentContainer from "./components/basket/BasketComponentContainer";
import Footer from "./components/general/FooterContainer/footer";

class App extends React.Component {
  render() {
    return (
        <div>
            <HeaderContainer/>
              <Route path={"/main"} render={() => <Main_wrapper/>}/>
              <Route path={"/shop"} render={() => <ShowCaseCont/>}/>
              <Route path={"/goodprofile/:profcategory?/:profId?"} render={() => <GoodProfileContainer/>}/>
              <Route path={"/blog"} render={() => <BlogContainer/>}/>
              <Route path={"/basket"} render={() => <BasketComponentContainer/>}/>
              <Footer/>
        </div>
    );
  }
}
const mapStateToProps = (state) => ({
    initialized: state.AppData.initialized
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,))(App);

const Myapp_JSApp = (props) => {
  return <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}
export default Myapp_JSApp;
import React, { Suspense } from 'react';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import store from './redux/state/redux-store';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import GlobalMenuContainer from "./components/globalmenu/GlobalMenuContainer";
import FotterContainer from "./components/footer/FotterContainer";
import classNames from "classnames";
import Preloader from "./components/Preloader/Preloader";
import './App.css';
import {GetAll, GetCategories, Setglobalmenu, Setregistrationblock} from "./redux/state/App_reducer";
import StartComponent from "./components/StartComponent/StartComponent";
import BroadcastContainer from "./components/Broadcast/BroadcastContainer";
import MetaTags from 'react-meta-tags';
import Registrationblock from "./components/Registrationblock/Reg_block";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Loginblock from "./components/Loginblock/Login_block";
import ADDalbumBLOCK from "./components/AddALBUMblock/Addalbum_block";
import ADDitalbumBLOCK from "./components/AditALBUMblock/Additalbum_block";
import Mammal from "./components/Categories/Category_elem";
import Model_profile from "./components/model_profile/Model_profile";
import {IntlProvider} from "react-intl";
import Upload_videofile from "./components/Upload_videofile/Upload_videofile";

class App extends React.Component {
    componentDidMount(){
        this.props.GetAll();
    }
    render() {
        var menu_len = classNames({
            "staittohell": true
        });
        var isblure = classNames({
            "body_block": true,
            "body_block_paddung": (this.props.blockscren === true || this.props.registrationForm === true || this.props.registrationStudioForm === true || this.props.registrationmodelForm === true || this.props.loginForm === true || this.props.isaddingalbum === true || this.props.isedit_album === true ||  this.props.recoveryform === true)
        });
        var menu_lenselect = classNames({
            "close_block_selector": this.props.blockscren,
        });
        if(this.props.blockscren === true || this.props.registrationForm === true || this.props.registrationStudioForm === true || this.props.registrationmodelForm === true || this.props.loginForm === true || this.props.isaddingalbum === true || this.props.isedit_album === true ||  this.props.recoveryform === true){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflowY = 'scroll';
            document.body.style.overflowX = 'hidden';
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (
            <IntlProvider locale="ru">
                <div className={menu_len}>
                    <MetaTags>
                        <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,width=device-width,user-scalable=no" />
                    </MetaTags>
                    {
                        !this.props.isrender && <Preloader/>
                    }
                    {
                        this.props.isrender && <div className={menu_len}>
                            <div className={menu_lenselect} onClick={() => {
                                this.props.Hidemenu(true)
                            }}/>
                            <div className={isblure}>
                                <div className="header">
                                    <HeaderContainer/>
                                </div>
                                {
                                    this.props.registrationForm && <Registrationblock/>
                                }
                                {
                                    this.props.isaddingalbum && <ADDalbumBLOCK/>
                                }
                                {
                                    this.props.isedit_album && <ADDitalbumBLOCK/>
                                }
                                {
                                    this.props.loginForm && <Loginblock/>
                                }

                                <div className="row" id="main_row">
                                    <GlobalMenuContainer/>
                                    <ScrollToTop />
                                    <Switch>
                                        <Route exact path='/' component={StartComponent} fallback={<Preloader />} />
                                        <Route path='/broadcasting' render={()=>{return(<Suspense fallback={<Preloader />}><BroadcastContainer/></Suspense>)}} />
                                        <Route path='/mammal' render={()=>{return(<Suspense fallback={<Preloader />}><Mammal elem={0}/></Suspense>)}} />
                                        <Route path='/birds' render={()=>{return(<Suspense fallback={<Preloader />}><Mammal elem={1}/></Suspense>)}} />
                                        <Route path='/fish' render={()=>{return(<Suspense fallback={<Preloader />}><Mammal elem={3}/></Suspense>)}} />
                                        {this.props.isauth} && <Route path='/myprofile' render={()=>{return(<Suspense fallback={<Preloader />}><Model_profile/></Suspense>)}} />}
                                        <Route path='/amphibians' render={()=>{return(<Suspense fallback={<Preloader />}><Mammal elem={2}/></Suspense>)}} />
                                        <Route path='/upload_video' render={()=>{return(<Suspense fallback={<Preloader />}><Upload_videofile/></Suspense>)}} />
                                    </Switch>
                                </div>
                                <div className="footer">
                                    <FotterContainer/>
                                </div>
                            </div>
                        </div>}
                    </div>
            </IntlProvider>
                        );
                    }
                }
    const mapStateToProps = (state) => ({
            initialized: state.AppData.initialized,
            mode: state.AppData.mode,
            blockscren: state.AppData.blockscren,
            registrationForm: state.AppData.registrationForm,
            loginForm: state.AppData.loginForm,
            isaddingalbum: state.ProfileData.isaddingalbum,
            isedit_album: state.ProfileData.edit_album.mode,
            isrender: state.AppData.isrender
        })
    const mapDispatchToProps = (dispatch) => {
    return {
                Hidemenu: (mode) =>{
                    dispatch(Setglobalmenu(mode));
                },
                SetRegistrationblock: (mode) =>{
                    dispatch(Setregistrationblock(mode));
                },
                GetCategoriesAC: () =>{
                    dispatch(GetCategories());
                },
                GetAll: (some) =>{
                    dispatch(GetAll());
                }
            }
        }
let AppContainer = compose(connect(mapStateToProps, mapDispatchToProps))(App);

const Myapp_JSApp = () => {
    return(<Provider store={store}>
                <BrowserRouter>
                    <AppContainer />
                </BrowserRouter>
            </Provider>)
}
export default Myapp_JSApp;

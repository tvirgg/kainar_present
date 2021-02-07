import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './header.module.css';
import { Container, Row, Col, Nav, Button, Navbar, Form, FormControl} from 'react-bootstrap';
import logo from '../../../img/logo2.png'
import {NavLink} from 'react-router-dom';
import Bascket_item from "./bascket/inbasket";
const Header = (props) => {
    let InbasketElements = props.Basket.map( m => <Bascket_item key={m} name={m.name}  price={m.price} pieces={m.pieces} /> );
    const [bask_disp, setbask_disp] = useState(false);
    return (
        <div className={classes.mainblock}>
        <Container>
            <Navbar bg="dark" className={classes.nav_block}>
                <Col md={2}>
                    <img  src={logo} height="50px" />
                </Col>
                <Col md={3} className={classes.navlink_block_wpapp}>
                    <Nav className={classes.navlink_block}>
                            <NavLink to="/main" className={classes.navlink}>
                                MAIN
                            </NavLink>
                            <NavLink to="/shop" className={classes.navlink}>
                                SHOP
                            </NavLink>
                            <NavLink to="/blog" className={classes.navlink}>
                                BLOG
                            </NavLink>
                    </Nav>
                </Col>
                <Col md={{ span: 2, offset: 5 }} className={classes.basket_block}>
                    <a onClick={() => setbask_disp(!bask_disp)}  className={classes.basket_block_a}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 21 21" icon="cart"
                             className="default-header-cart-icon">
                            <path fill="white" d="M6.02 7L4.27 0H.11v1.75h2.84l3.5 14h11.81L20.89 7H6.02zm10.93 7H7.77L6.45 8.75h12.03L16.95
                          14zM9.3 16.63c1.21 0 2.19.98 2.19 2.19S10.5 21 9.3 21s-2.19-.98-2.19-2.19.98-2.18 2.19-2.18zm3.93
                          2.18a2.19 2.19 0 104.379.001 2.19 2.19 0 00-4.379-.001z"></path>
                        </svg>
                        <p className={classes.Comon}>
                            {props.Common_counter} $
                        </p>
                    </a>
                    { bask_disp && 
                    <div id="block" className={classes.basket_info_block}>
                        <Row>
                            <h1>
                                Now in the bascket
                            </h1>
                            <div className={classes.bascket_info}>
                                <p>
                                    Total count: {props.Common_counter}
                                </p>
                                {InbasketElements}
                            </div>
                        </Row>
                    </div>}
                </Col>
            </Navbar>
        </Container>
        </div>
    );
}
export default Header;
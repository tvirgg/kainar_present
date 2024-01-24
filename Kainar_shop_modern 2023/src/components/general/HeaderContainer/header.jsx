import React, {useState, useMemo, useCallback, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './header.module.css';
import {Container, Row, Col, Nav, Navbar, Dropdown} from 'react-bootstrap';
import logo from '../../../img/violet_kainex.png'
import {NavLink} from 'react-router-dom';
import Bascket_item from "./bascket/inbasket";
import {useSelector} from "react-redux";
import {Bascket_counterSelect, Common_counterSelect} from "./Header-selector";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const NavLinkItem = ({ to, children }) => (
    <NavLink to={to} className={classes.navlink}>
        {children}
    </NavLink>
);

const IconCart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 21 21" icon="cart"
         className="default-header-cart-icon">
        <path fill="white" d="M6.02 7L4.27 0H.11v1.75h2.84l3.5 14h11.81L20.89 7H6.02zm10.93 7H7.77L6.45 8.75h12.03L16.95
                          14zM9.3 16.63c1.21 0 2.19.98 2.19 2.19S10.5 21 9.3 21s-2.19-.98-2.19-2.19.98-2.18 2.19-2.18zm3.93
                          2.18a2.19 2.19 0 104.379.001 2.19 2.19 0 00-4.379-.001z"></path>
    </svg>
);

const Header = () => {
    const Common_counter = useSelector(Common_counterSelect);
    const Basket = useSelector(Bascket_counterSelect);

    const InbasketElements = useMemo(() => (
        Basket.map( m => <Bascket_item key={m} name={m.name}  price={m.price} pieces={m.pieces} /> )
    ), [Basket]);

    const [bask_disp, setbask_disp] = useState(false);
    const myElement = useRef(); // ссылка на ваш элемент

    const handleMouseUpOutside = useCallback((event) => {
        if (myElement.current && !myElement.current.contains(event.target)) {
            setbask_disp(false);
        }
    }, []);

    const handleBasketDisplay = useCallback(() => setbask_disp(b => !b), []);

    useEffect(() => {
        document.addEventListener('mouseup', handleMouseUpOutside);
        return () => {
            document.removeEventListener('mouseup', handleMouseUpOutside);
        };
    }, [handleMouseUpOutside]);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className={classes.mainblock}>
        <Container>
            <Navbar bg="dark" className={classes.nav_block}>
                <Col md={2}>
                    <NavLinkItem to="/"> <img  src={logo} height="65px"  alt={'logo'}/></NavLinkItem>
                </Col>
                <Col md={5} className={classes.navlink_block_wpapp}>
                    <Nav className={classes.navlink_block}>
                        <NavLinkItem to="/">MAIN</NavLinkItem>
                        <NavLinkItem to="/shop">SHOP</NavLinkItem>
                        <NavLinkItem to="/basket">BASKET</NavLinkItem>
                        <NavLinkItem to="/blog">BLOG</NavLinkItem>
                    </Nav>
                </Col>
                <Col md={2} className={classes.mob_nav}>
                    <Dropdown isOpen={isMenuOpen} toggle={toggleMenu}>
                        <DropdownToggle caret>
                            Menu
                        </DropdownToggle>
                        <DropdownMenu>
                            <div className={classes.mob_nav}> {/* Добавлено для структуры и стилизации */}
                                <NavLinkItem to="/">MAIN</NavLinkItem>
                                <NavLinkItem to="/shop">SHOP</NavLinkItem>
                                <NavLinkItem to="/basket">BASKET</NavLinkItem>
                                <NavLinkItem to="/blog">BLOG</NavLinkItem>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                </Col>
                <Col sm = {{ span: 3, offset: 3 }} md={{ span: 2, offset: 4 }} className={classes.basket_block}>
                    <a onClick={() => handleBasketDisplay()}  className={classes.basket_block_a}>
                        <IconCart />
                        <p className={classes.Comon}>
                            {Common_counter} $
                        </p>
                    {bask_disp &&
                        <div ref={myElement} onClick={handleBasketDisplay}  className={classes.bigger_thenbasket_info_block}>
                            <div id="block" className={classes.basket_info_block}>
                                <Row>
                                    <h4 className={classes.top_nib}>
                                        Now in the bascket
                                    </h4>
                                    <div className={classes.bascket_info}>
                                        <p>
                                            Total count: {Common_counter}
                                        </p>
                                        {InbasketElements}
                                    </div>
                                </Row>
                            </div>
                        </div>}
                    </a>
                </Col>
            </Navbar>
        </Container>
        </div>
    );
}
export default Header;
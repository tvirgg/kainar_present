import React, {useCallback, useEffect, useMemo, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import classes from './ShowCase.module.css';
import Cards from "./Card/card";
import {useDispatch, useSelector} from "react-redux";
import {getGoodsDatathunk, GetInBascketCreater, PullOutBascketCreater} from '../../redux/state/GoodsData_reducer';
import Loader from "../loader/loader";
import {
    Bascket_counterSelect,
    CategoryPathSelect,
    Common_counterSelect,
    complect_impSelect,
    ind_impSelect,
    intobody_impSelect,
    utilitsSelect
} from "./ShowCase-selector";
import { NavLink } from 'react-router-dom';
import {SetCurrentPath} from "../../redux/state/App_reducer";



const ShowCase = () => {
    const dispatch = useDispatch();
    const ind_imp = useSelector(ind_impSelect);
    const path = useSelector(CategoryPathSelect);
    const intobody_imp = useSelector(intobody_impSelect);
    const complect_imp = useSelector(complect_impSelect);
    const utilits = useSelector(utilitsSelect);
    const Common_counter = useSelector(Common_counterSelect);
    const Basket = useSelector(Bascket_counterSelect);
    const initialized = useSelector(state => state.AppData.initialized);
    const [currentPath, setCurrentPath] = useState(ind_imp);
    const categories = useMemo(() => [
        { name: 'Independent implants', value: ind_imp },
        { name: 'Implants for internal', value: intobody_imp },
        { name: 'Kits', value: complect_imp },
        { name: 'Utilities', value: utilits }
    ], [ind_imp, intobody_imp, complect_imp, utilits]);
    const NavLinks = ({ categories }) => {
        return categories.map(({ name, value }) => {
            // Если currentPath равен value, присваиваем класс activeLink, иначе navlink_block__item
            const linkClass = currentPath === value ? classes.activeLink : classes.navlink_block__item;
            return (
                <Nav.Link className={linkClass} onClick={() => setCurrentPath(value)}>
                    <NavLink to={value} className={classes.navlink}>
                        {name}
                    </NavLink>
                </Nav.Link>
            );
        });
    };
    useEffect(() => {
        dispatch(getGoodsDatathunk());
        console.log(1);
    }, [dispatch]);
    useEffect(()=>{dispatch(SetCurrentPath(currentPath))},[currentPath])
    const handleInBasket = useCallback((goodobj) => {
        dispatch(GetInBascketCreater(goodobj));
    }, [dispatch]);

    const handleOutBasket = useCallback((goodobj) => {
        dispatch(PullOutBascketCreater(goodobj));
    }, [dispatch]);


    if (!initialized) {
        return <Loader />}else {
    return (
        <div className={classes.ShowCase}>
            <Container>
                <Row key={3}>
                    <Navbar bg="dark" className={classes.nav_block}>
                        <Nav className={classes.navlink_block}>
                            <NavLinks categories={categories} />
                        </Nav>
                    </Navbar>
                </Row>
                <Row>
                    <Col xs={12} className={classes.table_ofgoods}>
                        <Row>
                            <Col xs={12} className={classes.cards_col}>
                                <Row className={classes.cards_block}>
                                    {currentPath.map( m => <Cards key={m.id+m.name} id={m.id} name={m.name} price={m.price} photourl={m.photourl}
                                                                  pieces={m.pieces} category={m.category} GetInBascket={()=>{handleInBasket(m)}}
                                                                  PullOutBascket={ ()=>{handleOutBasket(m)}}/>, [])}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}}

export default ShowCase;

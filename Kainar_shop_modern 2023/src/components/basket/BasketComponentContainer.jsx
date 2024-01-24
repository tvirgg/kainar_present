import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';
import 'react-awesome-slider/dist/styles.css';
import classes from './BasketComponent.module.css';
import Basket_item_component from "./Basket_item";
import { GetInBascketCreater, PullOutBascketCreater } from "../../redux/state/GoodsData_reducer";
import { Basket_selector } from "./BasketComponent-selector";
import {GoBackButton} from "../goodprofile/GoodProfileContainer";

const BasketComponent = () => {
    const dispatch = useDispatch();
    const data = useSelector(Basket_selector);

    const GetInBascket = (goodobj) => {
        dispatch(GetInBascketCreater(goodobj));
    };

    const PullOutBascket = (goodobj) => {
        dispatch(PullOutBascketCreater(goodobj));
    };

    const Basket_item = data.Basket.map(m =>
        <Basket_item_component
            empty={data.Basket.length}
            profile={m}
            key={m.name}
            id={m.id}
            name={m.name}
            price={m.price}
            pieces={m.pieces}
            category={m.category}
            photourl={m.photourl[0]}
            GetInBascket={GetInBascket}
            PullOutBascket={PullOutBascket}
        />
    );
    return (
        <div className={classes.BasketComponent}>
            <Container>
                <Row  className={classes.BasketComponent__label_block}>
                    <GoBackButton/>
                    <h1 className={`${classes.BasketComponent_h1} + ml-100`}>
                        NOW IN THE BASKET
                    </h1>
                </Row>
                {
                    (data.Basket.length === 0) && <Col className={classes.still}>
                        Still Nothing in Basket...
                    </Col>
                }
                <Col md={12}>
                    {Basket_item}
                </Col>
                <Row>
                    {
                        (data.Basket.length !== 0) && <Col className={classes.oreder__btn}>
                            <button>
                                make an order
                            </button>
                        </Col>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default BasketComponent;
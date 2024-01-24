import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import React from "react";
import 'react-awesome-slider/dist/styles.css';
import classes from './BasketComponent.module.css';
import Basket_item_component from "./Basket_item";


const BasketComponent = (props) => {
    let Basket_item = props.data.Basket.map( m => <Basket_item_component empty={props.data.Basket.length} profile={m} key={m.name}  id={m.id} name={m.name} price={m.price} pieces={m.pieces} category={m.category} photourl={m.photourl[0]} GetInBascket={props.GetInBascket} PullOutBascket={props.PullOutBascket}/> );
    return (
        <div className={classes.BasketComponent}>
            <Container>
                <Row>
                    <h1 className={classes.BasketComponent_h1}>
                        NOW IN THE BASKET
                    </h1>
                </Row>
                {
                    (props.data.Basket.length === 0) && <Col className={classes.still}>
                        Still Nothing in Basket...
                    </Col>
                }
                <Col md={12}>
                    {Basket_item}
                </Col>
                <Row>
                    {
                        (props.data.Basket.length !== 0) && <Col className={classes.oreder__btn}>
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
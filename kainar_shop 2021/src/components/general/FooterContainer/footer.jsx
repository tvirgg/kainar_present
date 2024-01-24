import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './footer.module.css';
import Col from "react-bootstrap/Col";
const Footer = (props) => {
    return (
        <div className={classes.footer_block}>
            <Col className={classes.footer_block__title}>
                <h3>
                    RosCyber
                </h3>
                <h4>
                    Supported by multicultural post soviet Union
                </h4>
            </Col>
        </div>
    );
}
export default Footer;
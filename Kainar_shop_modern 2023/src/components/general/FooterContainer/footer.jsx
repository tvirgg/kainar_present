import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './footer.module.css';
const Footer = () => {
    return (
        <div className={classes.footer_block}>
                <h3>
                    KAINAR SHOP
                </h3>
                <h4>
                    Supported by multicultural post soviet Union
                </h4>
        </div>
    );
}
export default Footer;
import React from 'react';
import classes from "../globalmenu.module.css";
import {LOCALES} from "../../i18n";
import classNames from "classnames";
const Cards = (props) => {
        var menu_cards = classNames({
                [classes.good]: true,
                [classes.good_active]: ((LOCALES[props.value.key] === props.language))
        });
    var menu_cards_a = classNames({
        [classes.language_btn]: true,
        [classes.language_btn_active]: ((LOCALES[props.value.key] === props.language))
    });
    return (
            <div className={classes.len_elem}>
                    <div className={menu_cards_a} onClick={()=>{props.Setbasiclenguage(LOCALES[props.value.key])}}>
                            {props.value.native}
                    </div>
                    <div className={menu_cards}>
                        <svg  fill="#66af33" height="15px" viewBox="0 0 100 100">
                            <path d="M41.025641 80.3418803L100 21.3675214 89.7435897 11.1111111 30.7692308 70.0854701 10.2564103 49.5726496 0 59.8290598 20.5128205 80.3418803 30.7692308 90.5982906z"/>
                        </svg>
                    </div>
            </div>
    );
}
export default Cards;

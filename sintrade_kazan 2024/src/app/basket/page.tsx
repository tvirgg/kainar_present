"use client"
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from "@/src/context/CartProvider.client";
import './Basket.scss';
import "../../app/globals.scss";
import "../../app/main.scss";
import Image from "next/image";
import CheckoutForm from "@/src/app/basket/Basket_form/Basket_form";
import {v4 as uuidv4} from "uuid";
import {Product} from "@/src/app/types/landingTypes";
const Basket = () => {
    const { cartState, incrementWeight, decrementWeight, removeFromCart} = useContext(CartContext);
    const [isCartEmpty, setIsCartEmpty] = useState(cartState.items.length === 0);
    const [isClient, setIsClient] = useState(false);
    interface Item {
        tu?: string; // Свойство tu является необязательным и типа string
    }
    function renderText(item: Item) {
        if (item.tu) {
            return item.tu.replace('ТУ', '');
        }
        return '';
    }
    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);
    const handleBackClick = () => {
        if (isClient) {
            window.history.back();
        }
    };
    useEffect(() => {
        setIsCartEmpty(cartState.items.length === 0);
    }, [cartState.items]);
    return (
        <div className="basket">
            <svg onClick={handleBackClick} className="basket_back_main" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.29469 0.705315C7.68422 0.31578 8.31578 0.31578 8.70532 0.705316C9.0946 1.0946 9.09489 1.72568 8.70595 2.11531L3.83 7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9H3.83L8.70595 13.8847C9.09489 14.2743 9.0946 14.9054 8.70532 15.2947C8.31578 15.6842 7.68422 15.6842 7.29468 15.2947L0 8L7.29469 0.705315Z" fill="#A3B3BB"/>
            </svg>
            <div className="customBlur"></div>
            <h1 className="basket_h1">Корзина</h1>
            {isCartEmpty ? (
                <h2>Корзина пока пустая</h2>
            ) : (
                <div>
                    <div className="basket-calculator_row main_row">
                        <div className="basket-calculator_row__item">
                            <p>Наименование</p>
                        </div>
                        <div className="basket-calculator_row__item">
                            <p>ТУ</p>
                        </div>
                        <div className="basket-calculator_row__item">
                            <p>Фасовка</p>
                        </div>
                        <div className="basket-calculator_row__item">
                            <p>Количество</p>
                        </div>
                        <div className="basket-calculator_row__item">
                            <p>Сумма</p>
                        </div>
                    </div>
                    <div>
                        {cartState.items.flatMap((item: Product, itemIndex: number) =>
                            Object.entries(item.weights || {}).map(([weight, count]) => // Добавлено значение по умолчанию {}
                                    count > 0 && (<div key={uuidv4()}>
                                        <div className="basket-calculator_row basket-calculator_row__item__goods" key={`${itemIndex}-${weight}`}>
                                            <div className="basket-calculator_row__item">
                                                <p>{item.name}</p>
                                            </div>
                                            <div className="basket-calculator_row__item">
                                                <p>{renderText(item)}</p>
                                            </div>
                                            <div className="basket-calculator_row__item">
                                                <p>{weight}</p>
                                            </div>
                                            <div className="basket-calculator_row__item amount_item">
                                                <div className="quantity-button">
                                                    <a className="quantity-button_btn" onClick={() => decrementWeight(itemIndex, weight)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <g opacity="0.5">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0013 10.8327H5.0013C4.54297 10.8327 4.16797 10.4577 4.16797 9.99935C4.16797 9.54102 4.54297 9.16602 5.0013 9.16602H15.0013C15.4596 9.16602 15.8346 9.54102 15.8346 9.99935C15.8346 10.4577 15.4596 10.8327 15.0013 10.8327Z" fill="black"/>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <p className="quantity-button_count">{count}</p>
                                                    <a className="quantity-button_btn" onClick={() => incrementWeight(itemIndex, weight)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <g opacity="0.5">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0013 10.8327H10.8346V14.9994C10.8346 15.4577 10.4596 15.8327 10.0013 15.8327C9.54297 15.8327 9.16797 15.4577 9.16797 14.9994V10.8327H5.0013C4.54297 10.8327 4.16797 10.4577 4.16797 9.99935C4.16797 9.54102 4.54297 9.16602 5.0013 9.16602H9.16797V4.99935C9.16797 4.54102 9.54297 4.16602 10.0013 4.16602C10.4596 4.16602 10.8346 4.54102 10.8346 4.99935V9.16602H15.0013C15.4596 9.16602 15.8346 9.54102 15.8346 9.99935C15.8346 10.4577 15.4596 10.8327 15.0013 10.8327Z" fill="black"/>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="basket-calculator_row__item">
                                                <p>-</p>
                                            </div>
                                            <svg onClick={()=>{removeFromCart({name: item.name, wight: weight})}} className="basket-calculator_row__svg" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                                <path d="M9 0C7.35402 0 6.00356 1.35207 6.00356 3H2.88031C2.83586 2.99237 2.7908 2.98877 2.7457 2.98926C2.7094 2.99021 2.67322 2.9938 2.63743 3H0.75978C0.660514 2.99859 0.561959 3.01696 0.469842 3.05402C0.377725 3.09108 0.293884 3.1461 0.223191 3.21588C0.152497 3.28566 0.0963617 3.36882 0.0580464 3.46051C0.019731 3.5522 0 3.65061 0 3.75C0 3.84939 0.019731 3.9478 0.0580464 4.03949C0.0963617 4.13118 0.152497 4.21434 0.223191 4.28412C0.293884 4.3539 0.377725 4.40892 0.469842 4.44598C0.561959 4.48304 0.660514 4.50141 0.75978 4.5H2.0083V17.25C2.0083 18.7599 3.24694 20 4.75504 20H13.245C14.7531 20 15.9917 18.7599 15.9917 17.25V4.5H17.2402C17.3395 4.50141 17.438 4.48304 17.5302 4.44598C17.6223 4.40892 17.7061 4.3539 17.7768 4.28412C17.8475 4.21434 17.9036 4.13118 17.942 4.03949C17.9803 3.9478 18 3.84939 18 3.75C18 3.65061 17.9803 3.5522 17.942 3.46051C17.9036 3.36882 17.8475 3.28566 17.7768 3.21588C17.7061 3.1461 17.6223 3.09108 17.5302 3.05402C17.438 3.01696 17.3395 2.99859 17.2402 3H15.3655C15.2851 2.98677 15.203 2.98677 15.1226 3H11.9964C11.9964 1.35207 10.646 0 9 0ZM9 1.5C9.83608 1.5 10.4982 2.16293 10.4982 3H7.50178C7.50178 2.16293 8.16393 1.5 9 1.5ZM3.50652 4.5H14.4935V17.25C14.4935 17.9491 13.9432 18.5 13.245 18.5H4.75504C4.05675 18.5 3.50652 17.9491 3.50652 17.25V4.5ZM7.24037 6.98926C7.04186 6.99236 6.8527 7.07423 6.71444 7.21686C6.57618 7.3595 6.50012 7.55125 6.50296 7.75V15.25C6.50156 15.3494 6.5199 15.4481 6.55692 15.5403C6.59393 15.6325 6.64889 15.7164 6.71859 15.7872C6.78829 15.858 6.87134 15.9142 6.96293 15.9526C7.05451 15.9909 7.1528 16.0107 7.25208 16.0107C7.35135 16.0107 7.44964 15.9909 7.54122 15.9526C7.63281 15.9142 7.71586 15.858 7.78556 15.7872C7.85526 15.7164 7.91022 15.6325 7.94723 15.5403C7.98425 15.4481 8.00259 15.3494 8.00119 15.25V7.75C8.00262 7.64962 7.98392 7.54997 7.94618 7.45695C7.90844 7.36394 7.85244 7.27946 7.78149 7.20852C7.71054 7.13758 7.62609 7.08161 7.53314 7.04395C7.44019 7.00629 7.34063 6.98769 7.24037 6.98926ZM10.7362 6.98926C10.5377 6.99236 10.3486 7.07423 10.2103 7.21686C10.072 7.3595 9.99597 7.55125 9.99882 7.75V15.25C9.99741 15.3494 10.0158 15.4481 10.0528 15.5403C10.0898 15.6325 10.1447 15.7164 10.2144 15.7872C10.2841 15.858 10.3672 15.9142 10.4588 15.9526C10.5504 15.9909 10.6487 16.0107 10.7479 16.0107C10.8472 16.0107 10.9455 15.9909 11.0371 15.9526C11.1287 15.9142 11.2117 15.858 11.2814 15.7872C11.3511 15.7164 11.4061 15.6325 11.4431 15.5403C11.4801 15.4481 11.4984 15.3494 11.497 15.25V7.75C11.4985 7.64962 11.4798 7.54997 11.442 7.45695C11.4043 7.36394 11.3483 7.27946 11.2773 7.20852C11.2064 7.13758 11.1219 7.08161 11.029 7.04395C10.936 7.00629 10.8365 6.98769 10.7362 6.98926Z" fill="#303948"/>
                                            </svg>
                                        </div>
                                        <div className="mobile_basket_row">
                                            <div className="mobile_basket_row_top">
                                                <div className="img_block_main">
                                                    <Image className="product__intro-image_main" src={item.img_path} alt="logo" width={300} height={100}  />
                                                </div>
                                                <div className="mobile_basket_row_lables">
                                                        <h1 className="mobile_basket_row_lables_h1">{item.name}</h1>
                                                        <span className="product__desc">
                                                            {item.qualification? `Квал: ${item.qualification}` : ''}
                                                        </span>
                                                        <span className="product__desc">
                                                            {item.cas? `Cas: ${item.cas}` : ''}
                                                        </span>
                                                </div>
                                            </div>
                                            <div className="mobile_basket_row_bottom">
                                                <svg onClick={()=>{removeFromCart({name: item.name, wight: weight})}} className="basket-calculator_row__svg mobile_basket_row_bottom__mobile" xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                                    <path d="M9 0C7.35402 0 6.00356 1.35207 6.00356 3H2.88031C2.83586 2.99237 2.7908 2.98877 2.7457 2.98926C2.7094 2.99021 2.67322 2.9938 2.63743 3H0.75978C0.660514 2.99859 0.561959 3.01696 0.469842 3.05402C0.377725 3.09108 0.293884 3.1461 0.223191 3.21588C0.152497 3.28566 0.0963617 3.36882 0.0580464 3.46051C0.019731 3.5522 0 3.65061 0 3.75C0 3.84939 0.019731 3.9478 0.0580464 4.03949C0.0963617 4.13118 0.152497 4.21434 0.223191 4.28412C0.293884 4.3539 0.377725 4.40892 0.469842 4.44598C0.561959 4.48304 0.660514 4.50141 0.75978 4.5H2.0083V17.25C2.0083 18.7599 3.24694 20 4.75504 20H13.245C14.7531 20 15.9917 18.7599 15.9917 17.25V4.5H17.2402C17.3395 4.50141 17.438 4.48304 17.5302 4.44598C17.6223 4.40892 17.7061 4.3539 17.7768 4.28412C17.8475 4.21434 17.9036 4.13118 17.942 4.03949C17.9803 3.9478 18 3.84939 18 3.75C18 3.65061 17.9803 3.5522 17.942 3.46051C17.9036 3.36882 17.8475 3.28566 17.7768 3.21588C17.7061 3.1461 17.6223 3.09108 17.5302 3.05402C17.438 3.01696 17.3395 2.99859 17.2402 3H15.3655C15.2851 2.98677 15.203 2.98677 15.1226 3H11.9964C11.9964 1.35207 10.646 0 9 0ZM9 1.5C9.83608 1.5 10.4982 2.16293 10.4982 3H7.50178C7.50178 2.16293 8.16393 1.5 9 1.5ZM3.50652 4.5H14.4935V17.25C14.4935 17.9491 13.9432 18.5 13.245 18.5H4.75504C4.05675 18.5 3.50652 17.9491 3.50652 17.25V4.5ZM7.24037 6.98926C7.04186 6.99236 6.8527 7.07423 6.71444 7.21686C6.57618 7.3595 6.50012 7.55125 6.50296 7.75V15.25C6.50156 15.3494 6.5199 15.4481 6.55692 15.5403C6.59393 15.6325 6.64889 15.7164 6.71859 15.7872C6.78829 15.858 6.87134 15.9142 6.96293 15.9526C7.05451 15.9909 7.1528 16.0107 7.25208 16.0107C7.35135 16.0107 7.44964 15.9909 7.54122 15.9526C7.63281 15.9142 7.71586 15.858 7.78556 15.7872C7.85526 15.7164 7.91022 15.6325 7.94723 15.5403C7.98425 15.4481 8.00259 15.3494 8.00119 15.25V7.75C8.00262 7.64962 7.98392 7.54997 7.94618 7.45695C7.90844 7.36394 7.85244 7.27946 7.78149 7.20852C7.71054 7.13758 7.62609 7.08161 7.53314 7.04395C7.44019 7.00629 7.34063 6.98769 7.24037 6.98926ZM10.7362 6.98926C10.5377 6.99236 10.3486 7.07423 10.2103 7.21686C10.072 7.3595 9.99597 7.55125 9.99882 7.75V15.25C9.99741 15.3494 10.0158 15.4481 10.0528 15.5403C10.0898 15.6325 10.1447 15.7164 10.2144 15.7872C10.2841 15.858 10.3672 15.9142 10.4588 15.9526C10.5504 15.9909 10.6487 16.0107 10.7479 16.0107C10.8472 16.0107 10.9455 15.9909 11.0371 15.9526C11.1287 15.9142 11.2117 15.858 11.2814 15.7872C11.3511 15.7164 11.4061 15.6325 11.4431 15.5403C11.4801 15.4481 11.4984 15.3494 11.497 15.25V7.75C11.4985 7.64962 11.4798 7.54997 11.442 7.45695C11.4043 7.36394 11.3483 7.27946 11.2773 7.20852C11.2064 7.13758 11.1219 7.08161 11.029 7.04395C10.936 7.00629 10.8365 6.98769 10.7362 6.98926Z" fill="#303948"/>
                                                </svg>
                                                <div className="mobile_basket_row_bottom__right">
                                                <span className="mobile_basket_row_bottom__right__wight">
                                                    фасовка {weight.replace("g", "г")}
                                                </span>
                                                    <div className="quantity-button_basket">
                                                        <a className="quantity-button_btn_basket" onClick={() => decrementWeight(itemIndex, weight)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <g opacity="0.5">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.0013 10.8327H5.0013C4.54297 10.8327 4.16797 10.4577 4.16797 9.99935C4.16797 9.54102 4.54297 9.16602 5.0013 9.16602H15.0013C15.4596 9.16602 15.8346 9.54102 15.8346 9.99935C15.8346 10.4577 15.4596 10.8327 15.0013 10.8327Z" fill="black"/>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                        <p className="quantity-button_count__mobile">{count}</p>
                                                        <a className="quantity-button_btn" onClick={() => incrementWeight(itemIndex, weight)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                                <g opacity="0.5">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.0013 10.8327H10.8346V14.9994C10.8346 15.4577 10.4596 15.8327 10.0013 15.8327C9.54297 15.8327 9.16797 15.4577 9.16797 14.9994V10.8327H5.0013C4.54297 10.8327 4.16797 10.4577 4.16797 9.99935C4.16797 9.54102 4.54297 9.16602 5.0013 9.16602H9.16797V4.99935C9.16797 4.54102 9.54297 4.16602 10.0013 4.16602C10.4596 4.16602 10.8346 4.54102 10.8346 4.99935V9.16602H15.0013C15.4596 9.16602 15.8346 9.54102 15.8346 9.99935C15.8346 10.4577 15.4596 10.8327 15.0013 10.8327Z" fill="black"/>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                            )
                        )}
                    </div>
                </div>
            )}
            {cartState.items.length > 0 && (<CheckoutForm/>)
            }
        </div>
    );
};

export default Basket;



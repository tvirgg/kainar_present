import React, { useContext, useState } from 'react';
import './product_calculator.scss';
import { v4 as uuidv4 } from 'uuid';
import { CartContext} from "@/src/context/CartProvider.client";
import {Product} from "@/src/app/types/landingTypes";
// Тип для продукта

// Тип для состояния счетчиков
type CounterState = {
    [key: string]: number;
};

// Интерфейс для пропсов компонента
interface ProductCalculatorProps {
    product: Product;
}

const ProductCalculator: React.FC<ProductCalculatorProps> = ({ product }) => {
    const defaultWeights = {
        '100g': 0,
        '50g': 0,
        '10g': 0,
        '5g': 0,
        '1g': 0,
    };
    // Использование значения по умолчанию, если weights не определен
    const productWeights = product.weights || defaultWeights;
    const weights = Object.keys(productWeights);
    const [counters, setCounters] = useState<CounterState>(() =>
        weights.reduce((acc, weight) => ({ ...acc, [weight]: 0 }), {})
    );


    const increment = (weight: string) => {
        setCounters(prev => ({ ...prev, [weight]: prev[weight] + 1 }));
    };

    const decrement = (weight: string) => {
        setCounters(prev => ({ ...prev, [weight]: Math.max(prev[weight] - 1, 0) }));
    };

    const { addToCart } = useContext(CartContext);

    const generateReport = () => {
        const totalAmount = Object.values(counters).reduce((sum, value) => sum + value, 0);
        const GotinBsket: Product = {
            id: product.id || 'temp-id',
            name: product.name || 'Название не указано',
            desc: product.desc || 'Описание отсутствует',
            tu: product.tu,
            weights: {
                '100g': counters['100g'] || 0,
                '50g': counters['50g'] || 0,
                '10g': counters['10g'] || 0,
                '5g': counters['5g'] || 0,
                '1g': counters['1g'] || 0,
            },
            common_amount: totalAmount !== undefined ? totalAmount : 0,
            img_path: product.img_path || ''// Добавьте это свойство
        };
        addToCart(GotinBsket);
    };

    return (
          <div className="product-calculator">
            <h1>
              Информация для заказа
            </h1>
            <div className="product-calculator__label">
                <p>
                  Фасовка
                </p>
                <p>
                  Упаковка
                </p>
                <p>
                  Цена
                </p>
            </div>
            {weights.map((weight) => (
                <div key={uuidv4()} className="product-calculator__price_row">
                    <div className="product-calculator__price_row__slow">
                        <p className="product-calculator__price_row__slow_h3">{weight.split('g')[0]} гр</p>
                        <p>баночка п/э</p>
                        <p>по запросу</p>
                    </div>
                  <div className="quantity-button">
                    <a className="quantity-button_btn" onClick={() => decrement(weight)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g opacity="0.5">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0013 10.8327H5.0013C4.54297 10.8327 4.16797 10.4577 4.16797 9.99935C4.16797 9.54102 4.54297 9.16602 5.0013 9.16602H15.0013C15.4596 9.16602 15.8346 9.54102 15.8346 9.99935C15.8346 10.4577 15.4596 10.8327 15.0013 10.8327Z" fill="black"/>
                        </g>
                    </svg></a>
                      <p className="quantity-button_count">{counters[weight]}</p>
                    <a className="quantity-button_btn" onClick={() => increment(weight)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g opacity="0.5">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.0013 10.8327H10.8346V14.9994C10.8346 15.4577 10.4596 15.8327 10.0013 15.8327C9.54297 15.8327 9.16797 15.4577 9.16797 14.9994V10.8327H5.0013C4.54297 10.8327 4.16797 10.4577 4.16797 9.99935C4.16797 9.54102 4.54297 9.16602 5.0013 9.16602H9.16797V4.99935C9.16797 4.54102 9.54297 4.16602 10.0013 4.16602C10.4596 4.16602 10.8346 4.54102 10.8346 4.99935V9.16602H15.0013C15.4596 9.16602 15.8346 9.54102 15.8346 9.99935C15.8346 10.4577 15.4596 10.8327 15.0013 10.8327Z" fill="black"/>
                        </g>
                    </svg></a>
                  </div>
                </div>
            ))}
              <button className="add-to-cart-btn" onClick={() => {
                  generateReport();
                  setCounters(weights.reduce((acc, weight) => ({ ...acc, [weight]: 0 }), {})); // Обнуляем счетчики
              }}>Добавить в корзину</button>
          </div>
  );
};

export default ProductCalculator;

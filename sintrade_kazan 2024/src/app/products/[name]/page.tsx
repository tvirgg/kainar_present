"use client";
import React, {useState, useEffect, useLayoutEffect} from 'react';
import products from '../../../../data/products.json';
import Image from "next/image";
import ProductCalculator from "@/src/app/basket/product_calculator/product_calculator";
import "../../../app/globals.scss";
import "./name.scss";
import "../../../app/main.scss";
import { v4 as uuidv4 } from 'uuid';

interface BoldFirstWordProps {
    text: string;
}

const BoldFirstWord: React.FC<BoldFirstWordProps> = ({ text }) => {
    const parts = text.split(/(:)/);
    return (
        <>
            <strong>{parts[0]}{parts[1]}</strong>{parts.slice(2).join('')}
        </>
    );
};

type ProductType = {
    id: string;
    name: string;
    tu?: string;
    desc?: string;
    synonyms?: string;
    cas?: string;
    qualification?: string;
    formula?: string;
    full_desc?: string;
    add_desc?: string[];
    appearance?: string;
    storage_conditions?: string;
    img_path: string;
    weights?: { [key: string]: number }; // Добавленный тип для weights
    common_amount?: number; // Добавленный тип для common_amount
} | null;

const ProductPage = () => {
    const [product, setProduct] = useState<ProductType>(null);
    const [loading, setLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);
    useLayoutEffect(() => {
        const pathName = window.location.pathname;
        const nameMatch = pathName.match(/\/products\/(.+)/);
        if (nameMatch && nameMatch.length > 1) {
            const decodedName = decodeURIComponent(nameMatch[1]);
            const fetchedProduct = products.find(p => p.name === decodedName);
            setProduct(fetchedProduct || null); // Установка null, если продукт не найден
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="product_content">Загрузка...</div>;
    }

    const handleBackClick = () => {
        if (isClient) {
            window.history.back();
        }
    };
    if (!product) {
        return <div className="product_content">Продукт не найден</div>;
    }
    return (
        <div className="pruduct_page">
            <div className="customBlur"></div>
            <svg onClick={handleBackClick} className="pruduct_page_back" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.29469 0.705315C7.68422 0.31578 8.31578 0.31578 8.70532 0.705316C9.0946 1.0946 9.09489 1.72568 8.70595 2.11531L3.83 7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9H3.83L8.70595 13.8847C9.09489 14.2743 9.0946 14.9054 8.70532 15.2947C8.31578 15.6842 7.68422 15.6842 7.29468 15.2947L0 8L7.29469 0.705315Z" fill="#A3B3BB"/>
            </svg>
            <div className="product_content">
                <div className="product_info">
                    <div className="product_info__top">
                        <h1>{product.name}</h1>
                        <h3>{product.tu}</h3>
                    </div>
                    <div className="product_info__bottom">
                        <div className="img_block">
                            <Image className="product__intro-image" src={product.img_path} alt="logo" width={300} height={200} objectFit="contain"  />
                        </div>
                        <div className="product_info__bottom_row">
                            <ul className="product_info__bottom__addesc_list">
                                {product.add_desc && product.add_desc.map((desc) => {
                                    const parts = desc.split(/(:)/); // Разделение по первому двоеточию
                                    return (
                                        <li key={uuidv4()}>
                                            <strong>{parts[0]}{parts[1]}</strong>{parts.slice(2).join('')}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="product__full_desc">
                                {product.full_desc && (
                                    <p><BoldFirstWord text={`Описание: ${product.full_desc}`} /></p>
                                )}
                                {product.appearance && (
                                    <p><BoldFirstWord text={`Внешний вид: ${product.appearance}`} /></p>
                                )}
                                {product.storage_conditions && (
                                    <p><BoldFirstWord text={`Условия хранения: ${product.storage_conditions}`} /></p>
                                )}
                            </div>
                        </div>
                    </div>
                    <ProductCalculator product={product} />
                </div>
            </div>
        </div>
    );
};
export default ProductPage;
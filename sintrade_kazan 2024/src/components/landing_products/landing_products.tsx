"use client";

import "../both_component/both_products.scss";
import React, {useContext, useEffect, useRef, useState} from "react";
import products from "../../../data/products.json";
import { v4 as uuidv4 } from "uuid";
import ProductList from "../both_component/product_list";
import {Product} from "@/src/app/types/landingTypes";
import {CartContext} from "@/src/context/CartProvider.client";

const Landing_products = () => {
  const [typedProducts, setTypedProducts] = useState<Product[]>(products);
  const {cartState} = useContext(CartContext);
  useEffect(() => {
    const updatedProducts = typedProducts.map((product) => ({
      ...product,
      id: uuidv4(),
    }));

    setTypedProducts(updatedProducts);
  }, []);

  return (
    <section className="landing_products" id={cartState.activeTab === 'services' ? "products" : undefined}>
      <div className="landing__products-content">
        <div className="products">
          <div className="products__title-block">
            <h1 className="products__title">РЕАКТИВЫ СОБСТВЕННОГО ПРОИЗВОДСТВА</h1>
            <button className="products__download-btn black-btn">СКАЧАТЬ ПРАЙС ЛИСТ</button>
          </div>
          <ProductList products={typedProducts} />
        </div>
      </div>
    </section>
  );
};

export default Landing_products;

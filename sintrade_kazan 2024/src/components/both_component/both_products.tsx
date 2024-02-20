"use client";

import React, {useContext, useEffect, useRef, useState} from 'react';
import './both_products.scss';
import products from '../../../data/products.json';
import { v4 as uuidv4 } from 'uuid';
import ProductList from './product_list';
import { Product, ProductListProps } from '@/src/app/types/landingTypes';
import RequestForm from '@/src/components/popupFormEmail/requestForm';
import {CartContext} from "@/src/context/CartProvider.client";

const Both_Component = () => {
  const { cartState, setActiveTab } = useContext(CartContext);
  const toggleTab = (tabName: string) => {
    setActiveTab(tabName);
  };
  const [typedProducts, setTypedProducts] = useState<Product[]>(products);
  const reqForm = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatedProducts = typedProducts.map((product) => ({
      ...product,
      id: uuidv4(),
    }));

    setTypedProducts(updatedProducts);
  }, []);

  function openForm() {
    if (reqForm.current) {
      reqForm.current.classList.remove("request-form--hidden");
      document.body.style.overflow = 'hidden'; // Отключаем прокрутку
    }
  }
  const closeForm = () => {
    if (reqForm.current) {
      reqForm.current.classList.add("request-form--hidden");
      document.body.style.overflow = ''; // Включаем прокрутку обратно
    }
  };
    return (
      <div>
        <section className="landing_products">
        <div className="landing__products-switch">
          <div className="landing__products-switch-wrapper">
            <div
                className={`landing__products-switch-item ${cartState.activeTab === "products" ? "landing__products-switch-item--active" : ""}`}
                onClick={() => toggleTab("products")}
            >
              <span className="landing__products-switch-item-title">продукция</span>
              {cartState.activeTab === "products" && (
                  <div className="products_svg__block">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 15V0C15 8.28427 8.28427 15 0 15H15Z" fill="#BFC5D3" />
                  </svg>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 15V0C15 8.28427 8.28427 15 0 15H15Z" fill="#BFC5D3" />
                  </svg>
                  </div>
              )}
            </div>
            <div
                className={`landing__products-switch-item ${cartState.activeTab === "services" ? "landing__products-switch-item--active services-button" : ""}`}
                onClick={() => toggleTab("services")}
            >
              <span className="landing__products-switch-item-title">услуги</span>
              {cartState.activeTab === "services" && (
                  <div className="products_svg__block">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                      <path  fillRule="evenodd" clipRule="evenodd" d="M15 15V0C15 8.28427 8.28427 15 0 15H15Z" fill="#ffffff" />
                    </svg>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                      <path  fillRule="evenodd" clipRule="evenodd" d="M15 15V0C15 8.28427 8.28427 15 0 15H15Z" fill="#ffffff" />
                    </svg>
                  </div>
              )}
            </div>
          </div>
        </div>
        </section>

        {cartState.activeTab === 'products' && (
            <section className="landing_products" id={cartState.activeTab === 'products' ? "products" : undefined}>
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
        )}

        {cartState.activeTab === 'services' && (
            <section className="services"  id={cartState.activeTab === 'services' ? "services" : undefined}>
              <RequestForm ref={reqForm} closeForm={closeForm} />
              <span className="service-title">услуги</span>
              <div className="service-block">
                <img src="/images/image_services_1.png" alt="Заказной органический синтез" />
                <div className="service-block--text">
                  <h2>ЗАКАЗНОЙ ОРГАНИЧЕСКИЙ СИНТЕЗ</h2>
                  <p>
                    Компания «Синтрейд-Казань», помимо производства основной линейки индикаторов, оказывает такую услугу, как заказной органический синтез. В частности, особой сферой в этой области является разработка методов синтеза интермедиатов
                    (полупродуктов) фармацевтических субстанций. По договоренности с заказчиком может также осуществляться наработка партий этой продукции.
                  </p>
                  <span className="request-btn" onClick={openForm}>
            Оставить заявку
          </span>
                </div>
              </div>

              <div className="service-block service_block__sec">
                <div className="service-block--text">
                  <h2>ОПТИМИЗАЦИЯ ПРОМЫШЛЕННЫХ ПРОЦЕССОВ</h2>
                  <p>
                    У компании имеется в наличии как высоконаучный квалифицированный персонал, так и собственная производственная база. Это: стеклянные и эмалированные реактора, керамическое фильтровальное оборудование и роторные испарители. Есть
                    опыт сотрудничества с НОЦ фармацевтики (НИР) и ОАО ТАТХИМФАРМПРЕПАРАТЫ (лекарственное средство Афобазол).
                  </p>
                  <span className="request-btn" onClick={openForm}>
            Оставить заявку
          </span>
                </div>
                <img src="/images/image_services_2.png" alt="Оптимизация промышленных процессов" />
              </div>

              <div className="service-block">
                <img src="/images/image_services_3.png" alt="Производство фармацевтических интермедиатов" />
                <div className="service-block--text">
                  <h2>ПРОИЗВОДСТВО ФАРМАЦЕВТИЧЕСКИХ ИНТЕРМЕДИАТОВ</h2>
                  <p>
                    У компании имеется в наличии как высоконаучный квалифицированный персонал, так и собственная производственная база. Это: стеклянные и эмалированные реактора, керамическое фильтровальное оборудование и роторные испарители. Есть
                    опыт сотрудничества с НОЦ фармацевтики (НИР) и ОАО ТАТХИМФАРМПРЕПАРАТЫ (лекарственное средство Афобазол).
                  </p>
                  <span className="request-btn" onClick={openForm}>
            Оставить заявку
          </span>
                </div>
              </div>
            </section>
        )}
      </div>
  );
};

export default Both_Component;

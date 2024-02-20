"use client";

import "../both_component/both_products.scss";
import React, {useContext, useEffect, useRef} from "react";
import RequestForm from "../popupFormEmail/requestForm";
import {CartContext} from "@/src/context/CartProvider.client";

const Services = () => {
  const {cartState} = useContext(CartContext);
  const reqForm = useRef<HTMLDivElement>(null);
  // const count = useSelector((state: AppState) => state.counter.value);
  // const dispatch = useDispatch();

  async function sendEmail(subject: string, html: string) {
    try {
      const email = process.env.NEXT_PUBLIC_EMAIL_USER;

      const res = await fetch("https://167.99.72.39:8836/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "parser_telegram@proton.me",
          from: email,
          subject,
          html,
        }),
      });
    } catch (error) {
      console.error("Ошибка при запросе: ", error);
    }
  }

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
    <section className="services"  id={cartState.activeTab === 'products' ? "services" : undefined}>
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
        <img src="/images/image_services_2.png" alt="Оптимизация промышленных процессов" className="service_block__sec__img"/>
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
  );
};

export default Services;

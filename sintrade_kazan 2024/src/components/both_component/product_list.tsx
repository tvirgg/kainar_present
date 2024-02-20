"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import {ProductListProps } from "@/src/app/types/landingTypes";
import "./both_products.scss";
import Image from "next/image";
import Link from "next/link";
import {v4 as uuidv4} from "uuid";
SwiperCore.use([Pagination]);

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const navigationPrevRef = useRef<HTMLImageElement>(null);
  const navigationNextRef = useRef<HTMLImageElement>(null);
    const calculatePages = () => {
        // Определение текущих настроек slidesPerView в зависимости от ширины окна
        let slidesPerView;
        if (window.innerWidth >= 1200) {
            slidesPerView = 4; // Для экранов шире 1200px
        } else if (window.innerWidth >= 768) {
            slidesPerView = 1; // Для экранов шире 768px
        } else {
            slidesPerView = 1; // Для экранов меньше 768px
        }
        // Расчет общего количества продуктов, учитывая количество строк
        let totalProducts =  products.length / 2;
        // Вычисление количества страниц
        const pages = Math.ceil(totalProducts / slidesPerView);
        setNumPages(pages);
    };

// Вызовите calculatePages при изменении размера окна и при изменении продуктов
    useEffect(() => {
        calculatePages();
        window.addEventListener("resize", calculatePages);
        return () => window.removeEventListener("resize", calculatePages);
    }, [products]);

  useEffect(() => {
    const handleResize = () => {
      calculatePages();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiper]);

  useEffect(() => {
    calculatePages();
  }, [swiper, products.length]);

  return (
    <div>
      <Swiper
          // Обработчик события изменения слайда
          onSlideChange={(swiperInstance) => {
            let slidesPerView = 1;
            // Проверка, является ли slidesPerView числом
            if (typeof swiperInstance.params.slidesPerView === "number") {
              slidesPerView = swiperInstance.params.slidesPerView;
            }

            // Установка активной страницы на основе индекса активного слайда и количества слайдов на вид
            setActivePage(Math.floor(swiperInstance.activeIndex / slidesPerView));
          }}
          // Отключение встроенной пагинации Swiper
          pagination={false}
          // Обработчик инициализации Swiper
          onSwiper={(swiper) => {
            setSwiper(swiper); // Установка экземпляра Swiper в состояние
            // Инициализация пользовательских кнопок навигации, если они существуют
            if (navigationPrevRef.current && navigationNextRef.current) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
            calculatePages(); // Пересчет страниц
          }}
          className="products__list"
          // Подключение необходимых модулей Swiper
          modules={[Navigation, Pagination, Grid]}
          // Настройка пользовательской навигации
          navigation={{
            prevEl: navigationPrevRef.current, // Элемент для кнопки "назад"
                nextEl: navigationNextRef.current, // Элемент для кнопки "вперед"
          }}
          spaceBetween={20} // Расстояние между слайдами
          slidesPerGroup={2} // Количество слайдов в группе при переключении
          slidesPerView={4} // Количество видимых слайдов
          grid={{ // Настройки сетки
            rows: 2,
                fill: "row",
          }}
          // Адаптивные настройки
          breakpoints={{
              1200: { // Для экранов шире 1200px
                  slidesPerView: 4,
                  slidesPerGroup: 2, // Adjust according to your needs
                  spaceBetween: 20,
                  grid: {
                      rows: 2,
                      fill: "row",
                  },
              },
              768: { // Для экранов шире 768px
                  slidesPerView: 1,
                  slidesPerGroup: 1, // Ensure moving one slide at a time
                  spaceBetween: 20,
                  grid: {
                      rows: 2,
                      fill: "row",
                  },
              },
              0: { // Для экранов меньше 768px
                  slidesPerView: 1,
                  slidesPerGroup: 1, // Ensure moving one slide at a time
                  spaceBetween: 20,
                  grid: {
                      rows: 2,
                      fill: "row",
                  },
              },
          }}
      >
        {products.map((product) => (
          <SwiperSlide key={uuidv4()} className="product">
              <Link href={`/products/${encodeURIComponent(product.name)}`} key={product.id} className="product__top__swiper">
                <div className="product__top">
                  <Image className="landing__intro-image" src={product.img_path} alt="logo" width={300} height={200} />
                  <span className="product__name">{product.name}</span>
                </div>
                <div className="product__bottom">
                  <div className="product__bottom__left">
                      <span className="product__desc">
                                            {product.qualification? `Квал: ${product.qualification}` : ''}
                      </span>
                      <span className="product__desc">
                                            {product.cas? `Cas: ${product.cas}` : ''}
                      </span>
                    <div className="product__details">
                      Подробнее
                    </div>
                  </div>
                  <div className="product__bottom__right">
                    <button className="product__buy-btn">Купить</button>
                  </div>
                </div>
              </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="landing__products-nav">
        <Image className="landing__products-nav--left" src="/icons/Left.svg" alt="logo" width={300} height={200} ref={navigationPrevRef} />
        <div className="landing__products-nav--status-bar">
          <div className="custom-pagination">
            {Array.from({ length: numPages }).map((_, index) => (
              <div key={uuidv4()} className={`pagination-bullet ${activePage === index ? "active" : ""}`}></div>
            ))}
          </div>
        </div>
        <Image className="landing__products-nav--right" src="/icons/Right.svg" alt="logo" width={300} height={200} ref={navigationNextRef} />
      </div>
    </div>
  );
};

export default ProductList;

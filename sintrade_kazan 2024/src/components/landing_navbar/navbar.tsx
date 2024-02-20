"use client";
import Link from "next/link";
import Image from "next/image";
import "./navbar.scss";
import {useContext, useEffect, useRef} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {CartContext} from "@/src/context/CartProvider.client";
const NavBar = () => {
  const MobileMenu = useRef(null);
  const { cartState } = useContext(CartContext);
  const count = cartState.count; // Получение текущего значения счётчика из контекста корзины
  // useEffect(()=>{
  // console.log(cartState);
  // },[cartState]);

  // useEffect(() => {
  //   function handleResize() {
  //     if (window.innerWidth < 1110) {
  //       MobileMenu.current.classList.remove("navbar__menu--hidden");
  //     } else {
  //       MobileMenu.current.classList.add("navbar__menu--hidden");
  //     }
  //   }

  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
        <header>
          <nav className="navbar">
            <div className="navbar__container">
              <div className="navbar__left">
                <Link href="/" className="navbar__left__logo_container">
                  <Image className="navbar__logo" src="/icons/logo.svg" alt="logo" width={300} height={200} />
                </Link>
                <div className="navbar__list">
                  <Link className="navbar__link" href="/#products">
                    Товары
                  </Link>
                  <Link className="navbar__link" href="/#services">
                    Услуги
                  </Link>
                  <Link className="navbar__link" href="/#contacts">
                    Контакты
                  </Link>
                </div>
              </div>
              <div className="navbar__right">
                <div className="navbar__links navbar__links--left">
                  <div className="navbar__links-item">
                    <Image className="navbar__icon" src="/icons/email.svg" alt="logo" width={15} height={10} />
                    <span className="navbar__text navbar__text--email">syntrade@mail.ru</span>
                  </div>
                  <div className="navbar__links-item">
                    <Image className="navbar__icon" src="/icons/phone.svg" alt="logo" width={15} height={10} />
                    <span className="navbar__text navbar__text--phone">+7 950 318 40 59</span>
                  </div>
                </div>
                <Link href={`/basket`}>
                  <div className="navbar__links navbar__links--right">
                    <Image className="navbar__icon" src="/icons/korzina.svg" alt="logo" width={15} height={10} />
                    <div className="navbar__links-item">
                      <span className="navbar__text navbar__text--cart">Корзина</span>
                      <span className="navbar__text navbar__text--price"> {cartState.count} шт</span>
                    </div>
                  </div>
                  <div className="navbar__menu-mobile navbar__menu--hidden" ref={MobileMenu}>
                    <Image className="" src="/icons/icon_menu.svg" alt="logo" width={24} height={24} />
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </header>
  );
};

export default NavBar;

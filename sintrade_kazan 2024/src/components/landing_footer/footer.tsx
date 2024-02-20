import Link from "next/link";
import Image from "next/image";
import "./footer.scss";
const email = "syntrade@mail.ru";
const subject = "Заказ Синтрейд-Казань";
const body = "Добрый день, я бы хотел заказать";
const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const handleEmailClick = () => {
  window.location.href = emailLink;
};
const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__left">
          <div className="footer__element footer__logo">
            <Image className="footer__logo-img" src="/icons/Footer_logo.svg" alt="logo" width={300} height={200} />
          </div>
          <ul className="footer__element footer__menu">
            <Link className="footer__menu-item" href="/#products">
              ТОВАРЫ
            </Link>
            <Link className="footer__menu-item" href="/#services">
              УСЛУГИ
            </Link>
            <Link className="footer__menu-item" href="/#contacts">
              КОНТАКТЫ
            </Link>
          </ul>
        </div>
        <div className="footer__element footer__contacts">
          <div className="footer__element-block">
            <a className="footer__contacts-item" onClick={handleEmailClick}>
              <Image className="footer__icon" src="/icons/email.svg" alt="logo" width={15} height={10} />
              <span className="footer__text footer__text--email">syntrade@mail.ru</span>
            </a>
            <a className="footer__contacts-item" href="tel:+79503184059">
              <Image className="footer__icon" src="/icons/phone.svg" alt="logo" width={15} height={10} />
              <span className="footer__text footer__text--phone">+7 950 318 40 59</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__company-info">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «СИНТРЕЙД-КАЗАНЬ»</div>
        <div className="footer__copyright">© 2023 - All right reserved</div>
      </div>
    </div>
  </footer>
);

export default Footer;

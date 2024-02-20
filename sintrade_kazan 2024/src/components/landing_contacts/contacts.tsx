import "./contacts.scss";
const email = "syntrade@mail.ru";
const subject = "Заказ Синтрейд-Казань";
const body = "Добрый день, я бы хотел заказать";
const phoneNumber = "1234567890";
const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const handleEmailClick = () => {
  window.location.href = emailLink;
};
const handleWhatsAppClick = (number: string) => {
  const whatsappMessage = "Привет, Пишу вам по поводу своего заказа.";
  const whatsappLink = `https://wa.me/${number}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappLink, '_blank');
};

const Contacts = () => (
  <section className="contacts" id="contacts">
    <h2 className="contacts__title">КОНТАКТЫ</h2>
    <div className="contacts__group">
      <a className="contacts__phone"  href="tel:+79503184059">
        <div className="contacts__group--title-icon">
          <h3 className="contacts__subtitle">ПОЗВОНИТЬ</h3>
          <img className="contacts__group--title-icon-1" src="/icons/phone.svg" alt="" />
        </div>
        <div className="contacts__group--dir">
          <p>Директор Валеева Лия Фаритовна</p>
          <div className="contacts__bottom-arrow contacts__number">
            +7 (950) 318 40 59
          </div>
        </div>
      </a>
      <div className="contacts__whatsapp">
        <div className="contacts__group--title-icon">
          <h3 className="contacts__subtitle">НАПИСАТЬ В WHATSAPP</h3>
          <img className="contacts__group--title-icon-2" src="/icons/whatsapp.png" alt="" />
        </div>
        <p className="contacts__bottom-arrow" onClick={()=>{handleWhatsAppClick("+79297214599")}}>Мифтахов Ринат Нуруллович</p>
        <p className="contacts__bottom-arrow" onClick={()=>{handleWhatsAppClick("+79172727799")}}>Столова Инна Евгеньевна</p>
      </div>
      <div className="contacts__email" onClick={handleEmailClick}>
        <div className="contacts__group--title-icon">
          <h3 className="contacts__subtitle">НАПИСАТЬ НА ПОЧТУ</h3>
          <img className="contacts__group--title-icon-3" src="/icons/emailcontact.svg" alt="" />
        </div>
        <a href="mailto:syntrade@email.ru" className="contacts__bottom-arrow">
          Syntrade@email.ru
        </a>
      </div>
    </div>
    <div className="contacts__addresses">
      <div className="contacts__addresses--block">
        <div className="contacts__address">
          <div className="contacts__address--block">
            <div className="contacts__icon">
              <img src="/icons/Location.svg" alt="" />
            </div>
            <span className="contacts__street">
              г.Казань, ул. Восстания д.100Б
              <br />
              K209 офис 44
            </span>
          </div>
          <span className="contacts__description">Производство</span>
        </div>
        <div className="contacts__address">
          <div className="contacts__address--block">
            <span className="contacts__icon">
              <img src="/icons/Location.svg" alt="" />
            </span>
            <span className="contacts__street">г.Казань, ул. Р.Зорге 33</span>
          </div>
          <span className="contacts__office">Офис, склад</span>
        </div>
      </div>
      <a href="/pr_list.pdf" download="pr_list.pdf" className="contacts__btn-download black-btn">СКАЧАТЬ РЕКВИЗИТЫ</a>
    </div>
  </section>
);

export default Contacts;

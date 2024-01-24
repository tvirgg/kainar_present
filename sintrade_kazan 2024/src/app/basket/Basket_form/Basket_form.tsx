import React, { useState, FormEvent } from 'react';
import './Basket_form.scss';

interface FormData {
    companyName: string;
    fullName: string;
    email: string;
    phone: string;
    comments: string;
}

interface FormErrors {
    companyName: string;
    fullName: string;
    email: string;
    phone: string;
    comments: string;
}

const CheckoutForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        companyName: '',
        fullName: '',
        email: '',
        phone: '',
        comments: ''
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({
        companyName: '',
        fullName: '',
        email: '',
        phone: '',
        comments: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Сразу же очищаем ошибки для поля
        setFormErrors({ ...formErrors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const errors: FormErrors = {
            companyName: '',
            fullName: '',
            email: '',
            phone: '',
            comments: ''
        };

        if (!formData.companyName) {
            errors.companyName = 'Требуется название компании';
        }

        if (!formData.fullName) {
            errors.fullName = 'Требуется ФИО';
        }

        if (!formData.email) {
            errors.email = 'Требуется email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Неверный формат email';
        }

        if (!formData.phone) {
            errors.phone = 'Требуется номер телефона';
        } else if (!/^\+?\d{10,15}$/.test(formData.phone)) {
            errors.phone = 'Неверный формат телефона';
        }

        return errors;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.values(errors).some(error => error !== '')) {
            setFormErrors(errors);
            return;
        }
        console.log('Form Data Submitted: ', formData);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="checkout-form">
                <div className="delivery-options">
                    <div className="checkout-form__item">
                        <h1>Варианты доставки</h1>
                        <h4>Самовывоз</h4>
                        <p className="p_sans p_sans_first">г. Казань, ул. Р.Зорге д.33 (время работы склада — вторник и пятница с 9:00 до 14:00)</p>
                        <p className="p_sans">Доставка транспортной компанией (Экспресс-Авто / Деловые линии)</p>
                    </div>
                    <div className="checkout-form__item checkout-form__item_Sec">
                        <h1>Способ оплаты</h1>
                        <p className="p_sans">Безналичный расчет для юридических лиц</p>
                    </div>
                </div>
                <div className="customer-info checkout-form__item">
                    <div className="customer-info_item">
                        <h1>Информация о заказе</h1>
                        <input type="text" name="companyName" placeholder="Название компании" onChange={handleChange} />
                        {formErrors.companyName && <div className="form-error">{formErrors.companyName}</div>}

                        <input type="text" name="fullName" placeholder="ФИО" onChange={handleChange} />
                        {formErrors.fullName && <div className="form-error">{formErrors.fullName}</div>}

                        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                        {formErrors.email && <div className="form-error">{formErrors.email}</div>}

                        <input type="tel" name="phone" placeholder="Телефон" onChange={handleChange} />
                        {formErrors.phone && <div className="form-error">{formErrors.phone}</div>}
                        <button className="add_req">ПРИКРЕПИТЬ РЕКВИЗИТЫ</button>
                    </div>
                    <div className="customer-info_item">
                        <textarea className="customer-info_item__area" name="comments" placeholder="Комментарии" onChange={handleChange}></textarea>
                        {formErrors.comments && <div className="form-error">{formErrors.comments}</div>}
                        <button className="add_req_sec">ПРИКРЕПИТЬ РЕКВИЗИТЫ</button>
                    </div>
                </div>
            </div>
            <button className="checkout-form_submit" type="submit">
                Заказать
            </button>
        </form>
    );
};

export default CheckoutForm;

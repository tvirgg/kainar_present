import React, {useState, FormEvent, useContext, useRef} from 'react';
import './Basket_form.scss';
import {CartContext} from "@/src/context/CartProvider.client";
import {Product} from "@/src/app/types/landingTypes";
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
    const [commoneror, setcommoneror] = useState<string>('');
    const initialFormData = {
        companyName: '',
        fullName: '',
        email: '',
        phone: '',
        comments: ''
    };
    const [formErrors, setFormErrors] = useState<FormErrors>({
        companyName: '',
        fullName: '',
        email: '',
        phone: '',
        comments: ''
    });

    interface FormData_html {
        companyName: string;
        fullName: string;
        email: string;
        phone: string;
        comments: string;
        items: Product[]; // Добавляем поле items с типом CartItem[]
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Сразу же очищаем ошибки для поля
        setFormErrors({ ...formErrors, [e.target.name]: '' });
    };

    const validateForm = () => {
        const errors: { comments: string; phone: string; companyName: string; fullName: string; email: string } = {
            companyName: '',
            fullName: '',
            email: '',
            phone: '',
            comments: '',
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
    const {cartState} = useContext(CartContext);
    const { clearCart } = useContext(CartContext);
    const [isSubmitting, setIsSubmitting] = useState(false);
    function formatEmailMessageToHTML(data: FormData_html){
        // Инициализация HTML строки для форматированного сообщения
        let formattedMessage = `
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        .header { background-color: #f3f3f3; padding: 20px; text-align: center; }
                        .item { 
                            border: 1px solid #ddd; 
                            margin-bottom: 20px; 
                            padding: 10px; 
                            border-radius: 5px; 
                            box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
                        }
                        .item-header { font-weight: bold; margin-bottom: 10px; }
                        .item-details { margin-left: 10px; }
                        ul { list-style-type: none; padding: 0; }
                        li { margin: 5px 0; }
                        h2, h3 { color: #333; }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h2>Новый заказ от ${data.companyName}</h2>
                    </div>
                    <p><strong>ФИО:</strong> ${data.fullName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Телефон:</strong> ${data.phone}</p>
                    <p><strong>Комментарии:</strong> ${data.comments || "Нет"}</p>
                    <hr>
                    <h3>Корзина заказчика:</h3>
                    `;
                        // Добавление информации о товарах
                        data.items.forEach((item, index) => {
                            formattedMessage += `
                    <div class="item">
                        <div class="item-header">Товар номер - ${index + 1}: ${item.name}</div>
                        <div class="item-details">
                            <p><strong>CAS и TU:</strong> ${item.desc}</p>
                            <p><strong>Фасовки:</strong></p>
                            <ul>`;

                            item.weights && Object.keys(item.weights).forEach(weight => {
                                if (item.weights && item.weights[weight] > 0) {
                                    formattedMessage += `<li>${weight} - <strong>${item.weights[weight]}</strong> шт</li>`;
                                }
                            });

                            formattedMessage += `
                            </ul>
                            <p><strong>Общее количество фасовок в шт:</strong> ${item.common_amount}</p>
                        </div>
                    </div>`;
                        });
                        formattedMessage += `
                </body>
                </html>`;
        return formattedMessage;
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.values(errors).some(error => error !== '')) {
            setFormErrors(errors);
            return;
        }
        let combinedData : { comments: string; phone: string; companyName: string; fullName: string; items: Product[]; email: string } = {
            ...formData,
            items: cartState.items
        };
        const formToSend = new FormData();
        formToSend.append('data', JSON.stringify({
            companyName: formData.companyName,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            comments: formData.comments,
            items: cartState.items,
            message: formatEmailMessageToHTML(combinedData)
        }));

// Добавляем файл
        const fileInput = fileInputRef.current;
        if (fileInput && fileInput.files && fileInput.files[0]) {
            formToSend.append('file', fileInput.files[0]);
        }

// Выводим все данные из FormData в консоль
//         for (let [key, value] of formToSend.entries()) {
//             console.log(key, value);
//         }
        try {
            setIsSubmitting(true); // Блокировка кнопки перед отправкой формы
            const response = await fetch('/api/sendemail', {
                method: 'POST',
                body: formToSend, // FormData будет автоматически обработан как multipart/form-data
            });

            if (response.status === 200) {
                setIsSubmitting(false);
                setFormData(initialFormData);
                clearCart();
                setcommoneror('');
            } else {
                setIsSubmitting(false);
                throw new Error('Ошибка при отправке формы');
            }
        } catch (error) {
            setcommoneror('Произошла ошибка при отправке формы');
        }
    };
    // Создаем ссылку на input элемент
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Функция для открытия диалога выбора файла
    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };

    // Функция для обработки выбранного файла
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            return;
        }

        // Ограничение размера файла 25MB
        const maxFileSize = 25 * 1024 * 1024; // 25 MB в байтах
        if (file.size > maxFileSize) {
            // Выводим сообщение об ошибке или обрабатываем превышение размера файла
            alert('Файл слишком большой. Размер файла не должен превышать 25MB.');
            return;
        }
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
                        <div>
                            <button onClick={handleAttachClick} type="button" className="add_req">ПРИКРЕПИТЬ РЕКВИЗИТЫ</button>
                            <input
                                className="add_req_sec_input"
                                type="file"
                                accept="application/pdf"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className="customer-info_item">
                        <textarea className="customer-info_item__area customer-info_item__area_basket" name="comments" placeholder="Комментарии" onChange={handleChange}></textarea>
                        {formErrors.comments && <div className="form-error">{formErrors.comments}</div>}
                    </div>
                </div>
            </div>
            <button className="checkout-form_submit" type="submit" disabled={isSubmitting}>
                Заказать
            </button>
            {commoneror && <div className="form-error">{commoneror}</div>}
        </form>
    );
};

export default CheckoutForm;
"use client";
import "./requestForm.scss";
import React, {
    forwardRef,
    useState,
    FormEvent,
    RefAttributes
} from "react";

interface RequestFormProps extends RefAttributes<HTMLDivElement> {
    closeForm: () => void;
    // Другие пропсы, если они есть
}
const RequestForm = forwardRef<HTMLDivElement, RequestFormProps>((props, ref) => {

    interface FormData {
        fullName: string;
        email: string;
        phone: string;
        comments: string;
    }

    interface FormErrors {
        fullName: string;
        email: string;
        phone: string;
        comments: string;
    }

        const [formData, setFormData] = useState<FormData>({
            fullName: '',
            email: '',
            phone: '',
            comments: ''
        });

        const [formErrors, setFormErrors] = useState<FormErrors>({
            fullName: '',
            email: '',
            phone: '',
            comments: ''
        });
    const [commoneror, setcommoneror] = useState<string>('');
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            // Сразу же очищаем ошибки для поля
            setFormErrors({ ...formErrors, [e.target.name]: '' });
        };

        const validateForm = () => {
            const errors: FormErrors = {
                fullName: '',
                email: '',
                phone: '',
                comments: ''
            };

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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.values(errors).some(error => error !== '')) {
            setFormErrors(errors);
            return;
        }
        let data = {
            companyName: formData.fullName,
            email: formData.email,
            message: formData
        }
        async function sendEmail(data: any) {
            const response = await fetch('/api/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (response.status === 200) {
                setcommoneror('');
                props.closeForm();
            } else if (response.status === 500) {
                setcommoneror('Произошла ошибка при отправке запроса');
                console.error('Произошла ошибка при отправке запроса'); // Если сервер вернул статус 500, выводим сообщение об ошибке
            }
        }
        sendEmail(data);
    };
        interface ChildProps {
            closeForm: () => void;
        }
    return (
      <div className="form_back request-form--hidden"  ref={ref}>
          <form onSubmit={handleSubmit} className="request-form">
              <div className="request-form__header">
                  <button className="request-form__close-button" onClick={props.closeForm}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115Z" fill="#424B5A"/>
                          <mask id="mask0_1359_63515" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="14">
                              <path fillRule="evenodd" clipRule="evenodd" d="M18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115Z" fill="white"/>
                          </mask>
                          <g mask="url(#mask0_1359_63515)">
                              <rect width="24" height="24" fill="#424B5A"/>
                          </g>
                      </svg>
                  </button>
              </div>
              <div className="request-form__title">Оставьте заявку</div>
                  <div className="customer-info checkout-form__item">
                      <div className="customer-info_item">
                          <input type="text" name="fullName" placeholder="ФИО" onChange={handleChange} />
                          {formErrors.fullName && <div className="form-error">{formErrors.fullName}</div>}

                          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                          {formErrors.email && <div className="form-error">{formErrors.email}</div>}

                          <input type="tel" name="phone" placeholder="Телефон" onChange={handleChange} />
                          {formErrors.phone && <div className="form-error">{formErrors.phone}</div>}
                      </div>
                      <div className="customer-info_item">
                          <textarea className="customer-info_item__area" name="comments" placeholder="Комментарии" onChange={handleChange}></textarea>
                          {formErrors.comments && <div className="form-error">{formErrors.comments}</div>}
                      </div>
                  </div>
                  <div className="btn_block">
                      <button type="submit" className="request-form__submit-button">
                          Отправить
                      </button>
                  </div>
              {commoneror && <div className="form-error">{commoneror}</div>}
          </form>
      </div>
  );
});

export default RequestForm;

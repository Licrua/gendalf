import { useRef, useState } from 'react';
import './Footer.css';
import invalid from '/images/cart.svg';

const Footer = () => {
  const [selectedJobType, setSelectedJobType] = useState('office');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    position: false,
  });

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    position: false,
  });

  const validateField = (name: string, value: string) => {
    if (name === 'phone') {
      return /^\d{1,11}$/.test(value);
    }
    if (name === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    return value.trim() !== '';
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTouched((prev) => ({ ...prev, [name]: true }));

    setErrors((prev) => ({ ...prev, [name]: !validateField(name, value) }));
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedJobType(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Форма отправлена!', { selectedJobType });
    alert('Форма успешно отправлена!');
    formRef.current?.reset();
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Выбран файл:', file.name);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper-second">
          <h2 className="footer__title">Записаться на собеседование</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="footer__form" id="sobes">
            <div className="footer__inputs_wrapper">
              {['name', 'phone', 'email', 'position'].map((field) => (
                <div key={field} className="input-wrapper">
                  <input
                    className={`footer__input ${touched[field as keyof typeof touched] && errors[field as keyof typeof errors] ? 'invalid' : ''} ${touched[field as keyof typeof touched] && !errors[field as keyof typeof errors] ? 'valid' : ''}`}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    placeholder={
                      field === 'name'
                        ? 'Как к вам обращаться?'
                        : field === 'phone'
                          ? 'Телефон'
                          : field === 'email'
                            ? 'Email'
                            : 'Желаемая должность'
                    }
                    inputMode={field === 'phone' ? 'numeric' : 'text'}
                    onBlur={handleBlur}
                  />
                  {touched[field as keyof typeof touched] &&
                    (errors[field as keyof typeof errors] ? (
                      <span className="error-icon">
                        <img style={{ padding: '3px' }} src="/images/invalid.svg" alt="invalid" />
                      </span>
                    ) : (
                      <span className="valid-icon">✔</span>
                    ))}
                </div>
              ))}
            </div>

            <h3 className="footer__title-radio">Выберите категорию занятости</h3>
            <div className="footer__group-radio">
              {['office', 'stage', 'remote'].map((type) => (
                <div key={type} className="footer__radio">
                  <input
                    type="radio"
                    id={type}
                    name="type-job"
                    value={type}
                    checked={selectedJobType === type}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor={type}>
                    {type === 'office'
                      ? 'Работа в офисе'
                      : type === 'stage'
                        ? 'Стажировка'
                        : 'Удаленная работа'}
                  </label>
                </div>
              ))}
            </div>

            <textarea
              className="footer__input-text"
              rows={5}
              cols={33}
              placeholder="Ваши вопросы"
            ></textarea>

            <div className="footer__wrapper-button">
              <button type="button" onClick={handleButtonClick} className="footer__button">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                Прикрепить резюме
                <img src={'/images/footer__vector.svg'} alt="Скрепка" />
              </button>
              <button type="submit" className="footer__button">
                Записаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

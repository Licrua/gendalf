import { useRef, useState } from 'react';
import './Footer.css';

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
    if (fileInputRef.current) {
      fileInputRef.current?.click();
    }
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
              <div className="input-wrapper">
                <input
                  className={`footer__input ${errors.name ? 'invalid' : ''} ${!errors.name && 'valid'}`}
                  type="text"
                  name="name"
                  placeholder="Как к вам обращаться?"
                  onBlur={handleBlur}
                />
                {errors.name ? (
                  <span className="error-icon">✖</span>
                ) : (
                  <span className="valid-icon">✔</span>
                )}
              </div>

              <div className="input-wrapper">
                <input
                  className={`footer__input ${errors.phone ? 'invalid' : ''} ${!errors.phone && 'valid'}`}
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  inputMode="numeric"
                  pattern="[0-9]{1,11}"
                  onBlur={handleBlur}
                />
                {errors.phone ? (
                  <span className="error-icon">✖</span>
                ) : (
                  <span className="valid-icon">✔</span>
                )}
              </div>

              <div className="input-wrapper">
                <input
                  className={`footer__input ${errors.email ? 'invalid' : ''} ${!errors.email && 'valid'}`}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onBlur={handleBlur}
                />
                {errors.email ? (
                  <span className="error-icon">✖</span>
                ) : (
                  <span className="valid-icon">✔</span>
                )}
              </div>

              <div className="input-wrapper">
                <input
                  className={`footer__input ${errors.position ? 'invalid' : ''} ${!errors.position && 'valid'}`}
                  type="text"
                  name="position"
                  placeholder="Желаемая должность"
                  onBlur={handleBlur}
                />
                {errors.position ? (
                  <span className="error-icon">✖</span>
                ) : (
                  <span className="valid-icon">✔</span>
                )}
              </div>
            </div>

            <h3 className="footer__title-radio">Выберите категорию занятости</h3>
            <div className="footer__group-radio">
              <div className="footer__radio">
                <input
                  type="radio"
                  id="office"
                  name="type-job"
                  value="office"
                  checked={selectedJobType === 'office'}
                  onChange={handleRadioChange}
                />
                <label htmlFor="office">Работа в офисе</label>
              </div>
              <div className="footer__radio">
                <input
                  type="radio"
                  id="stage"
                  name="type-job"
                  value="stage"
                  checked={selectedJobType === 'stage'}
                  onChange={handleRadioChange}
                />
                <label htmlFor="stage">Стажировка</label>
              </div>
              <div className="footer__radio">
                <input
                  type="radio"
                  id="remote"
                  name="type-job"
                  value="remote"
                  checked={selectedJobType === 'remote'}
                  onChange={handleRadioChange}
                />
                <label htmlFor="remote">Удаленная работа</label>
              </div>
            </div>

            <textarea
              className="footer__input-text"
              rows={5}
              cols={33}
              placeholder="Ваши вопросы "
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

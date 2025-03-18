import textContent from '../../data/textContent';
import BaseText from './BaseText';
import BaseVideo from './BaseVideo';
import './Base.css';

export const Base = () => {
  return (
    <section className="base">
      <div className="base__wrapper">
        <h2 className="base__title">Инфраструктура для твоего развития и роста</h2>
        <div className="base__wrapper-second">
          <BaseText paragraphs={textContent} />
          <BaseVideo src="https://www.youtube.com/embed/tgbNymZ7vqY" />
        </div>
      </div>
    </section>
  );
};

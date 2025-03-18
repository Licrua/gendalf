import textContent from '../../data/descriptionText';
import DescriptionActions from './DescriptionActions';
import DescriptionText from './DescriptionText';
import './Description.css';

export const Description = () => {
  return (
    <section className="description">
      <div className="description__wrapper">
        <h2 className="description__title">О том, чем мы занимаемся</h2>
        <DescriptionText paragraphs={textContent} />
        <DescriptionActions />
      </div>
    </section>
  );
};

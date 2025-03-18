import { arrValue } from '../../data/arrValue';
import './Value.css';

const Value = () => {
  const createItem = () => {
    return arrValue.map((el) => (
      <li className="value__item" key={el.id}>
        <img src={el.img} alt={el.title} className="value__img" />
        <h3 className="value__subtitle">{el.title}</h3>
        <p className="value__description">{el.text}</p>
      </li>
    ));
  };

  return (
    <section className="value">
      <div className="value__wrapper">
        <h2 className="value__title">Наши ценности скажут о нас больше:</h2>
        <ul className="value__list">{createItem()}</ul>
      </div>
    </section>
  );
};

export default Value;

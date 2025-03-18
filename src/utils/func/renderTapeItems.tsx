import { ReactElement } from 'react';
import { arrTape } from '../../data/arrTape';
import './Tape.css';

interface TapeItem {
  id: number;
  img: string;
  alt: string;
  title: string;
}

export const renderTapeItems = (start: number = 0, end: number = 4): ReactElement[] => {
  return arrTape.slice(start, end).map((item: TapeItem) => (
    <li className="tape__card" key={item.id}>
      <div>
        <img className="tape__img" src={item.img} alt={item.alt} />
        <p className="tape__title-card">{item.title}</p>
      </div>
      <a href="#" className="tape__link">
        Перейти к статье
      </a>
    </li>
  ));
};

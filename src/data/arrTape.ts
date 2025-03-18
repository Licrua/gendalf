import img1 from '../assets/images/tape1.png';
import img2 from '../assets/images/tape2.png';
import img3 from '../assets/images/tape3.png';
import img4 from '../assets/images/tape4.png';

interface TapeItem {
  id: number;
  img: string;
  alt: string;
  title: string;
}

export const arrTape: TapeItem[] = [
  {
    id: 1,
    img: img1,
    alt: 'Экономика',
    title: 'Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года',
  },
  {
    id: 2,
    img: img2,
    alt: 'Наушники',
    title: 'Изменения 2022 года',
  },
  {
    id: 3,
    img: img3,
    alt: 'Разработчик',
    title: 'Почему стоит работать программистом в 2022 году',
  },
  {
    id: 4,
    img: img4,
    alt: 'Пользователь ПК',
    title:
      'Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы',
  },
  {
    id: 5,
    img: img1,
    alt: 'Экономика',
    title: 'Экономим на бумаге и угадываем фильмы: дайджест видео марта 2023 года',
  },
  {
    id: 6,
    img: img2,
    alt: 'Наушники',
    title: 'Изменения 2023 года',
  },
];

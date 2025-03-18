import AnswerList from './AnswerList';
import './Answer.css';

export const Answer = () => {
  return (
    <section className="answer">
      <div className="answer__wrapper">
        <h2 className="answer__title">Ответы на вопросы</h2>
        <AnswerList />
      </div>
    </section>
  );
};

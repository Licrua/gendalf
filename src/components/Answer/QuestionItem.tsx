const QuestionItem = ({ text, isActive }: { text: string; isActive?: boolean }) => (
  <li className={`answer__item-question ${isActive ? 'answer__item-question_active' : ''}`}>
    <a className="answer__link">{text}</a>
  </li>
);

export default QuestionItem;

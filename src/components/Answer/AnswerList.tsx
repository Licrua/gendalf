import AnswerDetails from './AnswerDetails';
import QuestionItem from './QuestionItem';

const AnswerList = () => (
  <ul className="answer__list-question">
    <QuestionItem text="На что нужно обратить внимание на собеседовании?" isActive />
    <AnswerDetails />
    <QuestionItem text="Как правильно составить резюме?" />
    <QuestionItem text="Возможно ли устроиться без опыта?" />
    <QuestionItem text="Ошибки на собеседовании. Чего нужно избегать?" />
  </ul>
);
export default AnswerList
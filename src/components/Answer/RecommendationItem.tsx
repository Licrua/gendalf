const RecommendationItem = ({ title, description }: { title: string; description: string }) => (
  <li className="answer__item-recommendation">
    <span className="answer__span">{title}</span>
    <span> {description}</span>
  </li>
);
export default RecommendationItem;

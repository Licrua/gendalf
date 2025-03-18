const DescriptionText = ({ paragraphs }: { paragraphs: string[] }) => (
  <div className="description__text-container">
    {paragraphs.map((text, index) => (
      <p key={index} className="description__text">
        {text}
      </p>
    ))}
  </div>
);
export default DescriptionText;

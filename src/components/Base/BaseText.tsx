
const BaseText = ({ paragraphs }: { paragraphs: string[] }) => (
	<div className="base__textContainer">
	  {paragraphs.map((text, index) => (
		<p key={index} className="base__text">
		  {text}
		</p>
	  ))}
	</div>
  );
export default BaseText  
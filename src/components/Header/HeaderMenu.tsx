export const HeaderMenu = () => (
	<ul className="list">
	  {["Профориентация", "Выбрать вакансию", "Карьера в ГЭНДАЛЬФ", "Стажерство", "Отзывы"].map(
		(item, index) => (
		  <li key={index} className="list__item">
			<a href="#" className="list__link">
			  {item}
			</a>
		  </li>
		)
	  )}
	</ul>
  );
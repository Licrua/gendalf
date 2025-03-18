	import { useState, useEffect, useRef } from 'react';
	import './Tape.css';
	import { arrTape } from '../../data/arrTape';

	export const Tape = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [startTape, setStartTape] = useState(0);
	const [endTape, setEndTape] = useState(4);

	const tapeCardsRef = useRef<HTMLUListElement | null>(null);

	const renderTapeItems = (start = 0, end = 4) => {
		return arrTape.slice(start, end).map((item) => (
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

	const updateTapeRange = () => {
		if (windowWidth >= 1180) {
		setStartTape(0);
		setEndTape(4);
		} else if (900 < windowWidth && windowWidth < 1180) {
		setStartTape(0);
		setEndTape(3);
		} else if (615 < windowWidth && windowWidth <= 900) {
		setStartTape(0);
		setEndTape(2);
		} else if (windowWidth <= 615) {
		setStartTape(0);
		setEndTape(1);
		}
	};

	const handleLeftArrowClick = () => {
		if (startTape > 0) {
		setStartTape(startTape - 1);
		setEndTape(endTape - 1);
		}
	};

	const handleRightArrowClick = () => {
		if (endTape < arrTape.length) {
		setStartTape(startTape + 1);
		setEndTape(endTape + 1);
		}
	};

	useEffect(() => {
		updateTapeRange();
		window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

		return () => {
		window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
		};
	}, [windowWidth]);

	return (
		<section className="tape">
		<div className="tape__wrapper">
			<h2 className="tape__title">Живая лента</h2>
			<div className="tape__wrapper-second">
			<button onClick={handleLeftArrowClick} className="tape__button tape__button-first">
				<span className="material-symbols-outlined">arrow_back_ios</span>
			</button>
			<ul ref={tapeCardsRef} className="tape__wrapper-cards">
				{renderTapeItems(startTape, endTape)}
			</ul>
			<button onClick={handleRightArrowClick} className="tape__button tape__button-second">
				<span className="material-symbols-outlined">arrow_forward_ios</span>
			</button>
			</div>
		</div>
		</section>
	);
	};

	export default Tape;

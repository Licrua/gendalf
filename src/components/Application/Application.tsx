import './Application.css'

export const Application = () => {
	return (
    <section className="application">
      <div className="application__wrapper">
        <h2 className="application__title">
          Ты студент и хочешь устроиться на практику?
        </h2>
        <button className="application__button" type="button">
          <a href="#sobes" className="application__link">
            Оставить заявку
          </a>
        </button>
      </div>
    </section>
	)
} 


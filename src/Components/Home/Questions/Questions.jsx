import React from "react";
import "./Questions.scss";

const Questions = () => {
  return (
    <section className="site-container questions">
      <h2 className="questions__title mb-5">Вопросы и ответы</h2>
      <div className="accordion questions__accordion" id="accordionExample">
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Что делать, если я только что сделал оплату?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              И чтобы каждый ушел из магазина довольным и со множеством покупок,
              его можно к этим самым покупкам ненавязчиво подтолкнуть.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Получу ли я скидку, если я постоянный клиент?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              И чтобы каждый ушел из магазина довольным и со множеством покупок,
              его можно к этим самым покупкам ненавязчиво подтолкнуть.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Какими марками платежных карт я могу платить при выборе оплаты?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              И чтобы каждый ушел из магазина довольным и со множеством покупок,
              его можно к этим самым покупкам ненавязчиво подтолкнуть.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-3">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Как настроить способ оплаты заказов через Интернет?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              И чтобы каждый ушел из магазина довольным и со множеством покупок,
              его можно к этим самым покупкам ненавязчиво подтолкнуть.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;

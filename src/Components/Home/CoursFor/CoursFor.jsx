import React from "react";
import "./CoursFor.scss";

const CoursFor = () => {
  return (
    <section className="cours-for py-5">
      <div className="cours-for__inner site-container">
        <h2 className="pb-4">
          КОМУ ПОДОЙДЕТ <span>КУРС?</span>
        </h2>
        <ul className="row list-unstyled p-0 cours-for__list g-5">
          <li className="col-4 d-flex align-items-center gap-4">
            <h3>01</h3>
            <div>
              <h4>Новичкам</h4>
              <p>
                Которые хотят зарабатывать на мобильной съемке для блогеров,
                экспертов, предпринимателей...
              </p>
            </div>
          </li>
          <li className="col-4 d-flex align-items-center gap-4">
            <h3>03</h3>
            <div>
              <h4>Блогерам</h4>
              <p>
                Которые хотят высоких охватов, реакций в директ, комментариев
                под постами и рекламных...
              </p>
            </div>
          </li>
          <li className="col-4 d-flex align-items-center gap-4">
            <h3>05</h3>
            <div>
              <h4>Тиктокерам</h4>
              <p>
                Которые хотят видеть свои ролики в рекомендациях с миллионами
                просмотров...
              </p>
            </div>
          </li>
          <li className="col-4 d-flex align-items-center gap-4">
            <h3 className="color">02</h3>
            <div>
              <h4>Опытным Контент-Мейкерам</h4>
              <p>
                Которые хотят зарабатывать на мобильной съемке для блогеров,
                экспертов, предпринимателей...
              </p>
            </div>
          </li>
          <li className="col-4 d-flex align-items-center gap-4">
            <h3 className="color">04</h3>
            <div>
              <h4>Предпринимателям</h4>
              <p>
                Которые хотят зарабатывать на мобильной съемке для блогеров,
                экспертов, предпринимателей...
              </p>
            </div>
          </li>
          <li className="col-4 d-flex align-items-center gap-4">
            <h3 className="color">06</h3>
            <div>
              <h4>Экспертам</h4>
              <p>
                Которые хотят иметь дополнительный источник дохода и продавать
                свои товары и услуги...
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CoursFor;

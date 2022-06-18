import React from "react";
import "./OnlineCours.scss";

const OnlineCours = () => {
  return (
    <section className="py-5 site-container online-cours mt-5">
      <h2 className="online-cours__title mb-5">Наши онлайн курсы</h2>
      <p className="online-cours__desc mb-5">
        В рамках данного проекта вам доступны курсы по развитию
        профессиональных, цифровых и гибких навыков. Вы можете смотреть
        видеоуроки наших курсов в любое удобное для вас время и без ограничения
        по количеству!
      </p>
      <ul className="online-cours__list list-unstyled p-0 row justify-content-between">
        <li className="col-4 p-5 d-flex flex-column">
          <h3 className="mb-4">Soft skills</h3>
          <p className="mb-4">
            Гибкие навыки — это умение общаться, нестандартно мыслить, работать
            в команде. Люди с развитыми гибкими навыками востребованы в любой
            отрасли.
          </p>
          <button className="btn ">&#10144; Перейти</button>
        </li>
        <li className="col-4 p-5 d-flex flex-column">
          <h3 className="mb-4">Hard skills</h3>
          <p className="mb-4">
            Профессиональные навыки — это набор практических знаний, которые
            связаны с основной трудовой деятельностью. Эти навыки — основа для
            успешной карьеры.
          </p>
          <button className="btn ">&#10144; Перейти</button>
        </li>
        <li className="col-4 p-5 d-flex flex-column">
          <h3 className="mb-4">Digital skills</h3>
          <p className="mb-4">
            Цифровые навыки — это умение владеть новыми программными продуктами
            и информационными технологиями, залог успеха на рынке труда.
          </p>
          <button className="btn mt-auto">&#10144; Перейти</button>
        </li>
      </ul>
    </section>
  );
};

export default OnlineCours;

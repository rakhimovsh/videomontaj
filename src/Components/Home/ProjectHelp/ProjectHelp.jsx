import React from "react";
import "./ProjectHelp.scss";
import img1 from "../../../Assets/Images/help1.png";
import img2 from "../../../Assets/Images/help2.png";
import img3 from "../../../Assets/Images/help3.png";
import img4 from "../../../Assets/Images/help4.png";
import img5 from "../../../Assets/Images/help5.png";
import img6 from "../../../Assets/Images/help6.png";

const ProjectHelp = () => {
  return (
    <section className="site-container project-help py-5">
      <h2 className="mb-5">Проект поможет вам</h2>
      <ul className="project-help__list list-unstyled row justify-content-between g-5">
        <li className="d-flex align-items-center col-4">
          <img className="rounded-circle me-4" src={img1} alt="" />
          <h4>Изучить цифровые технологии</h4>
        </li>
        <li className="d-flex align-items-center col-4">
          <img className="rounded-circle me-4" src={img2} alt="" />
          <h4>Поменять свою профессию</h4>
        </li>
        <li className="d-flex align-items-center col-4">
          <img className="rounded-circle me-4" src={img3} alt="" />
          <h4>Начать работать удаленно</h4>
        </li>
        <li className="d-flex align-items-center col-4">
          <img className="rounded-circle me-4" src={img4} alt="" />
          <h4>Найти любимую работу</h4>
        </li>
        <li className="d-flex align-items-center col-4">
          <img className="rounded-circle me-4" src={img5} alt="" />
          <h4>Стать востребованным специалистом</h4>
        </li>
        <li className="d-flex align-items-center col-4">
          <img className="rounded-circle me-4" src={img6} alt="" />
          <h4>Не потерять текущую работу</h4>
        </li>
      </ul>
    </section>
  );
};

export default ProjectHelp;

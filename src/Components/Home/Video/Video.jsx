import React from "react";
import "./Video.scss";
import video1 from "../../../Assets/Images/videoSection1.png";
import video2 from "../../../Assets/Images/videoSection2.png";
import video3 from "../../../Assets/Images/videoSection3.png";

const Video = () => {
  return (
    <section className="video site-container py-5">
      <h2 className="video__title mb-5">
        Как научиться снимать <span>крутые видео</span> на телефон и
        зарабатывать на этом?
      </h2>
      <ul className="video__list list-unstyled row p-0 justify-content-between">
        <li className="video__item col-4 d-flex flex-column gap-5">
          <div>
            <h3 className="mb-4">1.Онлайн обучение</h3>
            <p>
              Откройте для себя преимущества изучения видео-курса с помощью
              нащего онлайн курса. Вы можете отслеживать свой прогресс с помощью
              сдачи официальных эгзаменов{" "}
            </p>
          </div>
          <img src={video1} alt="" />
        </li>
        <li className="video__item col-4 d-flex flex-column-reverse gap-5">
          <div>
            <h3 className="mb-4">2. Оффлайн уроки</h3>
            <p>
              В нащем компании ежедневно проводятся занятия в видео монтажной
              клубе,благодарья этому курсе вы можете узнать о секратах монтажа и
              научиться снимать видео
            </p>
          </div>
          <img src={video2} alt="" />
        </li>
        <li className="video__item col-4 d-flex flex-column gap-5">
          <div>
            <h3 className="mb-4">3. Образование за рубежом</h3>
            <p>
              Планируете обучение за рубежом? Разумный шаг, ведь это откроет
              перед вами безграничные перспективы и поможет приобрести
              действительно уникальный опыт.
            </p>
          </div>
          <img src={video3} alt="" />
        </li>
      </ul>
    </section>
  );
};

export default Video;

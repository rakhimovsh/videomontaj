import Button from "../../General/Button/Button";
import React from "react";
import "./HeroHome.scss";
import HeroImage from "../HeroImage/HeroImage";

const HeroHome = () => {
  return (
    <section className="site-container hero-home d-flex align-items-center">
      <div className="hero-home__left">
        <h1 className="hero-home__title">
          Мы не просто <span className="hero-home__title--span">школа,</span>{" "}
          тут ты попадаешь в настоящую семью
        </h1>
        <p className="hero-home__desc mb-4 text-secondary">
          Новая школа монтажа — это когда вы делаете один ролик, а люди сходят с
          ума и просят еще 10
        </p>
        <Button border={true} color="AbyssalAnchorfishBlue">
          Принять участия
        </Button>
      </div>
      <HeroImage />
    </section>
  );
};

export default HeroHome;

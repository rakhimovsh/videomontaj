import React from "react";
import "./HeroImage.scss";
import heroImg1 from "../../../Assets/Images/homehero-1.png";
import heroImg2 from "../../../Assets/Images/homehero-2.png";
import heroImg3 from "../../../Assets/Images/homehero-3.png";

const HeroImage = () => {
  let [className, setClassName] = React.useState(false);

  const onMouseEnter = () => {
    setClassName(true);
  };

  const onMouseLeave = () => {
    setClassName(false);
  };

  return (
    <div className="homehero__imgCollection d-flex justify-content-between pt-5">
      <img
        className={`homehero__img`}
        src={heroImg1}
        alt=""
        width={className ? 150 : 460}
        height={600}
      />
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="homehero__img"
        src={heroImg2}
        alt=""
        width={460}
        height={600}
      />
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="homehero__img"
        src={heroImg3}
        alt=""
        width={460}
        height={600}
      />
    </div>
  );
};

export default HeroImage;

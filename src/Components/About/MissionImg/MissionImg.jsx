import React from "react";
import "./MissionImg.scss";
import missionImg1 from "../../../Assets/Images/mission1.png";
import missionImg2 from "../../../Assets/Images/mission2.png";

const MissionImg = () => {
  let [className, setClassName] = React.useState(false);

  const onMouseEnter = () => {
    setClassName(true);
  };

  const onMouseLeave = () => {
    setClassName(false);
  };

  return (
    <div className="mission__imgCollection d-flex justify-content-around pt-5">
      <img
        className={`mission__img`}
        src={missionImg1}
        alt=""
        width={className ? 286 : 387}
        height={className ? 519 : 662}
        
      />
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="mission__img"
        src={missionImg2}
        alt=""
        width={286}
        height={className ? 672 : 519}
      />
      
    </div>
  );
};

export default MissionImg;


import React from "react";
import "./NumUsers.scss";

const NumUsers = () => {
  return (
    <section className="site-container py-5 num-users">
      <div className="num-users__inner d-flex align-items-center justify-content-between">
        <div className="num-users__left d-flex align-items-center gap-5">
          <h2>12450</h2>
          <p>человек принимают участие в проекте и проходить курсы</p>
        </div>
        <div className="num-users__right d-flex align-items-center gap-5">
          <h2>10850</h2>
          <p>человек получили сертификаты и консультации</p>
        </div>
      </div>
    </section>
  );
};

export default NumUsers;

import "./FooterTop.scss";
import { Link } from "react-router-dom";

import React from "react";

const FooterTop = () => {
  return (
    <div className="d-flex gap-5 align-items-center mb-4">
      <div className="footer__logo me-5">
        <Link
          className="footer__logo-link text-decoration-none text-light"
          to="/"
        >
          Хорошая школа
        </Link>
      </div>
      <ul className=" list-unstyled p-0 d-flex gap-5 ms-5">
        <li>
          <Link className=" text-decoration-none fs-5 text-light" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className=" text-decoration-none fs-5 text-light" to="/">
            Course
          </Link>
        </li>
        <li>
          <Link className=" text-decoration-none fs-5 text-light" to="/">
            Store
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterTop;

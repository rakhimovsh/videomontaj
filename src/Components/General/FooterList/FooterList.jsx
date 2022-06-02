import "./FooterList.scss";
import { Link } from "react-router-dom";

import React from "react";

const FooterList = ({ title, info }) => {
  return (
    <ul className=" list-unstyled p-0">
      <li>
        <Link className=" text-decoration-none text-light fs-5" to="/">
          {title}
        </Link>
      </li>
      <li>
        <Link className=" text-decoration-none text-secondary" to="/">
          {info[0]}
        </Link>
      </li>
      <li>
        <Link className=" text-decoration-none text-secondary" to="/">
          {info[1]}
        </Link>
      </li>
      <li>
        <Link className=" text-decoration-none text-secondary" to="/">
          {info[2]}
        </Link>
      </li>
      <li>
        <Link className=" text-decoration-none text-secondary" to="/">
          {info[3]}
        </Link>
      </li>
    </ul>
  );
};

export default FooterList;

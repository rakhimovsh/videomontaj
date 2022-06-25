import React from "react";
import {Link} from 'react-router-dom'

const NavList = () => {
  return (
    <ul className="list-unstyled p-0 m-0 d-flex me-5 gap-4 align-items-center">
      <li className="nav-item">
        <Link className="nav-link text-white fs-5" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-white fs-5" to="/course">Course</Link>
      </li>
      <li>
        <Link className="nav-link text-white fs-5" to='/store'>Store </Link>
      </li>
      <li>
        <a
          className="nav-link dropdown-toggle text-light fs-5"
          href="#"
          id="navbarDarkDropdownMenuLink1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Русский
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDarkDropdownMenuLink1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default NavList;

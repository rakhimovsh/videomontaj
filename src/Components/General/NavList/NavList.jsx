import React from "react";

const NavList = () => {
  return (
    <ul className="list-unstyled p-0 m-0 d-flex me-5 gap-4">
      <li>
        <a
          className="nav-link dropdown-toggle text-light fs-5"
          href="#"
          id="navbarDarkDropdownMenuLink1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About
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
      <li>
        <a
          className="nav-link dropdown-toggle text-light fs-5"
          href="#"
          id="navbarDarkDropdownMenuLink1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Course
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
      <li>
        <a
          className="nav-link dropdown-toggle text-light fs-5"
          href="#"
          id="navbarDarkDropdownMenuLink1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Store
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

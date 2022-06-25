import React from "react";
import "./Nav.scss";
import Button from "../Button/Button";
import NavList from "../NavList/NavList";
import { Link } from "react-router-dom";
import logo from '../../../Assets/Images/logo.svg'

const Nav = () => {
  return (
    <nav className="header__nav d-flex align-items-center justify-content-between">
      <div className="header__logo">
        <Link
          className="text-decoration-none header__logoLink text-light"
          to="/"
        >
          <img src={logo}></img>
        </Link>
      </div>
      <div className="d-flex">
        <NavList />
        <div className="btn--collection">
          <Button border={true} color="Arsenic">
            Регистрация
          </Button>
          <Button border={true} color="AbyssalAnchorfishBlue">
            Вход в аккаунт
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

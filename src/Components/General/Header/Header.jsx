import * as React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="site-container header pt-4 pb-4">
      <Nav />
    </header>
  );
};
export default Header;

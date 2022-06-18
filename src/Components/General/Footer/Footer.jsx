import "./Footer.scss";
import { Link } from "react-router-dom";
import FooterTop from "../FooterTop/FooterTop";
import FooterList from "../FooterList/FooterList";

function Footer() {
  return (
    <footer className="footer pt-5">
      <div className="site-container">
        <FooterTop />
        <div>
          <div className="d-flex align-items-end justify-content-between">
            <ul className="mt-5 list-unstyled p-0 row w-75">
              <li className="col-3">
                <FooterList
                  title="About me"
                  info={["About me", "About me", "About me", "About me"]}
                />
              </li>
              <li className="col-3">
                <FooterList
                  title="Course"
                  info={["Course", "Course", "Course", "Course"]}
                />
              </li>
              <li className="col-3">
                <FooterList
                  title="Store "
                  info={["Store ", "Store ", "Store ", "Store "]}
                />
              </li>
              <li className="col-3">
                <FooterList
                  title="Blog"
                  info={["Blog", "Blog", "Blog", "Blog"]}
                />
              </li>
            </ul>
            <div className="footer__location">
              <p className="footer__location-title">
                Tashkent Uzbekistan Amir temur ko`chasi 1 uy
              </p>
              <a
                className=" text-decoration-none opacity-50 d-block"
                href="mailto:sh.yoqubjonov47@gmail.com  "
              >
                sh.yoqubjonov47@gmail.com
              </a>
              <a
                className=" text-decoration-none text-light fs-4"
                href="tel:900605747"
              >
                +998 90 060-57-47
              </a>
            </div>
          </div>
          <div className="mt-5 row">
            <p className="text-secondary fs-6 col-6">Copyrigt 2022</p>
            <ul className="col-6 list-unstyled p-0 d-flex gap-4">
              <li className="footer__network">
                <Link className="fs-5 text-decoration-none text-light" to="/">
                  <i className="icon-facebook"></i>
                </Link>
              </li>
              <li className="footer__network">
                <Link className="fs-5 text-decoration-none text-light" to="/">
                  <i className="icon-instagram"></i>
                </Link>
              </li>
              <li className="footer__network">
                <Link className="fs-5 text-decoration-none text-light" to="/">
                  <i className="icon-telegram"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { navigationList } from "../../data/navigation.js";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "/src/components/logo";
import "./Footer.css";

function FooterNavList({ item, link }) {
  return (
    <li>
      <a href={link}>{item}</a>
    </li>
  );
}

function Footer() {
  return (
    <section className="footer">
      <div className="footer__top">
        <Logo />
        <div className="footer__middle">
          <nav className="footer__nav">
            <ul>
              {navigationList.map((list) => (
                <FooterNavList
                  key={list.id}
                  item={list.item}
                  link={list.link}
                />
              ))}
            </ul>
          </nav>
          <div className="footer__bottom">
            <p className="footer__bottom--info">
              © 2026 Sound Cellar Recording. All rights reserved.{" "}
            </p>
          </div>
        </div>
        <ul className="footer__social--icons">
          <li>
            <a target="_blank" href="https://www.instagram.com/screcording/">
              <FaInstagram className="footer__social--icon" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/soundcellarrecording"
            >
              <FaFacebookF className="footer__social--icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nathanraymcdonough/"
            >
              <FaLinkedinIn className="footer__social--icon" />
            </a>
          </li>
        </ul>
        <p className="footer__bottom--info-mobile">
          © 2026 Sound Cellar Recording. All rights reserved.{" "}
        </p>
      </div>
    </section>
  );
}

export default Footer;

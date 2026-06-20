import { useState } from "react";
import { navigationList } from "../../data/navigation.js";
import Logo from "/src/components/logo";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import "./Header.css";

function HeaderNavList({ item, link }) {
  return (
    <li>
      <a href={link}>{item}</a>
    </li>
  );
}

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section className="header">
      <div className="header__left">
        <Logo />
      </div>
      <nav className="header__nav">
        <ul className="header__nav--list">
          {navigationList.map((list) => (
            <HeaderNavList key={list.id} item={list.item} link={list.link} />
          ))}
        </ul>
      </nav>
      <button className="mobile__menu--button" onClick={toggleMenu}>
        <Menu size={32} />
      </button>
      <div
        className="mobile__nav--container"
        style={{ display: isMenuOpen ? "flex" : "none" }}
      >
        <div className="mobile__nav--header">
          <p className="mobile__nav--heading">MENU</p>
          <X className="mobile__nav--x" size={18} onClick={toggleMenu} />
        </div>
        <nav className="mobile__nav">
          <ul className="mobile__nav--list">
            {navigationList.map((list) => (
              <HeaderNavList key={list.id} item={list.item} link={list.link} />
            ))}
          </ul>
        </nav>
        <ul className="mobile__nav--footer">
          <li>
            <a target="_blank" href="https://www.instagram.com/screcording/">
              <FaInstagram className="mobile__social--icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/soundcellarrecording"
            >
              <FaFacebookF className="mobile__social--icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nathanraymcdonough/"
            >
              <FaLinkedinIn className="mobile__social--icon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;

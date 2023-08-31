import { useState } from "react";
import './NavMenu.css';

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

    return (
        <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src="img/logo.png" alt="logo" />
        </div>
        <button type="button" className="nav__burger burger" onClick={toggleOpen}>
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </button>

        {open ? <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="http://" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div> : null}
        
        
      </nav>
    );
}
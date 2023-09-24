import React from "react";
import SvgLogoComponent from "./SvgLogoDesktopComponent";
import { RxHeart } from "react-icons/rx";
import { RxExit } from "react-icons/rx";
// import { RxPerson } from "react-icons/rx";
import { Link } from "react-router-dom";

import "../globalStyles.css";
import style from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={style.mainContainer}>
      <span className={style.logoContainer}>
        <SvgLogoComponent />
      </span>

      <nav role="navigation" aria-label="Main" className={style.navContainer}>
        <button className={`${style.navLink} ${style.active}`}>
          <Link to="/">Ver Eventos</Link>
        </button>
        <button className={style.navLink}>
          <Link to="/admin">Criar/Editar Eventos</Link>
        </button>
      </nav>
      <div className={style.btnContainer}>
        <button className={style.btnRight}>
          <RxHeart className={style.btnIcon} />
          Favoritos
        </button>
        <button className={style.btnRight}>
          <RxExit className={style.btnIcon} />
          Sair
        </button>
        {/*    Adicionar lógica de toggle     
          <button>
            <RxPerson />
            Login
          </button>
        */}
      </div>
    </header>
  );
};

export default Header;

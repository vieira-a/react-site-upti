import '../styles/components/Navigation.sass'
import { BsArrowRightSquare } from "react-icons/bs";
import { useState } from 'react';

const Navigation = () => {

  const [menuActive, setMenuActive] = useState("menu")
  const [btnActive, setBtnActive] = useState("openMenu")
  
  const handleMenuActive = () => {
    setMenuActive(!menuActive)
    setBtnActive(!btnActive)
  }

  return (

    <nav className="navigation">
      <div className="navigationBox">
        <a className="logo" href="index.html">
          <img src="logo.png" alt="Logo UPTI" />
        </a>
        <button className={btnActive ? "openMenu" : "closeMenu"} onClick={handleMenuActive}>
            <svg viewBox="0 0 24 24" fill="none" className="openIcon" width="32" height="32" focusable="false"><path d="M18.5 16.5h-13V18h13v-1.5Zm0-5.5h-13v1.5h13V11Zm0-5.5h-13V7h13V5.5Z" fill="currentColor"></path></svg>
        </button>
        <button className={btnActive ? "closeMenu" : "openMenu"} onClick={handleMenuActive}>
          <svg viewBox="0 0 24 24" fill="none" className="closeIcon" width="32" height="32" focusable="false"><path d="m17.5 6.5-11 11m11 0-11-11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path></svg>
        </button>
      </div>
      <div className={menuActive ? "menu" : "menuActive"}>
        <div className="menuItems">
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="index.html">Serviços</a></li>
            <li><a href="index.html">Conheça a UP</a></li>
            <li><a href="index.html">Fale conosco</a></li>
          </ul>
          <div className="menuSupport">
            <a href='http://suporte.up-ti.com' className="btnSupport">
              Suporte<BsArrowRightSquare/>
            </a>
          </div>
        </div>
      </div>
    </nav> 
  );
};

export default Navigation
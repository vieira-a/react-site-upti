// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Button from 'react-bootstrap/Button';
import '../styles/components/Navigation.sass'
import { BsArrowRightSquareFill } from "react-icons/bs";


const Navigation = () => {

  return (

    <nav className="navigation">
      
      <div className="navigationBox">
        
        <a className="logo" href="index.html">
          <img src="logo.png" width={48} alt="" />
        </a>

        <button className="openMenu">
            <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon" width="32" height="32" focusable="false"><path d="M18.5 16.5h-13V18h13v-1.5Zm0-5.5h-13v1.5h13V11Zm0-5.5h-13V7h13V5.5Z" fill="currentColor"></path></svg>
        </button>
        <button className="closeMenu">
          <svg viewBox="0 0 24 24" fill="none" className="dig-UIIcon" width="32" height="32" focusable="false"><path d="m17.5 6.5-11 11m11 0-11-11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path></svg>
        </button>

      </div>
      
      <div className="menu">
        <div className="menuItems">
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="index.html">Serviços</a></li>
            <li><a href="index.html">Conheça a UP</a></li>
            <li><a href="index.html">Fale conosco</a></li>
          </ul>


        </div>
        
      </div>
      <div className="menuSupport">
          <a href='http://suporte.up-ti.com' className="btnSupport">
            <span>Suporte</span>
            <BsArrowRightSquareFill/>
          </a>
      </div>

      
    </nav> 
  );
};

export default Navigation
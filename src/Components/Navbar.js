import React, { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = (props) => {
  const [navClass, setNavClass] = useState(false);

  const settingNav =()=>{
    setNavClass(!navClass);
   props.setNavAct();
  }

  const hidenav = () => {
    setNavClass(false)
  }

  return (
    <div className="nav-content">
      <nav onClick={() => settingNav()} className={navClass ? "nav-active" : "nav"}>
        <div className="nav-links">
          <ul>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Inicio">Inicio</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Nosotros">Quiénes somos</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#MenuQR">Carta Interactiva</AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={() => hidenav()} href="#Contacto">Contacto</AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="toggle-btn" onClick={() => settingNav()}> 
       
       <span className={navClass ? "abierto1" : "cerrado1" } ></span> 
       <span className={navClass ? "abierto1" : "cerrado2"}></span> 
      </div>
    </div>
  );
};
export default Navbar;

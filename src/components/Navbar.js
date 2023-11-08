import React, { useEffect, useState } from "react";
import "../css/components/navbar.css";
import { NavLink,useLocation } from "react-router-dom";
import {Spin as Hamburger } from "hamburger-react";
import Logo from "../icon/logo.png";

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  const handleResize = () => {
    if (window.innerWidth > 800)
      setIsMobile(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  })




  let navmenuClasses = ['nav-links-mobile'];
  let navbarClasses = ['navbar'];


  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  if (isMobile) {
    navmenuClasses.push('scrolled');
    navbarClasses.push('scrolled');
    document.body.style.overflow = "hidden";
  }
  else
    document.body.style.overflow = "auto"

  return (
    <header className={navbarClasses.join(" ")}>

      <nav className={"navigation" + (scrolled || location.pathname!="/"?" scrol":"")}>
        <NavLink exact to="/" className="logo">
            <img src={Logo} />
            <p>OVINSTAL<br/>ELECTRIC</p>
            </NavLink>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} >
          <NavLink to="/about" activeClassName="active" onClick={() => setIsMobile(false)}>Despre</NavLink>
          <NavLink to="/certified" activeClassName="active" onClick={() => setIsMobile(false)}>Certificate</NavLink>
          <NavLink to="/service" activeClassName="active" onClick={() => setIsMobile(false)}>Servicii</NavLink>
          <NavLink to={`/projects`} activeClassName="active" onClick={() => setIsMobile(false)}>Proiecte</NavLink>
          <NavLink to="/contact" activeClassName="active" onClick={() => setIsMobile(false)}>Contact</NavLink>
        </ul>
        <div className="mobile-menu-icon">
          <Hamburger toggled={isMobile} rounded={true} color={(location.pathname !== "/" ? "white" : scrolled ? "white" : isMobile ? "black" : "black")} onToggle={() => setIsMobile(!isMobile)} />
        </div>
      </nav>

    </header>
  )
};
export default Navbar;
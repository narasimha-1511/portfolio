import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./css/navbar.css";

function NavBar() {
  const [navBarBlur, setNavBarBlur] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 25) {
      if (!navBarBlur)
        // this make it not to set it again and again
        setNavBarBlur(true);
    } else {
      if (navBarBlur)
        // same here no need to set it again and again
        setNavBarBlur(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  const showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var hamBur = document.getElementsByClassName("NavbarLinks")[0];

    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    hamBur.classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks")[0];
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham.classList.remove("showNavbar");
  };

  return (
    <nav className={navBarBlur ? "Navbar blur" : "Navbar"}>
      <h1 className="Logo">LN</h1>

      <div className="Hamburger">
        <span className="bar" onClick={showMenu}></span>
        <span className="bar" onClick={showMenu}></span>
        <span className="bar" onClick={showMenu}></span>
      </div>

      <ul class="NavbarLinks">
        <li onClick={hideMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/about">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/projects">
            <BsCodeSlash /> Projects
          </Link>
        </li>
        <li onClick={hideMenu}>
          <Link to="/resume">
            <CgFileDocument /> Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

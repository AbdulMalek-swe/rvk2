import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import styled from "styled-components";
import Logo from "./Images/Logo.png";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { IoGrid } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import Slider from "./ImgSlide/Slider";
import { BsArrowRight } from "react-icons/bs";
import MultiItemCarousel from "./LatestVideo/MultiItemCrousel";
import MultiItemCarousel1 from "./Initiative/MultiItemCrousel";
import MultiItemCarousel2 from "./Events/MultiItemCrousel";
import Text from "./Text/Text";

import { AuthContext } from "../contexts/AuthContext";

const Button = styled.button`
  right: 0;
  margin: 2px;
  margin-right: 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  background-color: #da9532;
  border-radius: 25px;
  padding: 7px 12px;
  border: none;
  color: #ededed;
  cursor: pointer;
  &:hover {
    background-color: #da9532;
    font-size: 16px;
  }
`;

function NavbarD() {
  const [click, setClick] = useState(false);
  const isMobile = window.innerWidth < 900;
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [modal, setModal] = useState(false);

  const { user } = useContext(AuthContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="navbar-sec">
      <IconContext.Provider value={{ color: "#F1F1F1" }}>
        <nav className="navbar">
          <div className="navbar-container ">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={Logo} alt="img" className="navbar-icon" />
              Raj Vidya Kender
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <IoCloseOutline style={{ color: "#DA9532" }} />
              ) : (
                <RiMenu4Fill style={{ color: "#DA9532" }} />
              )}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <div className="roww">
                <div className="language">
                  Language
                  <MdArrowDropDown style={{ color: "#858585" }} />
                </div>

                <div>
                  {!user ? (
                    <button className="button587" onClick={toggleModal}>
                      <NavLink to="login" className="profilemainbut89">Login</NavLink>
                       </button>
                  ) : (
                    <button to="login" className="button587">
                      <Link to="/profile" className="profilemainbut89" >Profile</Link>
                    </button>
                  )}

                </div>
              </div>
              <div className="roww2">

                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/news"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    News
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    <div className="right-menu">
                      <div className="menu-button">Initiatives</div>
                      <div className="dropdown-menu">
                        <NavLink to="humanitarian">
                          <a> Humanitarian</a>
                        </NavLink>
                        <NavLink to="pep">
                          {" "}
                          <a>Peace Education Program</a>
                        </NavLink>
                        <NavLink to="pek">
                          <a>Peace Education and Knowledge</a>
                        </NavLink>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    <div className="right-menu">
                      <div className="menu-button"> Get Involved</div>
                      <div className="dropdown-menu">
                        <NavLink to="volunteer">
                          <a href="#">Volunteer</a>
                        </NavLink>
                        <NavLink to="career">
                          {" "}
                          <a href="#">Career</a>
                        </NavLink>
                        <NavLink to="donation" onClick={()=>  window.scrollTo(0,0)}>
                          {" "}
                          <a href="#">Donation</a>
                        </NavLink>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    <div className="right-menu">
                      <div className="menu-button"> About</div>
                      <div className="dropdown-menu">
                        <NavLink to="rvk" onClick={()=>window.scrollTo(0,0)}>
                          {" "}
                          <a href="#">RVK</a>
                        </NavLink>
                        <NavLink to="pr">
                          {" "}
                          <a href="#">Prem Rawat</a>
                        </NavLink>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    <div className="right-menu01">
                      <div className="menu-button01">  More
                        <IoGrid
                          className="gridicon"
                          style={{
                            color: "#DA9532",
                            fontSize: "28",
                            paddingLeft: "10",
                          }}
                          onMouseOver={({ target }) =>
                            (target.style.color = "#DA9532")
                          }
                          onMouseOut={({ target }) =>
                            (target.style.color = "#DA9532")
                          }
                        /></div>
                      <div className="dropdown-menu01">

                        <NavLink to="gallery">
                          {" "}
                          <a href="#">Gallery</a>
                        </NavLink>
                        <NavLink to="eventsall">
                          {" "}
                          <a href="#">Events</a>
                        </NavLink>
                        <NavLink to="contact">
                          {" "}
                          <a href="#">Contact</a>
                        </NavLink>
                      </div>
                    </div>
                  </NavLink>
                </li>





              </div>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default NavbarD;

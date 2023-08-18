import React from "react";
import { useNavigate } from "react-router";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./dropdown.css";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useUserAuth } from "../login/userAuthControl";

export function Header({ setShow, size }) {
  const { logOut, user } = useUserAuth();

  //for navigation
  const navigate = useNavigate();

  //logOut function
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  //Toggle function
  const menuToggle = () => {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  };

  return (
    <>
      <nav>
        <div className="logo">
          <GiWhiteBook></GiWhiteBook>BookStore
        </div>

        <input type="checkbox" id="click"></input>

        <label htmlFor="click" className="menu-btn">
          <GiHamburgerMenu
            className="menuicon"
            color="whitesmoke"
          ></GiHamburgerMenu>
        </label>

        <ul>
          <li>
            <a href="#">
              <AiFillHome
                color="whitesmoke"
                size={30}
                onClick={() => setShow(true)}
              ></AiFillHome>
            </a>
          </li>

          <li>
            <a href="#">
              <FaShoppingCart
                className="me-2"
                color="whitesmoke"
                size={30}
                onClick={() => setShow(false)}
              ></FaShoppingCart>

              <span className="">{size}</span>
            </a>
          </li>

          <li>
            <div className="action">
              <a href="#" className="profile">
                <FaUser
                  color="whitesmoke"
                  size={30}
                  onClick={menuToggle}
                ></FaUser>
              </a>
              <div className="menu">
                <h3>{user && user.email}</h3>
                <li>
                  <a href="#">
                    <span className=" text-secondary" onClick={handleLogout}>
                      Logout
                    </span>
                    <BiLogOut
                      color="black"
                      size={30}
                      onClick={handleLogout}
                    ></BiLogOut>
                  </a>
                </li>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

import React from "react";
import { AiFillFacebook, AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

//Function for footer
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start footer">
        <div className="text-center p-2">
          <a className="text-light text-decoration-none">
            2022 Copyright: Microfrontend_BookStore.com &nbsp;
            <AiFillTwitterCircle />
            &nbsp; <AiFillFacebook />
            &nbsp; <FaInstagramSquare />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

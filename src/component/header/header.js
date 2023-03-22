import React from "react";
import logo from "../../images/logo.png";
import contact from "../../images/contact.png";
import email from "../../images/email.png";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <div className={`d-sm-flex align-items-center justify-content-around`}>
        <img className={styles.header_logo} src={logo} alt="Logo Here" />
        <div
          className={`${styles.header}   d-sm-flex col-6 justify-content-between align-items-center`}
        >
          <img
            className={`${styles.header_icon} `}
            src={contact}
            alt="contact Icon"
          />
          <div className={styles.header_text}>0203 519 4420</div>
          <img className={styles.header_icon} src={email} alt="email logo" />
          <div className={styles.header_text}>
            info@solarinnovation@gmail.com
          </div>
          <button className={styles.header_btn}>Contact Us</button>
        </div>
      </div>
      <hr className="m-0" />
    </>
  );
};

export default Header;

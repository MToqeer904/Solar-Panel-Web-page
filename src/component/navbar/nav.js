import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Navbar = () => {
  const navItem = [
    "Home",
    "ChiSiamo",
    "SIRE",
    "SIRE Features",
    "Why SIRE",
    "SIRE Product",
    "How It Works",
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul
              className={`${styles.list} navbar-nav w-100 justify-content-around ms-5 me-5 m-sm-2`}
            >
              {navItem.map((item, index) => {
                return (
                  <li className="nav-item">
                    <Link
                      className={`${styles.my_link} nav-link aria-current="page"`}
                      to={`/${item.toLowerCase()}`}
                      id={index}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

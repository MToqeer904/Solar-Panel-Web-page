import React from "react";
import base from "../../images/base.png";
import fstImg from "../../images/fst.png";
import secImg from "../../images/sec.png";
import dots from "../../images/dots.png";
import lftBg from "../../images/bgright.png";
import styles from "./sire.module.css";

const SireAbout = () => {
  return (
    <>
      <div className={styles.main_div}>
        <div className={`${styles.left_img_div}`}>
          <div>
            <div className={`${styles.base_img} rounded mx-auto d-block`}>
              <img className="img-fluid" src={base} alt="base_img" />
            </div>
          </div>
          <div className="position-absolute top-0 start-0">
            <img className="img-fluid" src={dots} alt="top_right_img" />
          </div>
          <div className="position-absolute bottom-0 end-0">
            <img className="img-fluid" src={dots} alt="bottom_left_img" />
          </div>
          <div
            style={{ marginRight: "115px", marginBottom: "150px" }}
            className="position-absolute shadow-sm"
          >
            <img className="img-fluid" src={fstImg} alt="base_img" />
          </div>
          <div
            style={{ marginLeft: "170px" }}
            className="position-absolute top-50 shadow-sm"
          >
            <img
              style={{ width: "310px" }}
              className="img-fluid"
              src={secImg}
              alt="base_img"
            />
          </div>
        </div>
        <div className="position-relative d-flex justify-content-center flex-column">
          <p className={styles.right_heading}>S.I.R.E</p>
          <h3>Smart Integrated Renewable Energy</h3>
          <hr className={styles.right_hr} />
          <p className={styles.right_p}>
            S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per
            la produzione, conversione e gestione dell'energia solare, studiato
            specificatamente per installazioni all'interno di condomini.
          </p>

          <div className="position-absolute top-0 end-0">
            <img className="img-fluid" src={dots} alt="right_div" />
            <div>
              <img className="img-fluid" src={lftBg} alt="right_dot_bg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SireAbout;

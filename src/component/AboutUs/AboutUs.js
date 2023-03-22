import React from "react";
import styles from "./aboutUs.module.css";
import dotImg from "../../images/dots.png";
const AboutUs = () => {
  return (
    <>
      <div>
        <img
          className="position-absolute ms-4 mt-3"
          src={dotImg}
          alt="dotedImage"
        />
        <h1 className="mt-5 mb-3 d-flex justify-content-center fw-bold">
          CHI SIAMO
        </h1>
        <div className={styles.hr_div}>
          <hr className={styles.hr_line} />
        </div>
        <div className={styles.about_Us_para_div}>
          <p className={styles.about_Us_para}>
            Solar Innovatio è una PMI innovativa italiana specializzata nella
            progettazione e realizzazione di sistemi fotovoltaici intelligenti.
            Solar Innovatio unisce alla decennale esperienza maturata nel
            panorama italiano nell'ambito delle soluzioni fotovoltaiche un
            approccio ingegneristico, innovativo, digitale alla principale fonte
            di energia rinnovabile.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

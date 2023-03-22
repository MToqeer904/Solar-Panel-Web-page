import React from "react";
import cover from "../../images/coverimg.png";
import styles from "./coverimg.module.css";
const CoverImg = () => {
  return (
    <>
      <div className={styles.cover_img}>
        <img className={`${styles.img}`} src={cover} alt="ConverPhoto" />
        <div className={styles.cover_text}>
          <p className={`${styles.img_heading}`}>Il tuo accesso al sole</p>
          <p className={styles.img_para}>
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
            assenza di tetto. La tua fonte d'energia, gratuita e sostenibile
          </p>
        </div>
      </div>
    </>
  );
};

export default CoverImg;

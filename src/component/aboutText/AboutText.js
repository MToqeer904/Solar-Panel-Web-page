import React from "react";
import styles from "./aboutText.module.css";
const AboutText = () => {
  return (
    <>
      <div className={styles.qoutes_div}>
        <div>
          <p style={{ marginRight: "30px" }} className={`${styles.qoutes}`}>
            “
          </p>
        </div>
        <p className={styles.para}>
          Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
          componente di una soluzione ingegneristica più completa che comprende
          sensoristiche avanzate e l'integrazione con i sistemi domotici di
          casa.
        </p>
        <p style={{ marginLeft: "30px" }} className={styles.qoutes}>
          ”
        </p>
      </div>
      <div className={styles.hr_div}>
        <hr style={{ marginRight: "10px" }} className={styles.hr_line} />
        <p className={`${styles.hr_para} mt-1`}>Cristian Testoni</p>
        <hr style={{ marginLeft: "10px" }} className={styles.hr_line} />
      </div>
    </>
  );
};

export default AboutText;

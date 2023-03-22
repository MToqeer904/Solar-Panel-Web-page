import React from "react";
import styles from "./employee.module.css";

const Employee = (props) => {
  return (
    <>
      <div className={`${styles.div_head} col-sm-4`}>
        <div>
          <img
            className={styles.my_image}
            src={require(`../../${props.items.img}`)}
            alt="EmployeeImage"
          />
        </div>
        <div className={styles.para}>
          <h3>{props.items.name}</h3>
          <p style={{ color: "#666666" }}>{props.items.detail}</p>
        </div>
      </div>
    </>
  );
};

export default Employee;

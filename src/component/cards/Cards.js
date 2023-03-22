import React from "react";
import styles from "./cards.module.css";
const dummyData = require("../../asset/about_cards.json");

const Cards = () => {
  return (
    <>
      <div
        className={`${styles.main_div} row container-fluid d-flex justify-content-around align-items-center`}
      >
        {dummyData.cards_dummy_data.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`${styles.s_cards} col-lg-3 col-sm-1 `}
              >
                <div className="mt-4 mb-2  d-flex justify-content-center ">
                  <img src={require(`../../${item.img}`)} alt="icon" />
                </div>
                <div className="mb-2 d-flex flex-column justify-content-center text-center align-items-center">
                  <h4 className="mb-0 fw-bold">{item.percent}</h4>
                  <p style={{ width: "154px" }}>{item.message}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;

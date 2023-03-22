import React from "react";
import styles from "./infoCard.module.css";
const dummyData = require("../../asset/info_card.json");

const InfoCard = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-2">
        <h1>Perchè S.I.R.E.</h1>
      </div>
      <hr className="hr_line" />
      <div className="mb-sm-3 d-sm-flex justify-content-evenly">
        {dummyData.dummyCardData.map((item, index) => {
          return (
            <>
              <div
                className={`${styles.card_size}  d-flex flex-column justify-content-center`}
                key={index}
              >
                <div className="mb-4 d-flex justify-content-center ">
                  <img src={require(`../../${item.img}`)} alt="icon" />
                </div>
                <div className="mb-4 text-center">
                  <h3>{item.name}</h3>
                </div>
                <div className="ms-3 me-3 text-center">
                  <p>{item.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default InfoCard;

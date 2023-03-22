import React from "react";
import tb_bg_img from "../../images/tb_bg.png";
const dummyData = require("../../asset/table_dmy_data.json");

const InfoTable = () => {
  return (
    <>
      <div className="text-bg-light mt-5">
        <img
          className="container-fluid position-absolute"
          src={tb_bg_img}
          alt="table_Background_Image"
        />
        <h1 className=" pt-5 d-flex justify-content-center">
          Connesso, Intelligente, Resistente
        </h1>
        <hr className="hr_line mt-4" />
        <div className="row container-fluid justify-content-center">
          {dummyData.table_dummy_data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="col-lg-4  col-sm-12 d-flex m-3 gap-3"
                >
                  <div>
                    <img src={require(`../../${item.img}`)} alt="icon_img" />
                  </div>
                  <div className="">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InfoTable;

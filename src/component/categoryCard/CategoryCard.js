import React from "react";
const dummyData = require("../../asset/category_cards.json");

const CategoryCard = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5 mb-2">
        <h1>Scegli il tuo SIRE</h1>
      </div>
      <hr className="hr_line" />
      <div className="container-fluid  row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            {dummyData.category_cards_data.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <img
                      className="card-img-top"
                      src={require(`../../${item.img}`)}
                      alt="card_cover_img"
                    />
                    <div className="card-body">
                      <div className="card-title">
                        <h3>{item.name}</h3>
                      </div>
                      {/* {console.log(`dddddd`, dummyData.category_cards_data[0].points)} */}
                      {dummyData.category_cards_data[0].points.map(
                        (items, index) => {
                          return (
                            <>
                              <div className="card-text d-flex">
                                <div>
                                  <img
                                    src={require(`../../${item.vectorImg}`)}
                                    alt=""
                                  />
                                </div>
                                <p>{items}</p>
                              </div>
                            </>
                          );
                        }
                      )}
                    </div>
                    <h4>{item.icon_heading}</h4>
                    <img src={require(`../../${item.icon_Img1}`)} alt="icon" />
                    <h6>{item.icon1_name}</h6>
                    <img src={require(`../../${item.icon_Img1}`)} alt="icon" />
                    <p>{item.icon2_name}</p>
                  </div>
                  {dummyData.category_cards_data[0].li_Items.map(
                    (value, index) => {
                      return (
                        <>
                          <div key={index}>
                            <p>{value}</p>
                          </div>
                        </>
                      );
                    }
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;

import React from "react";
import AboutUs from "../component/AboutUs/AboutUs";
import CoverImg from "../component/coverImg/CoverImg";
import Employee from "../component/employee/Employee";
import Header from "../component/header/header";
import Navbar from "../component/navbar/nav";
import AboutText from "../component/aboutText/AboutText";
import SireAbout from "../component/aboutSIRE/Sire";
import InfoTable from "../component/infoTable/InfoTable";
import InfoCard from "../component/companyInfoCard/InfoCard";
import Cards from "../component/cards/Cards";
// import CategoryCard from "../component/categoryCard/CategoryCard";
const dummyData = require("../asset/emp_data.json");

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <CoverImg />
      <AboutUs />
      <div className={`home_emp container`}>
        {dummyData.emp_Details.map((item, index) => {
          return (
            <>
              <Employee items={item} key={index} />
            </>
          );
        })}
      </div>
      <AboutText />
      <SireAbout />
      <InfoTable />
      <InfoCard />
      <Cards />
      {/* <CategoryCard /> */}
    </>
  );
};

export default HomePage;

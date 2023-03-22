import React from "react";
import Header from "../component/header/header";
import Navbar from "../component/navbar/nav";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <h1>Error Occured</h1>
      <h1>Couldn't Find Any Page</h1>
    </div>
  );
};

export default ErrorPage;

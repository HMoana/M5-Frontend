import "./App.css";
import React from "react";
import Header from "./Components/CommonComponents/Header";
import Footer from "./Components/CommonComponents/Footer";
import HeaderImageContainer from "./Components/Homepage/HeaderImageContainer";

const App = () => {
  return (
    <div>
      <Header />
      <HeaderImageContainer />
      <Footer />
    </div>
  );
};

export default App;

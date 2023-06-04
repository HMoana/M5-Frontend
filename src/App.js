import "./App.css";
import React from "react";
import Header from "./Components/CommonComponents/Header";
import Footer from "./Components/CommonComponents/Footer";
import HeaderImageContainer from "./Components/Homepage/HeaderImageContainer";
import MainContainer from "./Components/Homepage/MainContainer";
import VideoDisplay from "./Components/Homepage/VideoDisplay";
import FormFilling from "./Components/Homepage/FormFilling";

const App = () => {
  return (
    <div>
      <Header />
      <HeaderImageContainer />
      <MainContainer />
      <VideoDisplay />
      <FormFilling />
      <Footer />
    </div>
  );
};

export default App;

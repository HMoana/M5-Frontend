import "./App.css";
import React from "react";
import Header from "./Components/CommonComponents/Header";
import Footer from "./Components/CommonComponents/Footer";
import HeaderImageContainer from "./Components/Homepage/HeaderImageContainer";
import MainContainer from "./Components/Homepage/MainContainer";
import FormFilling from "./Components/Homepage/FormFilling";
import YoutubeVideo from "./Components/Homepage/YoutubeVideo";

const App = () => {
  return (
    <div>
      <Header />
      <HeaderImageContainer />
      <MainContainer />
      <YoutubeVideo />
      <FormFilling />
      <Footer />
      {/* addig some notes againnnnnnn */}
    </div>
  );
};

export default App;

import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import FormFilling from "./FormFilling";
import HeaderImageContainer from "./HeaderImageContainer";
import MainContainer from "./MainContainer";
import YoutubeVideo from "./YoutubeVideo";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeaderImageContainer />
      <MainContainer />
      <YoutubeVideo />
      <FormFilling />
      <Footer />
    </div>
  );
};

export default HomePage;

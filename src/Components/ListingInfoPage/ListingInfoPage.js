import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";
import ListingInfoGallery from "./ListingInfoGallery";
import ListingInfoMainContainer from "./ListingInfoMainContainer";
import ListingInfoMap from "./ListingInfoMap";

const ListingInfoPage = () => {
  return (
    <div>
      <Header />
      <ListingInfoGallery />
      <ListingInfoMainContainer />
      <ListingInfoMap />
      <Footer />
    </div>
  );
};

export default ListingInfoPage;

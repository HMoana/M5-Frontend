import { Link } from "react-router-dom";
import Footer from "../CommonComponents/Footer";
import Header from "../CommonComponents/Header";
import Listing from "./Listing";

const ListingsPage = () => {
  return (
    <div>
      <Header />
      <Listing />
      <Footer />
      <Link to="/listingInfoPage">Click here to see Listing Info</Link>
    </div>
  );
};

export default ListingsPage;

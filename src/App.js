import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Components/Homepage/HomePage";
import ListingsPage from "./Components/ListingsPage/ListingsPage";
import ListingInfoPage from "./Components/ListingInfoPage/ListingInfoPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listingsPage" element={<ListingsPage />} />
        <Route path="/listingInfoPage" element={<ListingInfoPage />} />
      </Routes>
    </div>
  );
};

export default App;

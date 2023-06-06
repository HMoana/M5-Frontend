import { Link } from "react-router-dom";

const ListingsPage = () => {
  return (
    <div>
      <h1>This is the Listings Page</h1>
      <Link to="/listingInfoPage">Click here to see Listing Info</Link>
    </div>
  );
};

export default ListingsPage;

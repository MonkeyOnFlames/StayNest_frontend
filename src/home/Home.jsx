import "../home/home.css";
import InfoSquare from "../infoSquare/InfoSquare";
import image from "../image/StayNest.jpg";
import ListingSquare from "../listingSquare/ListingSquare";
import EnvironmentButton from "../environmentButton/environmentButton";
import Searchbar from "../searchbar/Searchbar";
import CollapsibleSection from "../searchbar/CollapsibleSection";
import Button from "../button/button";
import { getAllListings } from "../api/listingService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const searchInput = (
  <input
    type="text"
    placeholder="Search for a listing..."
    className="search-form"
  />
);

const filters = [
  {
    icon: <div className="search-icon">i</div>,
    label: "Location",
    value: (
      <CollapsibleSection title="Sweden ">
        <p>Norge</p>
        <p>Stockholm</p>
      </CollapsibleSection>
    ),
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Listing Type",
    value: (
      <CollapsibleSection title="Residence ">
        <p>Garden</p>
        <p>House</p>
      </CollapsibleSection>
    ),
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Check In",
    value: (
      <CollapsibleSection title="22 May 2025 ">
        <p>Many dates</p>
      </CollapsibleSection>
    ),
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Check Out",
    value: (
      <CollapsibleSection title="30 May 2025 ">
        <p>Many dates</p>
      </CollapsibleSection>
    ),
  },
];

const Home = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getAllListings();
        setListings(data);
        setFilteredListings(data);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="home">
      <InfoSquare
        text={
          <div>
            <h2>Stay Nest</h2>
            <h3>
              A eco-friendly and <br />
              welcoming stay <br />
              for travelers <br />
            </h3>
            <p>Every place feels like home</p>
          </div>
        }
        image={<img src={image} id="infoLogoImg" alt="StayNest Logo" />}
      />

      <Searchbar
        input={searchInput}
        filters={filters}
        button={<Button text="Search" type="submit" width="10" />}
      />

      <EnvironmentButton
        environmentFilters={[
          "ANY",
          "BIKE",
          "CHARGE_POST",
          "KWH",
          "RECYCLE",
          "SOLAR_POWER",
        ]}
      />
      <div className="listing-container">
      {listings.map((listing) => (
        <ListingSquare
          id={listing.id}
          key={listing.id}
          name={listing.name}
          imageLinks={listing.pictureURLs}
          environments={listing.environment}
          onClick={() => navigate(`/listings/${listing.id}`)}
        />
        
      ))}
      </div>
    </div>
  );
};

export default Home;

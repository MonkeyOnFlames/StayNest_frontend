import { useState, useEffect } from "react";
import Searchbar from "../searchbar/Searchbar";
import InfoSquare from "../infoSquare/InfoSquare";
import image from "../image/StayNest.jpg";
import BookingSquare from "../bookingSquare/BookingSquare";
import EnvironmentButton from "../environmentButton/environmentButton";
import { getListingById } from "../api/listingService";

const listing = getListingById(id);


const SpecificListingPage = () => {
    const [listing, setListing] = useState([])


  const filters = [
    {
      icon: <div className="search-icon">i</div>,
      label: "Location",
      value: listing.location,
    },
    {
      icon: <div className="search-icon">i</div>,
      label: "Listing Type",
      value: listing.listingTypes,
    },
    {
      icon: <div className="search-icon">i</div>,
      label: "Pets",
      value: "Yes",
    },
    {
      icon: <div className="search-icon">i</div>,
      label: "Disability friendly",
      value: "No",
    },
  ];

  return (
    <div>
      <InfoSquare
        text={
          <div>
            <h2 style={{ marginBottom: "0.5rem", fontWeight: 400 }}>
              {listing.name}
            </h2>
            <h2 style={{ margin: 0, fontSize: "2.5rem" }}>
              A eco-friendly and <br />
              welcoming stay <br />
              for travelers <br />
            </h2>
            <p>Every place feels like home</p>
          </div>
        }
        image={<img src={image} alt="StayNest Logo" />}
      />

      <Searchbar
        filters={filters}
        /* input={searchInput}        
        button={<Button text="Search" type="submit" width="10" />} */
      />

      <EnvironmentButton environmentFilters={["ANY", "BIKE", "CHARGE_POST", "KWH", "RECYCLE", "SOLAR_POWER"]} />

      <BookingSquare />
    </div>
  );
};

export default SpecificListingPage;

import { useState, useEffect } from "react";
import Searchbar from "../searchbar/Searchbar";
import InfoSquare from "../infoSquare/InfoSquare";
import image from "../image/StayNest.jpg";
import BookingSquare from "../bookingSquare/BookingSquare";
import EnvironmentButton from "../environmentButton/environmentButton";
import { getListingById } from "../api/listingService";
import { useParams } from "react-router-dom";

//got help from this site:
//https://www.squash.io/extracting-url-parameters-in-your-reactjs-component/
const SpecificListingPage = () => {
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);

  //get the id from the url
  const { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const data = await getListingById(id);
        setListing(data);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, []);

  console.log("listing" + listing);

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
              {listing.description}
            </h2>
          </div>
        }
        image={<img src={listing.image} alt="StayNest Logo" />}
      />

      <Searchbar
        filters={filters}
        /* input={searchInput}        
        button={<Button text="Search" type="submit" width="10" />} */
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

      <BookingSquare
        /* id={id}
        availabilities={listing.availabilities}
        price={listing.price} */listing={listing}
      />
      {console.log(listing.availabilities)}
    </div>
  );
};

export default SpecificListingPage;

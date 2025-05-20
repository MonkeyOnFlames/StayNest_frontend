import { useState, useEffect } from "react";
import Searchbar from "../searchbar/Searchbar";
import InfoSquare from "../infoSquare/InfoSquare";
import BookingSquare from "../bookingSquare/BookingSquare";
import EnvironmentButton from "../environmentButton/environmentButton";
import { getListingById } from "../api/listingService";
import { useParams } from "react-router-dom";
import "./specifikListingPage.css";

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
            <h2>{listing.name}</h2>
            <h3>{listing.description}</h3>
          </div>
        }
        image={
          <img
            src={listing.pictureURLs}
            id="infoListingImg"
            alt="Listing image"
          />
        }
      />

      <Searchbar filters={filters} />

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

      <BookingSquare listing={listing} />
      {console.log(listing.availabilities)}
    </div>
  );
};

export default SpecificListingPage;

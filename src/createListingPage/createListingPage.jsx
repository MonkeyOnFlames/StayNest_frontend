import "../login/auth.css";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../button/button";
import { createListing } from "../api/listingService";
import CheckBox from "../checkBox/CheckBox";

const CreateListingPage = () => {
  const [listingName, setListingName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [listingTypes, setListingTypes] = useState(["RESIDENCE", "SITE"]);
  const [listingPolicy, setListingPolicy] = useState("");
  const [environmentList, setEnvironmentList] = useState([
    "KWH",
    "CHARGE_POST",
    "RECYCLE",
    "BIKE",
    "SOLAR_POWER",
  ]);
  const [environment, setEnvironment] = useState([]);
  const [restrictionList, setRestrictionList] = useState([
    "PETS",
    "DISABILITY",
    "MIN_AGE",
    "MAX_RENTER",
  ]);
  const [restriction, setRestriction] = useState([]);
  const [pictureURL, setPictureURL] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  // const { createListing } = createListing();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let availability = {
      startDate: startDate,
      endDate: endDate,
    };

    let availabilities = [availability];

    let pictures = [];

    const pictureURLs = pictures.add(pictureURL);

    try {
      if (
        !listingName ||
        !location ||
        !description ||
        !price ||
        !listingTypes ||
        !listingPolicy ||
        !pictureURL ||
        !startDate ||
        !endDate
      ) {
        throw new Error(
          "All fields except environment and restrictions are required"
        );
      }

      setError("");

      await createListing(
        listingName,
        location,
        description,
        price,
        listingTypes,
        listingPolicy,
        environment,
        restrictions,
        pictureURLs,
        availabilities
      );
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log("error: " + err);
    }
  };

  const handleEnvironmentSelect = (box) => {
    let tempEnvironments = [];
    tempEnvironments.add(box);
    setEnvironment(tempEnvironments);
  };

  const handleRestrictionSelect = (box) => {
    let tempRestrctions = [];
    tempRestrctions.add(box);
    setEnvironment(tempRestrctions);
  };

  return (
    <div className="auth-container">
      <h2>Create Listing</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="listingName">
            Listing name<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            value={listingName}
            placeholder="Name of your listing"
            onChange={(e) => setListingName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">
            Location<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            value={location}
            placeholder="Listings location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Description<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">
            Price<br></br>
          </label>
          <input
            className="auth-input"
            type="number"
            value={price}
            placeholder="Price in SEK"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="listingTypes">
            Listing Type<br></br>
          </label>
          <label htmlFor="listingTypes">Residence</label>
          <input
            type="radio"
            name="Residence"
            onClick={() => setListingTypes("RESIDENCE")}
          />
          <label htmlFor="listingTypes">Site</label>
          <input
            type="radio"
            name="Site"
            onClick={() => setListingTypes("SITE")}
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="listingPolicy">
            Listing Policy<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            value={listingPolicy}
            placeholder="Enter your policy"
            onChange={(e) => setListingPolicy(e.target.value)}
          />
        </div>
        <div className="form-group">
          <CheckBox
            boxName="Environments"
            onSelect={handleEnvironmentSelect}
            availableBoxes={environmentList}
          />
        </div>
        <div className="form-group">
        <CheckBox
            boxName="Restrictions"
            onSelect={handleRestrictionSelect}
            availableBoxes={restrictionList}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pictureURLs">
            Picture links<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            value={pictureURL}
            placeholder="Link"
            onChange={(e) => setPictureURL(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="availabilities">
            Start and end date for the availability<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            value={startDate}
            placeholder="Start Date"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            className="auth-input"
            type="text"
            value={endDate}
            placeholder="Start Date"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <p className="error-message">{error}</p>

        <Button
          className="auth-button"
          text="Create listing"
          type="submit"
          variant="auth"
          width="10"
        />
      </form>
    </div>
  );
};

export default CreateListingPage;

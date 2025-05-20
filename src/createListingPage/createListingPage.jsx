import "../login/auth.css";
import { useState, useEffect } from "react";
import Button from "../button/button";
import { createListing } from "../api/listingService";
import { useNavigate } from "react-router-dom";
import CheckBox from "../checkBox/CheckBox";

const CreateListingPage = () => {
  const [listing, setListing] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    listingTypes: [],
    listingPolicy: "",
    environment: [],
    restrictions: [],
    pictureURLs: [],
    availabilities: [
      {
        startDate: "",
        endDate: "",
      },
    ],
  });
  const [availability, setAvailability] = useState({
    startDate: "",
    endDate: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // dynamig onChange metod som kan hantera varje property i objektet som INTE är en array
  const handleChange = (e) => {
    const { name, value } = e.target;
    setListing((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayOptionToggle = (arrayName, option) => {
    const currentArray = [...listing[arrayName]];

    // om option redan finns, ta bort den, annars lägg till den
    if (currentArray.includes(option)) {
      const updatedArray = currentArray.filter((item) => item !== option);
      setListing({
        ...listing,
        [arrayName]: updatedArray,
      });
    } else {
      setListing({
        ...listing,
        [arrayName]: [...currentArray, option],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // här skriver du kod för att skicka till API:et
    try {
      if (
        !listing.name ||
        !listing.location ||
        !listing.description ||
        !listing.price ||
        !listing.listingTypes ||
        !listing.listingPolicy ||
        !listing.pictureURLs ||
        !availability.startDate ||
        !availability.endDate
      ) {
        throw new Error(
          "All fields except environment and restrictions are required"
        );
      }

      if (availability.startDate > availability.endDate) {
        throw new Error("End date cannot before start date");
      }

      setError("");

      await createListing(listing);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log("error: " + err);
    }
  };

  // för mer komplexa fält som arrays (listingTypes, environment, restrictions, pictureURLs)
  // och nested objects (availabilities) behöver du special onChange metod:

  // för arrayer:
  const handleArrayChange = (arrayName, newArray) => {
    setListing((prev) => ({
      ...prev,
      [arrayName]: newArray,
    }));
  };

  // för array med objekt (availavilities):
  const handleAvailabilityChange = (newAvailabilities) => {
    setListing((prev) => ({
      ...prev,
      availabilities: newAvailabilities,
    }));
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
            name="name"
            value={listing.name}
            placeholder="Name of your listing"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">
            Location<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            name="location"
            value={listing.location}
            placeholder="Listings location"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">
            Description<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            name="description"
            value={listing.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">
            Price<br></br>
          </label>
          <input
            className="auth-input"
            type="number"
            name="price"
            value={listing.price}
            placeholder="Price in SEK"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <CheckBox
            boxName="Listing Type"
            selectedBox={listing.listingTypes}
            onSelect={(option) =>
              handleArrayOptionToggle("listingTypes", option)
            }
            availableBoxes={["RESIDENCE", "SITE"]}
          />
        </div>
        <div className="form-group">
          <label htmlFor="listingPolicy">
            Listing Policy<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            name="listingPolicy"
            value={listing.listingPolicy}
            placeholder="Enter your policy"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <CheckBox
            boxName="Environments"
            selectedBox={listing.environment}
            onSelect={(option) =>
              handleArrayOptionToggle("environment", option)
            }
            availableBoxes={[
              "KWH",
              "CHARGE_POST",
              "RECYCLE",
              "BIKE",
              "SOLAR_POWER",
            ]}
          />
        </div>
        <div className="form-group">
          <CheckBox
            boxName="Restrictions"
            selectedBox={listing.restrictions}
            onSelect={(option) =>
              handleArrayOptionToggle("restrictions", option)
            }
            availableBoxes={["PETS", "DISABILITY", "MIN_AGE", "MAX_RENTER"]}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pictureURLs">
            Picture links<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            name="pictureURLs"
            value={listing.pictureURLs}
            placeholder="Link"
            onChange={(e) => handleArrayChange("pictureURLs", [e.target.value])}
          />
        </div>
        <div className="form-group">
          <label htmlFor="availabilities">
            Start and end date for the availability<br></br>
          </label>
          <input
            className="auth-input"
            type="date"
            name="startDate"
            value={availability.startDate}
            placeholder="Start Date"
            onChange={(e) =>
              setAvailability({
                startDate: e.target.value,
                endDate: availability.endDate,
              })
            }
          />
          <input
            className="auth-input"
            type="date"
            name="endDate"
            value={availability.endDate}
            placeholder="End Date"
            onChange={(e) =>
              setAvailability({
                startDate: availability.startDate,
                endDate: e.target.value,
              })
            }
          />
          <CheckBox
            boxName="Confirm availibility"
            onSelect={(option) => handleAvailabilityChange([availability])}
            availableBoxes={["Confirm"]}
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

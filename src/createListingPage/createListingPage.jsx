import "../login/auth.css";
import { useState, useEffect } from "react";

const CreateListingPage = () => {
  const [listingName, setListingName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [listingTypes, setListingTypes] = useState("");
  const [listingPolicy, setListingPolicy] = useState("");
  const [environment, setEnvironment] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [pictureURLs, setPictureURLs] = useState("");
  const [availabilities, setAvailabilities] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !listingName ||
        !location ||
        !description ||
        !price ||
        !listingTypes ||
        !listingPolicy ||
        !pictureURLs ||
        !availabilities
      ) {
        throw new Error("All fields except environment and restrictions are required");
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
            placeholder="Enter the name of your listing"
            onChange={(e) => setLstingName(e.target.value)}
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
            placeholder="Enter your listings location"
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
            placeholder="name@mail.com"
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
            placeholder="With country code"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="listingTypes">
            Listing Type<br></br>
          </label>
          <input
            type="radio"
            name="Residence"
            checked = {listingTypes}
            onChange={(e) => setListingTypes(e.target.value)}
          />
          <input
            type="radio"
            name="Site"
            checked = {listingTypes}
            onChange={(e) => setListingTypes(e.target.value)}
          />
        </div>


        <div className="form-group">
          <label htmlFor="age">
            Age<br></br>
          </label>
          <input
            className="auth-input"
            type="number"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">
            Username<br></br>
          </label>
          <input
            className="auth-input"
            type="text"
            value={username}
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password<br></br>
          </label>
          <input
            className="auth-input"
            type="password"
            value={password}
            placeholder="6 + characters"
            onChange={(e) => setPassword(e.target.value)}
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

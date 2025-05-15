import "../login/auth.css";

const createListingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !firstName ||
        !lastName ||
        !email ||
        !phone ||
        !adress ||
        !age ||
        !username ||
        !password
      ) {
        throw new Error("All fields are required");
      }

      setError("");

      await register(
        firstName,
        lastName,
        email,
        phone,
        adress,
        age,
        username,
        password
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
            className="auth-input"
            type="text"
            value={listingTypes}
            placeholder="Enter your address"
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

export default createListingPage;

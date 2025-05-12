import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./auth.css";
import Button from "../button/button";

const Register = () => {
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
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">
            First name<br></br>
          </label>
          <input
            type="text"
            value={firstName}
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            Last name<br></br>
          </label>
          <input
            type="text"
            value={lastName}
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            E-mail<br></br>
          </label>
          <input
            type="email"
            value={email}
            placeholder="name@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            Phone No<br></br>
          </label>
          <input
            type="number"
            value={phone}
            placeholder="With country code"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="adress">
            Address<br></br>
          </label>
          <input
            type="text"
            value={adress}
            placeholder="Enter your address"
            onChange={(e) => setAdress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">
            Age<br></br>
          </label>
          <input
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
            type="password"
            value={password}
            placeholder="6 + characters"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="error-message">{error}</p>

        <p>By signing up you agree to our terms and conditions.</p>

        <Button
          className="auth-button"
          text="Register"
          type="submit"
          variant="auth"
          width="10"
        />

        <Link className="link" to="../login">
          <br></br>Login
        </Link>
      </form>
    </div>
  );
};

export default Register;

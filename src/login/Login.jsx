import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./auth.css";
import Button from "../button/button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!username || !password) {
        throw new Error("Username and password are required");
      }

      setError("");

      await login(username, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log("error: " + err);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            Username<br></br>
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password<br></br>
          </label>
          <input
            type="password"
            placeholder="6 + characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="error-message">{error}</p>

        <Button
          className="auth-button"
          text="Login"
          type="submit"
          variant="auth"
          width="10"
        />

        <Link className="link" to="../register">
          <br></br>Register
        </Link>
      </form>
    </div>
  );
};

export default Login;

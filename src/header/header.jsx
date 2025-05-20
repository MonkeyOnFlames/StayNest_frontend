import Button from "../button/button";
import "./header.css";
import image from "../image/StayNest.jpg";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="header">
      <div>
        <nav>
          <div className="logo-container">
            <Link className="link" to="/">
              <img src={image} id="headerimg" alt="StayNest logo" />
            </Link>
          </div>

          {currentUser ? (
            <div className="linkButton">
              <Link className="linkCreateListing" to="/createListing">
                <Button text="Create Listing" width="7" />
              </Link>

              <Link className="logout" onClick={handleLogout}>
                <Button text="Logout" width="5" />
              </Link>
            </div>
          ) : (
            <div className="linkButton">
              <Link className="linkRegister" to="/register">
                <Button text="Register" width="5" />
              </Link>
              <Link className="linkLogin" to="/login">
                <Button text="Login" width="5" />
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

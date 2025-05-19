import Button from "../button/button";
import "./header.css";
import image from "../image/StayNest.jpg";
import { Link } from "react-router";


const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <Link className="link" to="/">
            <img src={image} id="headerimg" alt="StayNest logo" />
          </Link>
        </div>
        <div className="linkButton">
        <Link className="linkLogin" to="/login">
          <Button text="Login" />
        </Link>
        
        <Link className="linkRegister" to="/register">
          <Button text="Register" />
        </Link>

        <Link className="linkCreateListing" to="/createListing">
          <Button text="Create Listing" width="9" />
        </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

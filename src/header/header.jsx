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
            <img src={image} alt="StayNest logo" />
          </Link>
        </div>

        <Link className="link" to="/login">
          <Button text="Login" />
        </Link>
        
        <Link className="link" to="/register">
          <Button text="Register" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

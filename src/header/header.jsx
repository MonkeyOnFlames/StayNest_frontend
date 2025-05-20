import Button from "../button/button";
import "./header.css";
import image from "../image/StayNest.jpg";
import { Link } from "react-router";
import Login from "../login/Login";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { currentUser, logout } = useAuth();
  const isAdmin =
    currentUser && currentUser.roles && currentUser.roles.includes("ADMIN");
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
            <>
              <Link to="/">
                <button className="logout" onClick={handleLogout}>
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link className="link" to="/login">
                Login
              </Link>
              <Link className="link" to="/register">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

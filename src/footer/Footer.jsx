import Button from "../button/button";
import "./footer.css";
import { Link } from 'react-router';

const Footer = () => {

        return (
            <footer className="footer">
               <p>&copy All rights reserved</p>
               <Link className="link" to="/about">About
            
            </Link>
            <Link className="link" to="/contact">contact
            
            </Link>
            </footer>
            
        )
}

export default Footer;
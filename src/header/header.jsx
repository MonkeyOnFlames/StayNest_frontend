import Button from "../button/button";
import"./header.css";
import image from "../image/StayNest.jpg";
import { Link } from 'react-router';
import Login from "../login/Login";




const Header = () => {

return (
    
    <header className="header">
        <h1>StayNest</h1>
        <nav>
        
        <div className="logo-container">
        <Link className="link" to="/home">
            <img src={image} alt="StayNest logo" />
            </Link>
        </div>
           
        <Button  
        text="login" 
        onClick={() => {Login}}
        />

        <Button  
        text="Register" 
        />
        </nav>
    </header>
    
)
 
}

export default Header;
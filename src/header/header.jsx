import Button from "../button/button";
import"../header/header.css";

const Header = ({title, onNavigate}) => {

return (
    <header className="header">
        <h1>{title}</h1>
        <nav>
        <Button  
        text="login" 
        onClick={() => onNavigate("login")}
        />

        <Button  
        text="Register" 
        />
        </nav>
    </header>
    
)
 
}

export default Header;
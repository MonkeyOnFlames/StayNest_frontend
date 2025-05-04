import Button from "../button/button";
import"../header/header.css";

const Header = ({title, onClick}) => {

return (
    <header className="header">
        <h1>{title}</h1>
        <nav>
        <Button  
        text="login" 
        />

        <Button  
        text="Register" 
        />
        </nav>
    </header>
    
)
 
}

export default Header;
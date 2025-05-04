import Button from "../button/button";
import "../footer/footer.css";

const Footer = ({title, onNavigate}) => {

        return (
            <footer className="footer">
               <p>"&copy" All rights reserved</p>
                <nav>
                <Button 
                text="About" 
                backgroundColor="orange" 
                onClick={() => onNavigate("about")}
                />
                <Button  
                text="Contact" 
                backgroundColor="orange" 
                onClick={() => onNavigate("contact")}
                />
                </nav>
            </footer>
            
        )
}

export default Footer;
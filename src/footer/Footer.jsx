import Button from "../button/button";
import "../footer/footer.css";

const Footer = ({title, onNavigate}) => {

        return (
            <footer className="footer">
               <p>"&copy" All rights reserved</p>
                <nav>
                <Button 
                text="About" 
                />
                <Button  
                text="Contact" 
                />
                </nav>
            </footer>
            
        )
}

export default Footer;
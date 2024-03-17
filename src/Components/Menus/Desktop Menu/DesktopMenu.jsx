import Navigation from "../../Navigation/Navigation";
import { Link } from "react-router-dom";
import logo from "../../../assets/wordmark_logo.png"
function DesktopMenu() {
   return (
      <div className="header__desktop">
         <Navigation />
         <Link to="/" aria-label="link to Home" className="header__logolink-desktop">
            <img src={logo} className="header__logo-desktop" alt="Logo of Bernard brand - The word 'Bernard'" />
         </Link>
      </div>
   )
}
export default DesktopMenu
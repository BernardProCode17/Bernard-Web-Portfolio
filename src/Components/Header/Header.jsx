import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import logo from "../../assets/wordmark_logo.png"
import '../../styles/Sass/components/_header.scss'
function Header() {

   return (
      <header className="header">
         <Navigation />
         <Link to="/" aria-label="link to Home" className="header__link">
            <img src={logo} className="header__logo" alt="Logo of Bernard brand - The word 'Bernard'" />
         </Link>
      </header>
   )
}
export default Header
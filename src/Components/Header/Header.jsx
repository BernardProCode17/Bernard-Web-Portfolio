import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import logo from "../../assets/wordmark_logo.png"
function Header() {

   return (
      <header>
         <Navigation />
         <Link to="/" aria-label="link to Home">
            <img src={logo} alt="Logo of Bernard brand - The word 'Bernard'" style={{ height: '170px' }} />
         </Link>
      </header>
   )
}
export default Header
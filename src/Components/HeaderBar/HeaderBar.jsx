import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import logo from "../../assets/wordmark_logo.png"
function HeaderBar() {

   return (
      <section>
         <Navigation />
         <Link to="/">
            <img src={logo} alt="Logo of Bernard brand - The word 'Bernard'" style={{ height: '170px' }} />
         </Link>
      </section>
   )
}
export default HeaderBar
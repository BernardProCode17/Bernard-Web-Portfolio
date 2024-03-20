import { Link } from "react-router-dom"
import Logo from "../../assets/Logo Icon.svg";
import './Footer.css';
function Footer() {

   return (
      <footer className="footer">
         <section className="footer__section">

            <Link to='/' aria-label='link to Home'>
               <img src={Logo} alt="Icon logo for my brand - Bernard Brand - The Capital letter B with a light source at the top right corner" />
            </Link>

            <div className="footer__text">
               <p className="footer__title">Bernard A. Clarke</p>
               <p className="footer__date">{new Date().getFullYear()}</p>
            </div>
         </section>
      </footer>
   )
}
export default Footer;
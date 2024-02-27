import { Link } from "react-router-dom"
import Logo from '../../assets/logo.svg';
import React from 'react';

function Footer() {

   return (
      <footer>
         <section>
            <Link>
            <img src={Logo} alt="Icon logo for my brand - Bernard Brand - The Capital letter B with a light source at the top right corner" style={{height: '50px' }}/>
            </Link>

            <p>Bernard A. Clarke</p>
            <p>{new Date().getFullYear()}</p>
         </section>
      </footer>
   )
}
export default Footer;
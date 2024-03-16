import { Link } from 'react-router-dom';
import menuIcon from '../../../assets/menuIcon.svg';
import Navigation from '../../Navigation/Navigation';
import React, { useState } from 'react';
import icon_logo from '../../../assets/icon_logo.png'

function MobileMenu() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   }

   return (
      <>
         <button onClick={toggleMenu}>
            <img src={menuIcon} alt="" />
         </button>
         {isOpen && <Navigation />}
         <Link to={'/'}>
            <img src={icon_logo} alt="" />
         </Link>
      </>
   )
}

export default MobileMenu
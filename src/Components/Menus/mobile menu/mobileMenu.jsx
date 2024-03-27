import { Link } from 'react-router-dom';
import menuIcon from '../../../assets/menuIcon.svg';
import Navigation from '../../Navigation/Navigation';
import { useState, useEffect } from 'react';
import icon_logo from '../../../assets/Logo Icon.svg'
import '../Mobile menu/mobileMenu.css'
import { useLocation } from 'react-router-dom';

function MobileMenu() {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   }
   
   useEffect(() => {
      setIsOpen(false);
   }, [location]);

   return (
      <section className='header__mobile--pages '>

         {isOpen && <Navigation />}
         <Link to={'/'} className='header__logolink--mobile'>
            <img src={icon_logo} alt="" className='header__logo-mobile' />
         </Link>

         <button onClick={toggleMenu} aria-label='navigation menu toggle' className='header__mobile--toggle' >
            <img src={menuIcon} alt="" className='header__svg' />
         </button>

      </section>
   )

}

export default MobileMenu
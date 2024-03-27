import { Link } from 'react-router-dom';
import menuIcon from '../../../assets/menuIcon.svg';
import Navigation from '../../Navigation/Navigation';
import { useState } from 'react';
import icon_logo from '../../../assets/Logo Icon.svg'
import '../Mobile menu/mobileMenu.css'

function MobileMenu() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   }
   
   return (
      <div className='header__mobile--pages '>

         {isOpen && <Navigation />}
            <Link to={'/'} className='header__logolink--mobile'>
               <img src={icon_logo} alt="" className='header__logo-mobile' />
            </Link>         

         <button onClick={toggleMenu} aria-label='navigation menu toggle' className='header__mobile--toggle' >
            <img src={menuIcon} alt="" className='header__svg' />
         </button>

      </div>
   )
}


export default MobileMenu
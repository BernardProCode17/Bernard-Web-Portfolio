import DesktopMenu from '../Menus/Desktop Menu/DesktopMenu';
import MobileMenu from '../Menus/Mobile menu/MobileMenu';
import './header.css'
import { useState, useEffect } from 'react';

function Header() {
   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

   const updateMedia = () => {
      setIsDesktop(window.innerWidth > 768);
   };

   useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
   }, []);

   return (
      <header className="header">
         {isDesktop ? <DesktopMenu /> : <MobileMenu />}
      </header>
   );

}
export default Header
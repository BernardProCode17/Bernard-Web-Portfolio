import { Link } from 'react-router-dom'
import '../../styles/Sass/components/_navigation.scss'
function Navigation() {

   return (
      <nav className='nav'>
         <ul className='nav__ul'>
            <li className='nav__li'>
               <Link to="/" aria-label='Home' className='nav__link'>Home</Link>
            </li>
            <li className='nav__li'>
               <Link to="/projects" aria-label='projects'  className='nav__link'>Projects</Link>
            </li>
            <li className='nav__li'>
               <Link to="/skills" aria-label='skills' className='nav__link'>Skills</Link>
            </li>
            <li className='nav__li'>
               <Link to="/about" aria-label='about' className='nav__link'>About</Link>
            </li>
         </ul>
      </nav>

   )
}
export default Navigation
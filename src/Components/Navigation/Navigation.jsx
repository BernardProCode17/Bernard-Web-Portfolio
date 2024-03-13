import { Link } from 'react-router-dom'
function Navigation() {

   return (
      <nav>
         <ul>
            <li>
               <Link to="/" aria-label='Home'>Home</Link>
            </li>
            <li>
               <Link to="/projects" aria-label='projects' >Projects</Link>
            </li>
            <li>
               <Link to="/skills" aria-label='skills'>Skills</Link>
            </li>
            <li>
               <Link to="/about" aria-label='about'>About</Link>
            </li>
         </ul>
      </nav>

   )
}
export default Navigation
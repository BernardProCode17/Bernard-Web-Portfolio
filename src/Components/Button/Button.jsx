import { Link } from "react-router-dom";
import '../HomeComponents/HomeProjects/HomeProject.css'
function Button({title, URL}){

   return(
   <Link to={URL} aria-label={title} className="project__home__link about__home__link">{title}</Link>   
   )
}
export default Button;
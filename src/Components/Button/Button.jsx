import { Link } from "react-router-dom";

function Button({title, URL}){

   return(
   <Link to={URL} aria-label={title}>{title}</Link>   
   )
}
export default Button;
import { Link } from "react-router-dom";

function Button({title, URL}){

   return(
   <Link to={URL}>{title}</Link>   
   )
}
export default Button;
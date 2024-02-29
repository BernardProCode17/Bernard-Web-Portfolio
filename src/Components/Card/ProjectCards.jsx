import { Link } from "react-router-dom";

function Card({ shortProject }) {

console.log(shortProject)

   return (
      <Link to={'/project:slug'}>
         <article className="card">
            <h3>Project Title</h3>
            <p>Short Description</p>

            <ul>

            </ul>
            
         </article>
      </Link>
   );
}
export default Card;

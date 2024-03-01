import { Link } from "react-router-dom";

function Card({ shortProject }) {

   const { project_name, slug, short_description, imageURL } = shortProject
   
   return (
      <Link to={`/project/${slug}`}>
         <article className="card">
            <h3>{project_name}</h3>
            <p>{short_description}</p>
            {/* Fix the image URL */}
            {/* <img src={url(imageURL)} alt={project_name} /> */}
         </article>
      </Link>
   );
}
export default Card;

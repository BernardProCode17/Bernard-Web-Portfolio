import { useContext} from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";

function Card() {

const {shortProject} = useContext(GlobalContext)

// console.log(shortProject)
   return (
      <>
         {shortProject.map((project, index) => (
            <Link to={`/project/${project.slug}`} key={index}>
               <article className="card">
                  <h3>{project.project_name}</h3>
                  <p>{project.short_description}</p>
                  {/* Fix the image URL */}
                  {/* <img src={url(imageURL)} alt={project_name} /> */}
               </article>
            </Link>
         ))}
      </>

   );
}
export default Card;


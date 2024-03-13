import { useContext} from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";

function Card() {

const {shortProject, urlFor} = useContext(GlobalContext)
console.log(shortProject.project_image)
   return (
      <>
         {shortProject.map((project, index) => (
            <Link to={`/project/${project.slug}`} key={index} aria-label='project'>
               <article className="card">
                  <h3>{project.project_name}</h3>
                  <p>{project.short_description}</p>
                  {/* <img src={urlFor(project.project_image).url()} alt={project.project_name} /> */}
               </article>
            </Link>
         ))}
      </>
   );
}
export default Card;


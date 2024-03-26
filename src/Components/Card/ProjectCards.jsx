import { useState, useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";

function Card({limit, homePage}) {
   const { shortProject, urlFor } = useContext(GlobalContext)
   const [projectsToShow, setProjectsToShow] = useState(limit ? shortProject.slice(0, limit) : shortProject);

   useEffect(() => {
      setProjectsToShow(limit ? shortProject.slice(0, limit) : shortProject);
   }, [shortProject, limit]);

   return (
      <>
         {projectsToShow.filter(project => project?.project_image).map((project, index) => (
            <Link to={`/project/${project.slug}`} key={index} aria-label='project' className="projects__link">

               <article className="project__home__card">
                  <h3 className="project__title">{project?.project_name}</h3>
                  {!homePage && <p className="project__description">{project?.short_description}</p>}
                  {/* <img src={project && project['project_image'] && urlFor(project?.project_image)?.url()} alt={project.project_name} className="project__image"/> */}
               </article>
               
            </Link>
         ))}
      </>
   );


}
export default Card;


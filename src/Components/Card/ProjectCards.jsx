import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Client from "../../Main Files/sanity";

function Card() {
   const [shortProject, setShortProject] = useState([]);

   useEffect(() => {
      const Q1 = `*[_type == 'projects' && short_description != null] 
      {
         project_name, 
         short_description, 
         slug, 
         project_image,
         'slug': slug.current    
      }`;

      Client.fetch(Q1)
         .then((data) => {
            const projectData = data;
            setShortProject(projectData);
         })
         .catch(console.error);

   }, []);


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


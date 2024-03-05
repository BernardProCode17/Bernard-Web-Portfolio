import { GlobalContext } from "../../Context/GlobalContext";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosCloudOutline,IoLogoGithub } from "react-icons/io";


function Project() {
   const { shortProject } = useContext(GlobalContext)
   const { slug } = useParams()
   const project = shortProject.find(proslug => proslug.slug === slug)
   const LDArray = project.long_description.flatMap(subarray => subarray.map(item => item.text))
   const FDArray = project.featured_description.flatMap(subarray => subarray.map(item => item.text))

   useEffect(() => {
      document.title = project ? `${project.project_name} - Bernard Web Portfolio` : `Project - Bernard Web portfolio`
   }, [project])


   return (
      <main>
         <h1>{project.project_name}</h1>
         {/* <img src="" alt="" /> */}
         <article>
            {Object.keys(project).filter(key => key === 'long_description').map((key, index) => (
               <h2 key={index}>{'Full ' + key.slice(5, 6).toUpperCase() + key.slice(6).toLowerCase()}</h2>
            ))}
            {LDArray.map((text, index) => (
               <p key={index}>{text}</p>
            ))}
         </article>

         <article>
            {Object.keys(project).filter(key => key === 'featured_description').map((key, index) => (
               <h2 key={index}>{key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
            ))}
            <ul>
               {FDArray.map((text, index) => (
                  <li key={index}>{text}</li>
               ))}
            </ul>
         </article>

         <section>
            <div>
               {Object.keys(project).filter(key => key === 'development_tools').map((key, index) => (
                  <h2 key={index}>{key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
               ))}
               <ul>
                  {project.development_tools.map((tools, index) =>
                     <li key={index}>{tools}</li>
                  )}
               </ul>
            </div>

            <div>
               {Object.keys(project).filter(key => key === 'development_language').map((key, index) => (
                  <h2 key={index}>{key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
               ))}
               <ul>
                  {project.development_language.map((lang, index) =>
                     <li key={index}>{lang}</li>
                  )}
               </ul>
            </div>
         </section>

         <section>
            <Link to={project.project_link}><IoIosCloudOutline /></Link>
            <Link to={project.github_link}><IoLogoGithub /></Link>
         </section>

      </main>
   )
}
export default Project
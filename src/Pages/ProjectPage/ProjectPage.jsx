import { GlobalContext } from "../../Context/GlobalContext";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosCloudOutline, IoLogoGithub } from "react-icons/io";
import Head from "../../Functions/head";


function Project() {
   const { slug } = useParams()
   const title = `${slug} - Bernard Web Portfolio`
   const { shortProject, urlFor } = useContext(GlobalContext)
   const project = shortProject.find(proslug => proslug.slug === slug)
   const LDArray = project.long_description.flatMap(subarray => subarray.map(item => item.text))
   const FDArray = project.featured_description.flatMap(subarray => subarray.map(item => item.text))

   return (
      <>
         {Head(title)}

         <main>
            <h1>{project.project_name}</h1>
            <img src={project.project_image && urlFor(project.project_image).url()} alt="" />
            <article>
               {Object.keys(project).filter(key => key === 'long_description').map((key, index) => (
                  <h2 key={index}>{'Full ' + key.slice(5, 6).toUpperCase() + key.slice(6).toLowerCase()}</h2>
               ))}
               {LDArray.map((text, index) => (
                  <p key={index}>{text}</p>
               ))}
            </article>

            <section>
               {Object.keys(project).filter(key => key === 'featured_description').map((key, index) => (
                  <h2 key={index}>{key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
               ))}
               <ul>
                  {FDArray.map((text, index) => (
                     <li key={index}>{text}</li>
                  ))}
               </ul>
            </section>

            <section>
               <>
                  {Object.keys(project).filter(key => key === 'development_tools').map((key, index) => (
                     <h2 key={index}>{key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
                  ))}
                  <ul>
                     {project.development_tools.map((tools, index) =>
                        <li key={index}>{tools}</li>
                     )}
                  </ul>
               </>

               <>
                  {Object.keys(project).filter(key => key === 'development_language').map((key, index) => (
                     <h2 key={index}>{key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
                  ))}
                  <ul>
                     {project.development_language.map((lang, index) =>
                        <li key={index}>{lang}</li>
                     )}
                  </ul>
               </>
            </section>

            <section>
               <Link to={project.project_link} aria-label="link to live site"><IoIosCloudOutline /></Link>
               <Link to={project.github_link} aria-label="link to GitHub"><IoLogoGithub /></Link>
            </section>

         </main>
      </>
   )
}
export default Project
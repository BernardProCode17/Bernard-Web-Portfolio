import { GlobalContext } from "../../Context/GlobalContext";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { IoIosCloudOutline, IoLogoGithub } from "react-icons/io";
import Head from "../../Functions/head";

import './ProjectPage.css'
import SectionHeader from '../../Components/Reusable/SectionHeader'

function Project() {
   const { slug } = useParams()
   const title = `${slug} - Bernard Web Portfolio`
   const { shortProject, urlFor } = useContext(GlobalContext)
   const project = shortProject.find(proslug => proslug.slug === slug)
   const LDArray = project.long_description.flatMap(subarray => subarray.map(item => item.text))
   const FDArray = project.featured_description.flatMap(subarray => subarray.map(item => item.text))
   const projectTitle = <h1>{project.project_name}</h1>;

   return (
      <>
         {Head(title)}

         <main className="project__main">
            <SectionHeader title={projectTitle} />
            <img src={project.project_image && urlFor(project.project_image).url()} alt="" className="project__image--project" />

            <article className="project__article">
               {Object.keys(project).filter(key => key === 'long_description').map((key, index) => (
                  <h2 key={index} className="project__h2">{'Full ' + key.slice(5, 6).toUpperCase() + key.slice(6).toLowerCase()}</h2>
               ))}
               {LDArray.map((text, index) => (
                  <p key={index}>{text}</p>
               ))}
            </article>

            <section className="project__features">
               {Object.keys(project).filter(key => key === 'featured_description').map((key, index) => (
                  <h2 key={index}>{key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
               ))}
               <ul>
                  {FDArray.map((text, index) => (
                     <li key={index}>{text}</li>
                  ))}
               </ul>
            </section>

            <section className="project__DevLangTools">
               <div className="project__devTools">
                  {Object.keys(project).filter(key => key === 'development_tools').map((key, index) => (
                     <h2 key={index}>{key.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
                  ))}
                  <ul>
                     {project.development_tools.map((tools, index) =>
                        <li key={index}>{tools}</li>
                     )}
                  </ul>
               </div>

               <div className="project__devLang">
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

            <section className="project__links">
               <Link to={project.project_link} aria-label="link to live site"><IoIosCloudOutline /></Link>
               <Link to={project.github_link} aria-label="link to GitHub"><IoLogoGithub /></Link>
            </section>

         </main>
      </>
   )
}
export default Project
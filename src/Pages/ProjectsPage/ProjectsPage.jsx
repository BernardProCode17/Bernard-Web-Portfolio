import { useContext } from "react";
import Head from "../../Functions/head";
import { GlobalContext } from '../../Context/GlobalContext'
import ProjectCard from "../../Components/Card/ProjectCards";
import ContactComp from "../../Components/Contact/Contact";
import './ProjectsPages.css'
import SectionHeader from '../../Components/Reusable/SectionHeader'
import SectionFooter from '../../Components/Reusable/SectionFooter'

function Projects() {
   const { homeText } = useContext(GlobalContext)
   // const title = 'Projects - Bernard Web Portfolio'
   const title = <h1>{homeText?.[0]?.[0]?.textContent}</h1>
   const subtitle = <p>{homeText?.[0]?.[1]?.textContent}</p>

   return (
      <>
         <main className="project">

            <section>
               <ProjectCard />
            </section>

            <ContactComp />
         </main>
      </>

   )
}
export default Projects;
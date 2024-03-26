import { useContext } from "react";
import Head from "../../Functions/head";
import { GlobalContext } from '../../Context/GlobalContext'
import ProjectCard from "../../Components/Card/ProjectCards";
import ContactComp from "../../Components/Contact/Contact";
import './ProjectsPages.css'
import SectionHeader from '../../Components/Reusable/SectionHeader'

function Projects() {
   const { homeText, icon_logo } = useContext(GlobalContext)
   const title = <h1 className="projects__h1">{homeText?.[0]?.[0]?.textContent}</h1>
   const subtitle = <p className="project__subtitle">{homeText?.[0]?.[1]?.textContent}</p>

   return (
      <>
         <main className="main__projects">
            <SectionHeader title={title} subTitle={subtitle} logo={icon_logo}/>

            <section className="projects__section">
               <ProjectCard />
            </section>

            <ContactComp />
         </main>
      </>

   )
}
export default Projects;
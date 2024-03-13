import { useContext} from "react";
import Head from "../../Functions/head";
import {GlobalContext} from '../../Context/GlobalContext'
import ProjectCard from "../../Components/Card/ProjectCards";
import ContactComp from "../../Components/Contact/Contact";

function Projects() {
 const {homeText} = useContext(GlobalContext)
  const title = 'Projects - Bernard Web Portfolio'


   return (
      <>
      {Head(title)}
      <main>
         <section>
            <h1>{homeText?.[0]?.[0]?.textContent}</h1> 
            <p>{homeText?.[0]?.[1]?.textContent}</p>
         </section>

         <section>
            <ProjectCard />
         </section>

         <ContactComp />
      </main>
      </>

   )
}
export default Projects;
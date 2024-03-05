import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../Components/Card/ProjectCards";
import ContactComp from "../../Components/Contact/Contact";

function Projects() {

   useEffect(() => {
      document.title = 'Projects - Bernard Web Portfolio';
    }, [])

   return (

      <main>

         <section>
            <h1>Projects</h1>
            <p>Lorem ipsum dolor sit amet.</p>
         </section>

         <section>
            <ProjectCard />
         </section>

         <ContactComp />
      </main>

   )
}
export default Projects;
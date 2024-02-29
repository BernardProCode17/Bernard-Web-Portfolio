import { Link } from "react-router-dom";
import ProjectCard from "../../Components/Card/ProjectCards";
import ContactComp from "../../Components/Contact/Contact";
import HeaderBar from "../../Components/HeaderBar/HeaderBar";

function Projects() {

   return (
      <>
         <header>
            <HeaderBar />
         </header>

         <main>
            <section>
               <h1>Projects</h1>
               <p>Lorem ipsum dolor sit amet.</p>
            </section>

            <section>
               <Link>
                  <ProjectCard />
               </Link>

               <Link>
                  <ProjectCard />
               </Link>

               <Link>
                  <ProjectCard />
               </Link>
            </section>

            <ContactComp />
         </main>

      </>
   )
}
export default Projects;
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Cards";
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
                  <Card />
               </Link>

               <Link>
                  <Card />
               </Link>

               <Link>
                  <Card />
               </Link>
            </section>

            <ContactComp />
         </main>

      </>
   )
}
export default Projects;
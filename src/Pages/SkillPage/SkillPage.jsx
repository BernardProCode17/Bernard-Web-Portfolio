import { useEffect } from "react";
import SkillsCard from "../../Components/Card/SkillsCards";
import ContactComp from "../../Components/Contact/Contact";
import Facets from "../../Components/Facets/Facets";

function Skills() {

   useEffect(() => {
      document.title = 'Skills - Bernard Web Portfolio';
    }, [])

   return (
      <>
         <main>
            <section>
               <h1>Skills</h1>
               <p>View My featured Career Skills</p>
            </section>

            <section>
               <SkillsCard />
            </section>

            <section>
               <Facets />
            </section>

            <ContactComp />
         </main>
      </>
   )
}
export default Skills;
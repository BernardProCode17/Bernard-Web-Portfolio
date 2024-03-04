import SkillsCard from "../../Components/Card/SkillsCards";
import ContactComp from "../../Components/Contact/Contact";
import Facets from "../../Components/Facets/Facets";

function Skills() {

   return (
      <>
         <main>
            <section>
               <h1>Skills</h1>
               <p>Lorem ipsum dolor sit amet.</p>
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
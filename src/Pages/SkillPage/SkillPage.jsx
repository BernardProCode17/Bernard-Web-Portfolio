import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import SkillsCard from "../../Components/Card/SkillsCards";
import ContactComp from "../../Components/Contact/Contact";
import Facets from "../../Components/Facets/Facets";

function Skills() {
   const { homeText } = useContext(GlobalContext)

   useEffect(() => {
      document.title = 'Skills - Bernard Web Portfolio';
   }, [])

   return (
      <>
         <main>
            <section>
               {/* <h1>{homeText[1][0].textContent}</h1> 
               <p>{homeText[1][1].textContent}</p> */}
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
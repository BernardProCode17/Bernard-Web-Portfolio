import { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import SkillsCard from "../../Components/Card/SkillsCards";
import Libraries_frameworks from '../../Components/Card/SkillsCards_Libraries_frameworks'
import ContactComp from "../../Components/Contact/Contact";
import Facets from "../../Components/Facets/Facets";

function Skills() {
   const { homeText } = useContext(GlobalContext)

   useEffect(() => {
      document.title = 'Skills - Bernard Web Portfolio';
   }, [])
// console.log(homeText[1])
   return (
      <>
         <main>
            <section>
               <h1>{homeText[1][0] && homeText[1][0].textContent}</h1> 
               <p>{homeText[1][1] && homeText[1][1].textContent}</p>
            </section>

            <section>
               <h2>{homeText[1][2] && homeText[1][2].textContent}</h2>
               <SkillsCard />
            </section>

            <section>
               <h2>{homeText[1][3] && homeText[1][3].textContent}</h2>
               <Libraries_frameworks />
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
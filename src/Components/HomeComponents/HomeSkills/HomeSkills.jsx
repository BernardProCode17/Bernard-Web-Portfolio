
import { useContext } from "react"
import { Link } from 'react-router-dom';
import SkillsCardHome from "../../Card/SkillsCardHome";
import { GlobalContext } from '../../../Context/GlobalContext';

function HomeSkills() {
   const { homeText } = useContext(GlobalContext)
   return (
      <section>
         <h2>{homeText?.[3]?.[6]?.textContent}</h2>
         <p>{homeText?.[3]?.[7]?.textContent}</p>

         <section>
            <Link to={'/skills'} aria-label="go to skills">
               <SkillsCardHome />
            </Link>
         </section>

         <Link to={'/skills'} aria-label="skills">{homeText?.[3]?.[6]?.textContent}</Link>
      </section>
   )
}
export default HomeSkills;
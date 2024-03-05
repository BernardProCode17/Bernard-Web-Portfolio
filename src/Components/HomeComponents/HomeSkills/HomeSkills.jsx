
import { useContext } from "react"
import { Link } from 'react-router-dom';
import SkillsCardHome from "../../Card/SkillsCardHome";
import { GlobalContext } from '../../../Context/GlobalContext';

function HomeSkills() {
   const {homeText} = useContext(GlobalContext)
  console.table(homeText)
   return (
      <section>
         <h2>{homeText[0][6].textContent}</h2>
         <p>{homeText[0][7].textContent}</p>

         <section>
            <Link to={'/skills'}>
               <SkillsCardHome />
            </Link>
         </section>

         <Link to={'/skills'}>p</Link>
      </section>
   )
}
export default HomeSkills;
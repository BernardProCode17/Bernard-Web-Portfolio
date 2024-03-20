import { useContext } from "react"
import { Link } from 'react-router-dom';
import SkillsCardHome from "../../Card/SkillsCardHome";
import { GlobalContext } from '../../../Context/GlobalContext';
import SectionHeader from '../../Reusable/SectionHeader';
import SectionFooter from '../../Reusable/SectionFooter';
import './HomeSkill.css'
function HomeSkills() {
   const { homeText } = useContext(GlobalContext)
   const title = <h2>{homeText?.[3]?.[6]?.textContent}</h2>
   const subTitle =  <p>{homeText?.[3]?.[7]?.textContent}</p>
   return (
      <section className="skills__home">
       <SectionHeader title={title} subTitle={subTitle}/>
         
        

         <section className="skills__home-cards">
               <SkillsCardHome />          
         </section>

         <Link to={'/skills'} aria-label="skills" className="skills__home__link">{homeText?.[3]?.[6]?.textContent}</Link>

         <SectionFooter/>
      </section>
   )
}
export default HomeSkills;
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import './SkillsCardHome.css'

function SkillsCardHome() {
   const { language, urlFor } = useContext(GlobalContext);
   const [homeSkills, SetHomeSkills] = useState([])
const orderLang = ['HTML', 'JavaScript', 'PHP' ]
   useEffect(() => {
      const selectedLanguage = language.filter(lang => ['HTML', 'PHP', 'JavaScript'].includes(lang.language_name))
      SetHomeSkills(selectedLanguage)
   }, [language])

   return (
      <>
         {homeSkills.sort((a, b) => orderLang.indexOf(a.language_name) - orderLang.indexOf(b.language_name)).map((lang, index) => (
            <Link to={'/skills'} key={index} className="skill__Card">
               <article className="skill__home__cards" >
                  <h3 className="skill__home__h3">{lang.language_name}</h3>
                  <img src={lang.language_icon && urlFor(lang.language_icon).url()} alt="" className="Skill__home__img" />
               </article>
            </Link>
         ))}
      </>
   );
}
export default SkillsCardHome;

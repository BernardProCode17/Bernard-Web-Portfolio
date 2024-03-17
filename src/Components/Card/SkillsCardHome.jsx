import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function SkillsCardHome() {
   const { language, urlFor } = useContext(GlobalContext);

   return (
      <>
         {language.map((lang, index) => (
            <article className="card" key={index}>
               <h3>{lang.language_name}</h3>
               <img src={lang.language_icon && urlFor(lang.language_icon).url()} alt="" style={{width: '50px'}} />
            </article>
         ))}
      </>
   );
}
export default SkillsCardHome;
 
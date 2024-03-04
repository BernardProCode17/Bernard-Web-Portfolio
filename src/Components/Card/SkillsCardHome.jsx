import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function SkillsCardHome() {
   const language = useContext(GlobalContext)

   return (
      <>
         {language.language.map((lang, index) => (
            <article className="card" key={index}>
               <h3>{lang.language_name}</h3>
               <p></p>
               {/* <img src={icon} alt="" /> */}
            </article>
         ))}
      </>
   );
}
export default SkillsCardHome;

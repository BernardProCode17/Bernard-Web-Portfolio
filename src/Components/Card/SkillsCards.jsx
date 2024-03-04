import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function SkillsCard() {
   const {language} = useContext(GlobalContext);
   const [selectedItem, setSelectedItem] = useState(null);
 
   function dropDownToggle(index) {
      setSelectedItem(selectedItem === index ? null : index);
   }

   return (
      <>
         {language.map((lang, index) => (
            <div key={index}>
               <button onClick={() => dropDownToggle(index)}>
                  <h3>{lang.language_name}</h3>
               </button>

               {selectedItem === index && (
                  <article className="card">
                     <p>This for drop down</p>
                     {/* <img src={icon} alt="" /> */}
                  </article>
               )}
            </div>
         ))}
      </>
   );
}
export default SkillsCard;

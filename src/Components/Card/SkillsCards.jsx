import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function SkillsCard() {
   const language = useContext(GlobalContext);
   const [selectedItem, setSelectedItem] = useState(null);

   function dropDownToggle(index) {
      setSelectedItem(selectedItem === index ? null : index);
   }

   return (
      <>
         {language.language.map((lang, index) => (
            <button key={index} onClick={() => dropDownToggle(index)}>

               <article className="card">
                  <h3>{lang.language_name}</h3>
                  {selectedItem === index && <p>This for drop down</p>}
                  {/* <img src={icon} alt="" /> */}
               </article>
               
            </button>
         ))}
      </>
   );
}
export default SkillsCard;

import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function SkillsCard() {
   const { language, urlFor } = useContext(GlobalContext);
   const [selectedItem, setSelectedItem] = useState(null);
   const [doubleClickedItem, setDoubleClickedItem] = useState(null);

   console.log(language)
   function dropDownToggle(index) {
      setSelectedItem(selectedItem === index ? null : index);
   }
   
   function handleDoubleClick(index) {
      setDoubleClickedItem(doubleClickedItem === index ? null : index);
      setSelectedItem(null);
   }

   return (
      <>
         {language.map((lang, index) => (
            <div key={index}>
               <button onClick={() => dropDownToggle(index)} onDoubleClick={() => handleDoubleClick(index)}>
                  <h3>{lang.language_name}</h3>
               </button>

               {(selectedItem === index || doubleClickedItem === index) && (
                  <article className="card">
                     <p>This for drop down</p>

                     <img src={urlFor(language[selectedItem].icon).url()} alt="" />
                  </article>
               )}
            </div>
         ))}
      </>
   );
}



export default SkillsCard;

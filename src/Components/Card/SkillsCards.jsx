import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function SkillsCard() {
   const { language, urlFor } = useContext(GlobalContext);
   const [selectedItem, setSelectedItem] = useState(null);

   // console.log(language)

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
                     <ul>
                        {language[selectedItem].language_list.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                     </ul>

                     {/* <img src={urlFor(language[selectedItem].icon).url()} alt={language.language_alt} /> */}
                  </article>
               )}
            </div>
         ))}
      </>
   );
}



export default SkillsCard;

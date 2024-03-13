import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function SkillsCard() {
   const { language, urlFor } = useContext(GlobalContext);
   const [selectedItem, setSelectedItem] = useState(null);

   console.log(language)

   function dropDownToggle(index) {
      setSelectedItem(selectedItem === index ? null : index);
   }

   return (
      <>
         {language.map((lang, index) => (
            <div key={index}>
               <button onClick={() => dropDownToggle(index)} aria-label="view more information">
                  <h3>{lang.language_name}</h3>
               </button>

               {selectedItem === index && (

                  <article className="card">
                     <p>{language[selectedItem].language_description}</p>
                     <ul>
                        {language[selectedItem].language_list && language[selectedItem].language_list.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                     </ul>

                     <img src={language[selectedItem].language_icon && urlFor(language[selectedItem].language_icon).url()} alt={language.language_alt} />
                  </article>
               )}
            </div>
         ))}
      </>
   );
}



export default SkillsCard;

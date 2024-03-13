import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";

function SkillsCard() {
   const { libraries, urlFor } = useContext(GlobalContext);
   const [selectedItem, setSelectedItem] = useState(null);

   function dropDownToggle(index) {
      setSelectedItem(selectedItem === index ? null : index);
   }

   return (
      <>
         {libraries.map((lang, index) => (
            <div key={index}>
               <button onClick={() => dropDownToggle(index)} aria-label="View more information">
                  <h3>{lang.language_name}</h3>
               </button>

               {selectedItem === index && (

                  <article className="card">
                     <p>{libraries[selectedItem].language_description}</p>
                     <ul>
                        {libraries[selectedItem].language_list && libraries[selectedItem].language_list.map((item, index) => (
                           <li key={index}>{item}</li>
                        ))}
                     </ul>

                     <img src={libraries[selectedItem].language_icon && urlFor(libraries[selectedItem].language_icon).url()} alt={libraries.language_alt} />
                  </article>
               )}
            </div>
         ))}
      </>
   );
}



export default SkillsCard;

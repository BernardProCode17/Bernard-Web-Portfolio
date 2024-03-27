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
            <li key={index} className="skills__libFrm__list-li">
               <button onClick={() => dropDownToggle(index)} aria-label="View more information" className="skills__libFrm__list-link">
                  <h3>{lang.language_name}</h3>
               </button>

               {selectedItem === index && (

                  <article className="card card__libFrm--skills">
                     <p className="card__libFrm__skills--brief">{libraries[selectedItem].language_description}</p>
                     <ul className="card__libFrm__skills--concept">
                        {libraries[selectedItem].language_list && libraries[selectedItem].language_list.map((item, index) => (
                           <li key={index} className="card__libFrm__skills--list">{item}</li>
                        ))}
                     </ul>

                     <img src={libraries[selectedItem].language_icon && urlFor(libraries[selectedItem].language_icon).url()} alt={libraries.language_alt} className="card__libFrm__skills--img"/>
                  </article>
               )}
            </li>
         ))}
      </>
   );
}



export default SkillsCard;

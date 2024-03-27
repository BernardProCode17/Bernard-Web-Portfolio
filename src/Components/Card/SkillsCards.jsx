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
            <li key={index} className="skills__lang__list--li">
               <button onClick={() => dropDownToggle(index)} aria-label="view more information" className="skills__lang__list--link">
                  <h3>{lang.language_name}</h3>
               </button>
               {selectedItem === index && (

                  <article className="card card__lang--skills">
                     <p className="card__lang__skills--brief">{language[selectedItem].language_description}</p>
                     <ul className="card__lang__skills--concepts">
                        {language[selectedItem].language_list && language[selectedItem].language_list.map((item, index) => (
                           <li key={index} className="card__lang__skills--list">{item}</li>
                        ))}
                     </ul>

                     <img src={language[selectedItem].language_icon && urlFor(language[selectedItem].language_icon).url()} alt={language.language_alt} className="card__lang__skills--img" />
                  </article>
               )}
            </li>
         ))}
      </>
   );
}



export default SkillsCard;

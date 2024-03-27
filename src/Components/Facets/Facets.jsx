import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"
import { useState } from "react";

function Facets() {
   const [selectedItem, setSelectedItem] = useState(null)
   const { facet } = useContext(GlobalContext)

   //Didn't wrote this code
   const groupedFacets = facet.reduce((acc, item) => {
      const key = Object.keys(item);
      if (!acc[key]) {
         acc[key] = [];
      }
      acc[key].push(Object.values(item));
      return acc;
   }, {});

   function Toggle(index) {
      setSelectedItem(selectedItem === index ? null : index);
   }
   return (
      <>
         {
            Object.entries(groupedFacets).map(([key, values], index) => (
               <li key={index} className="skills__facets__list--li">

                  <button onClick={() => Toggle(index)} aria-label="Vew more information" className="skills__facets__list--link">
                     {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>

                  <ul className="skills__facets__listItem">
                     {selectedItem === index &&
                        values.map((value, i) => (
                           <li key={i} className="skills__facets__listItem--li">
                              {value}
                           </li>
                        ))
                     }
                  </ul>
               </li>

            ))
         }
      </>
   )

}
export default Facets
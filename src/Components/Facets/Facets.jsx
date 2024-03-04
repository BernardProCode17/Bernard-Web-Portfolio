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
               <div key={index}>

                  <button onClick={() => Toggle(index)}>
                     {key.charAt(0).toUpperCase()+key.slice(1)}
                  </button>
                  <div>

                  {selectedItem === index &&
                     values.map((value, i) => (
                        <p key={i}>
                           {value}
                        </p>
                     ))
                  }
                  </div>
               </div>

            ))
         }
      </>
   )

}
export default Facets
import { createContext, useState, useEffect } from "react";
import Client from "../Main Files/sanity";

const GlobalContext = createContext();

function Context({ children }) {

   /* Create a function outside of the global context to do the fetch */

   //Language Fetch
   const [language, setLanguage] = useState([])
   useEffect(() => {
      const languageQuery = `*[_type == 'language']
      {language_name, 'icon': language_icon.asset._ref}`;

      Client.fetch(languageQuery)
         .then((data) => {
            const languageData = data;
            setLanguage(languageData);
         })
         .catch(console.error);

   }, []);

   //Facet Fetch
   const [facet, setFacet] = useState([])
   useEffect(() => {
      const languageQuery = `*[_type == 'facets']
      {
        development,
        language,
        design
      }`;

      Client.fetch(languageQuery)
         .then((data) => {
            const facetData = data;
            console.log(facetData)
            setFacet(facetData);
         })
         .catch(console.error);
   }, [])

   console.log(facet)
   return (
      <GlobalContext.Provider value={{ language }}>
         {children}
      </GlobalContext.Provider>
   )
}
export { GlobalContext, Context }

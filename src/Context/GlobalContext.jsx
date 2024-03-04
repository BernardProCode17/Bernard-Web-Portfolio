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
      .then((data) => setLanguage(data))
      .catch(console.error);
      
   }, []);

   //Facet Fetch
   const [facet, setFacet] = useState([])
   useEffect(() => {
      const facetQuery = `*[_type == 'facets']
      {
        development,
        language,
        design
      }`;

      Client.fetch(facetQuery)
         .then((data) => setFacet(data))
         .catch(console.error);
      }, [])
   return (
      <GlobalContext.Provider value={{ language, facet }}>
         {children}
      </GlobalContext.Provider>
   )
}
export { GlobalContext, Context }

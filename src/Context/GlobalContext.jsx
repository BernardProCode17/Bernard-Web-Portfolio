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

   // Project Fetch
   const [shortProject, setShortProject] = useState([]);
   useEffect(() => {
      const Q1 = `*[_type == 'projects']
      {
        project_name,
        'slug': slug.current,
        short_description,
        'long_description': long_description[].children,
        'featured_description': featured_description[].children[],
        'project_image': project_image.asset._ref,
        development_tools,
        development_language,
        designDevelop,
        project_link,
        github_link
      }`;

      Client.fetch(Q1)
         .then((data) => {
            const projectData = data;
            setShortProject(projectData);
         })
         .catch(console.error);

   }, []);


   return (
      <GlobalContext.Provider value={{ language, facet, shortProject }}>
         {children}
      </GlobalContext.Provider>
   )
}
export { GlobalContext, Context }

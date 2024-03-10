import { createContext, useState, useEffect } from "react";
import Client from "../Main Files/sanity";
import ImageUrlBuilder from "@sanity/image-url";

const GlobalContext = createContext();

function Context({ children }) {

   /* Create a function outside of the global context to do the fetch */

   // Home Page Text Fetch
   const [homeText, setHomeText] = useState([]);
   useEffect(() => {
      const fetchHomeText = async () => {
         try {
            const data = await Client.fetch(`*[_type == "singletext"]`);
            const textValue = data.map((item) => item.textContent);
            setHomeText(textValue);
         } catch (error) {
            console.error(error);
         }
      };
      fetchHomeText();
   }, []);

   // About Page Article 
   const [about, setAbout] = useState([]);
   useEffect(() => {
      const fetchAbout = async () => {
         try {
            const aboutText = await Client.fetch(`*[_type == 'paragraph']{'About':body[].children[].text}`);
            setAbout(aboutText);
         } catch (error) {
            console.error(error);
         }
      };
      fetchAbout();
   }, []);

   //Language Fetch
   const [language, setLanguage] = useState([]);
   useEffect(() => {
      const fetchLanguage = async () => {
         try {
            const languageQuery = 
            `*[_type == 'language']
            {
               language_name,
               language_icon,
               language_list,
               language_alt
            }`;

            const data = await Client.fetch(languageQuery);
            setLanguage(data);
         } catch (error) {
            console.error(error);
         }
      };
      fetchLanguage();
   }, []);

   //Facet Fetch
   const [facet, setFacet] = useState([]);
   useEffect(() => {
      const fetchFacet = async () => {
         try {
            const facetQuery = `*[_type == 'facets']
            {
               development,
               language,
               design
            }`;

            const data = await Client.fetch(facetQuery);
            setFacet(data);
         } catch (error) {
            console.error(error);
         }
      };
      fetchFacet();
   }, []);

   // Project Fetch
   const [shortProject, setShortProject] = useState([]);
   useEffect(() => {
      const fetchShortProject = async () => {
         try {
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

            const data = await Client.fetch(Q1);
            const projectData = data;
            setShortProject(projectData);
         } catch (error) {
            console.error(error);
         }
      };
      fetchShortProject();
   }, []);

   // Media Fetch
   const [media, setMedia] = useState([]);
   useEffect(() => {
      const fetchMedia = async () => {
         try {
            const mediaQuery = `*[_type == 'media']`;
            const data = await Client.fetch(mediaQuery);
            setMedia(data);
         } catch (error) {
            console.error(error);
         }
      };
      fetchMedia();
   }, []);

   // Sanity Image URl Builder
   const builder = ImageUrlBuilder(Client);
   function urlFor(source) {
      return builder.image(source);
   }

   return (
      <GlobalContext.Provider value={{ language, facet, shortProject, homeText, about, urlFor, media }}>
         {children}
      </GlobalContext.Provider>
   )
}
export { GlobalContext, Context }

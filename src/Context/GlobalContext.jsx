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
            const aboutText = await Client.fetch(`*[_type == 'paragraph']`);
            const aboutTextValues = aboutText.map(item => item.body.map(block => block.children[0].text));
            setAbout(aboutTextValues);
         } catch (error) {
            console.error(error);
         }
      };
      fetchAbout();
   }, []);

   //Language and Libraries & Framework fetch
   const [language, setLanguage] = useState([]);
   const [libraries, setlibraries] = useState([]);
   useEffect(() => {

      // language fetch
      const fetchLanguage = async () => {
         try {
            const languageQuery =
               `*[_type == 'language' && library_framework == false]
            {
              language_name,
              'language_icon': language_icon.asset._ref,
              language_list,
              icon_alt,
              'language_description': language_description[0].children[0].text
            }`;

            const data = await Client.fetch(languageQuery);
            setLanguage(data);
         } catch (error) {
            console.error(error);
         }
      };

      // Library & framework Fetch
      const librariesFetch = async () => {
         try {
            const librariesQuery = `*[_type == 'language' && library_framework == true]
   {
     language_name,
     'language_icon': language_icon.asset._ref,
     language_list,
     icon_alt,
     'language_description': language_description[0].children[0].text
   }`;
            const data = await Client.fetch(librariesQuery);
            setlibraries(data);
         } catch (errror) {
            console.error(errror)
         }
      };

      fetchLanguage();
      librariesFetch()
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
            const imageRef = data.filter(item => Object.keys(item).lenght !== 0)
            setMedia(imageRef);
         } catch (error) {
            console.error(error);
         }
      };
      fetchMedia();
   }, []);

   // Links and URLS Fetch
   const [links, setLinks] = useState([])
   useEffect(() => {
      const fetchLinks = async () => {
         try {
            const linkQuery = `*[_type == 'links_urls']{links,linkStrings}`
            const fetch = await Client.fetch(linkQuery);
            setLinks(fetch[0])
         } catch (error) {
            console.error('Error', error)
         }
      }
      fetchLinks();
   }, []);

   // Sanity Image URl Builder
   const builder = ImageUrlBuilder(Client);
   function urlFor(source) {
      return builder.image(source);
   }

   return (
      <GlobalContext.Provider value={{ language, facet, shortProject, homeText, about, urlFor, media, libraries, links }}>
         {children}
      </GlobalContext.Provider>
   )
}
export { GlobalContext, Context }

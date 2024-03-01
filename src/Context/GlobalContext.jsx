import { createContext, useState, useEffect } from "react";
import Client from "../../src/Main Files/sanity";
export const GlobalContext = createContext({});

export const Context = ({children}) => {
   const [shortProject, setShortProject] = useState();

   useEffect(() => {
      // const Q1 = `*[_type == 'projects'] {project_name, short_description, development_tools, slug, project_image}`;
      // Removed the unused variable Q1

      // Removed the declaration of Q1 since it is not being used


      const Q2 = `*[_type == 'projects' && project_name == 'Student Administration Portal']
         {'featuredText': featured_description[0].children[0].text}`

         Client.fetch(Q2)
         .then((data) => {
            const projectData = data[0];
            console.log(typeof projectData)
            setShortProject(projectData);
         })
         .catch(console.error);

   }, []);

   console.log(shortProject)

   return (
      <GlobalContext.Provider value={{ shortProject }}>
         {children}
      </GlobalContext.Provider>
   )
}


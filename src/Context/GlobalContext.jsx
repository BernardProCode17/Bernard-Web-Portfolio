import { createContext, useState, useEffect } from "react";
import Client from "../Main Files/sanity";

const GlobalContext = createContext();

function Context({ children }) {

   //Language Skills State
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

   
   return (
      <GlobalContext.Provider value={{ language }}>
         {children}
      </GlobalContext.Provider>
   )
}
export { GlobalContext, Context }

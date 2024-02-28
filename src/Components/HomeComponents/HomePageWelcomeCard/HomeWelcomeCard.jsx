import { useEffect, useState } from "react";
import Client from '../../../Main Files/sanity'

function HomeWelcomeCard() {
   const [text, setText] = useState([]);

   useEffect(() => {
      Client
         .fetch(`*[_type == "singletext"]`)
         .then(data => {
            const textValue = data.map(item => item.textContent);
            setText(textValue);
         })
         .catch(console.error);
   }, []);

   console.log(text)
   return (
      <section>
         <h1>{text[0]}</h1>
         <p>{text[2]}</p>
         <p>{text[3]}</p>
         <p>{text[1]}</p>
      </section>
   )
}
export default HomeWelcomeCard;
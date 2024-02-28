import { useEffect, useState } from "react";
import Client from '../../../Main Files/sanity'

function HomeWelcomeCard() {
   const [text, setText] = useState(null);

   useEffect(() => {
      Client
      .fetch(`*[_type == "singletext"]{textContent}`)
         .then(data => setText(data))
         .then(console.log(data))
         .catch(console.error)
      }, [])
      
      console.log(data)
   return (
      <section>
         <h1>{text}</h1>
         <p>Front End Web Developer</p>
         <p>JavaScript</p>
         <p>Dynamic Web Apps</p>
      </section>
   )
}
export default HomeWelcomeCard;
import Client from '../../../Main Files/sanity';
import { useEffect, useState } from "react"
import Button from "../../Button/Button";
import ContactComp from "../../Contact/Contact";

function HomeContact() {
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

   return (
      <section>
         <h2>{text[4]}</h2>
         <p>Please Get in Contact with us</p>
         <ContactComp />
      </section>
   )
}
export default HomeContact;
import Client from '../../../Main Files/sanity';
import { useEffect, useState } from "react"
import Button from "../../Button/Button";
import SkillsCard from "../../Card/SkillsCards";

function HomeSkills() {
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
         <h2>{text[7]}</h2>
         <p>{text[8]}</p>

         <section>
            <SkillsCard />
         </section>
         
         <Button title={'Skills'} URL={'/skills'} />
      </section>
   )
}
export default HomeSkills;
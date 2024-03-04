import Client from '../../../Main Files/sanity';
import {useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import SkillsCardHome from "../../Card/SkillsCardHome";
// import { GlobalContext } from '../../../Context/GlobalContext';

function HomeSkills() {

   // ************
   /* Add the Global Context */
   const [text, setText] = useState([]);
   // const language = useContext(GlobalContext)
   // ************

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
            <Link to={'/skills'}>
               <SkillsCardHome />
            </Link>
         </section>

         <Link to={'/skills'}>Skills</Link>
      </section>
   )
}
export default HomeSkills;
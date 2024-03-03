import Client from '../../../Main Files/sanity';
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Button from "../../Button/Button";
import SkillsCard from "../../Card/SkillsCards";

function HomeSkills() {
   const [text, setText] = useState([]);
   const [shortSkills, setShortSkills] = useState([])


   useEffect(() => {
      Client
         .fetch(`*[_type == "singletext"]`)
         .then(data => {
            const textValue = data.map(item => item.textContent);
            setText(textValue);
         })
         .catch(console.error);
   }, []);

   useEffect(() => {
      const S1 = `*[_type == 'language']{language_name,'icon': language_icon.asset._ref}`;

      Client.fetch(S1)
         .then((data) => {
            const skillsData = data;
            //  console.log(skillsData)
            setShortSkills(skillsData);
         })
         .catch(console.error);

   }, []);

   return (
      <section>
         <h2>{text[7]}</h2>
         <p>{text[8]}</p>

         <section>
            <Link to={'/skills'}>
               {shortSkills.slice(0, 3).map((item, index) => (
                  <SkillsCard key={index} shortSkills={item} />
               ))}
            </Link>
         </section>

         <Link to={'/skills'}>Skills</Link>
      </section>
   )
}
export default HomeSkills;
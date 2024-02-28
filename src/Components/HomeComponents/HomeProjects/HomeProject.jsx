import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import Card from "../../Card/Cards";
import Client from '../../../Main Files/sanity'

function HomeProject() {
   const [text, setText] = useState([]);

   useEffect(() => {
      Client
         .fetch(`*[_type == "singletext"] | order(date asc)`)
         .then(data => {
            const textValue = data.map(item => item.textContent);
            setText(textValue);
         })
         .catch(console.error);
   }, []);


   return (
      <section>
         <h2>{text[0]}</h2>
         <p>{text[2]}</p>

         <section>
            <Card />
            <Card />
            <Card />
         </section>

         <Button title={'Projects'} URL={'/projects'} />
      </section>
   )
}
export default HomeProject;
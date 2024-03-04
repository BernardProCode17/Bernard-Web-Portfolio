import Client from '../../../Main Files/sanity';
import { useEffect, useState } from "react"
import Button from "../../Button/Button";
import Portrait from '../../../Media Assets/Personal Images/bernard_portrait.jpg';
function HomeAbout() {

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
         <h2>About</h2>
         <section>
            <img src={Portrait} alt="Portrait photo of me, posing professionally" style={{width: '100px'}}/>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem cupiditate quas fuga veritatis consequatur ipsam amet molestias qui eos totam quidem porro, modi iusto!</p>
         </section>

         <Button title={'About'} URL={'/about'} />
      </section>
   )
}
export default HomeAbout;
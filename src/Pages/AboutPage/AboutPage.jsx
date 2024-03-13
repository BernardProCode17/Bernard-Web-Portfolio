import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import AboutPhoto from '../../Media Assets/Personal Images/bernard_about_photo_opt.webp'
import ContactComp from '../../Components/Contact/Contact';
import Head from '../../Functions/head';

function About() {
   const { homeText, about } = useContext(GlobalContext)
   const title = 'About - Bernard Web Portfolio'


   return (
      <>
         {Head(title)}
         <main>
            <h1>{homeText?.[2]?.[0]?.textContent}</h1>
            {/* section 1 */}
            <section>
               <img src={AboutPhoto} alt="" style={{ width: '500px' }} />
               <article>
                  <h2>{homeText?.[2]?.[1]?.textContent}</h2>

                  {about.map((paragraph) => (paragraph.map((text, index) => (<p key={index}>{text}</p>))))}
               </article>
            </section>

            <div>

               {/* Section 2 - Image Gallery */}
               {/* use the picture tag to render the pictures */}
               {/* Refactor the HTML */}
               {/* <section>
               <section>
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               <img src="" alt="" />
               </section>
            </section> */}
            </div>

            <ContactComp />
         </main>
      </>
   )
}
export default About;
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import AboutPhoto from '../../Media Assets/Personal Images/bernard_about_photo_opt.webp'
import ContactComp from '../../Components/Contact/Contact';

function About() {
   const {homeText} = useContext(GlobalContext)
   console.table(homeText)

   useEffect(() => {
      document.title = 'About - Bernard Web Portfolio';
   }, [])

   return (
      <>
         <main>
            <h1>{homeText[2][0].textContent}</h1>
            {/* section 1 */}
            <section>
               <img src={AboutPhoto} alt="" style={{ width: '500px' }} />
               <article>
                  <h2>{homeText[2][1].textContent}</h2>
                  <p>This a block of text for my about section my on page.</p>
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
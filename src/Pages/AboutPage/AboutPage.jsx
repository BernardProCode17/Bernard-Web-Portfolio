import AboutPhoto from '../../Media Assets/Personal Images/bernard_about_photo.jpg'
import ContactComp from '../../Components/Contact/Contact';

function About() {

   return (
      <>
         <main>
            <h1>About</h1>
            {/* section 1 */}
            <section>
               <img src={AboutPhoto} alt="" style={{ width: '500px' }} />
               <article>
                  <h2>Bernard Clarke</h2>
                  <p>This a block of text for my about section my on page.</p>
               </article>
            </section>

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

            <ContactComp />
         </main>
      </>
   )
}
export default About;
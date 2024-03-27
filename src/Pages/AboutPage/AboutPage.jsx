import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import AboutPhoto from '../../Media Assets/Personal Images/bernard_about_photo_opt.webp'
import ContactComp from '../../Components/Contact/Contact';
import Head from '../../Functions/head';
import './AboutPage.css'
import SectionHeader from '../../Components/Reusable/SectionHeader'
// import ShuffleGallery from '../../Components/Image Gallery/ImageGallery';

function About() {
   const { homeText, about, media } = useContext(GlobalContext)
   const title = 'About - Bernard Web Portfolio'
   const pageTitle = <h1 className='about__title'>{homeText?.[2]?.[0]?.textContent}</h1>
   // const [imageArray, setImageArray] = useState([])
   // console.log(media)

   // useEffect(() => {
   //    if (media.length > 0) {
   //       const photos = media.filter(item => item.display_image === true);
   //       setImageArray(photos.map((photo) => { return photo.photo_video.asset._ref }))
   //    }
   // }, [media])

   // console.log(imageArray)


   return (
      <>
         {Head(title)}
         <main className='about__main'>
            <SectionHeader title={pageTitle}/>

            <section className='about__section'>
               <img src={AboutPhoto} alt="" style={{ width: '500px' }} className='about__section--image'/>
               <article className='about'>
                  <h2>{homeText?.[2]?.[1]?.textContent}</h2>

                  {about.map((paragraph) => (paragraph.map((text, index) => (<p key={index}>{text}</p>))))}
               </article>
            </section>
            
            {/* <div>
               <ShuffleGallery images={imageArray} />
            </div> */}

            <ContactComp />
         </main>
      </>
   )
}
export default About;
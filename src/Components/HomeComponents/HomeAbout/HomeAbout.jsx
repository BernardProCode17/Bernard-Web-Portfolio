import { useContext } from "react"
import { GlobalContext } from '../../../Context/GlobalContext';
import Button from "../../Button/Button";
import Portrait from '../../../Media Assets/Personal Images/bernard_about_photo_opt.webp';
import SectionHeader from '../../Reusable/SectionHeader';
import SectionFooter from '../../Reusable/SectionFooter';
import './HomeAbout.css'

function HomeAbout() {
   const { homeText } = useContext(GlobalContext)
   const title = <h2>{homeText?.[3]?.[8]?.textContent}</h2>
   const subTitle = <p>{homeText?.[3]?.[9]?.textContent}</p>
   return (
      <section className="about__home">
         <SectionHeader title={title} subTitle={subTitle}/>

         <section className="about__home-section">
            <img src={Portrait} alt="Portrait photo of me, posing professionally" className="about__home__photo"/>
            <p className="about__home__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem cupiditate quas fuga veritatis consequatur ipsam amet molestias qui eos totam quidem porro, modi iusto!</p>
         </section>

         <Button title={'About'} URL={'/about'} aria-label='go to about' className="about__home__link" />
         <SectionFooter />
      </section>
   )
}
export default HomeAbout;
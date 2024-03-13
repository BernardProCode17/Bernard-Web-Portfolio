import { useContext } from "react"
import { GlobalContext } from '../../../Context/GlobalContext';
import Button from "../../Button/Button";
import Portrait from '../../../Media Assets/Personal Images/bernard_about_photo_opt.webp';

function HomeAbout() {
   const { homeText } = useContext(GlobalContext)
   return (
      <section>
         {/* <h2>{homeText[3][8].textContent}</h2>
         <p>{homeText[3][9].textContent}</p> */}
         <section>
            <img src={Portrait} alt="Portrait photo of me, posing professionally" style={{ width: '100px' }} />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rem cupiditate quas fuga veritatis consequatur ipsam amet molestias qui eos totam quidem porro, modi iusto!</p>
         </section>

         <Button title={'About'} URL={'/about'} aria-label='go to about' />
      </section>
   )
}
export default HomeAbout;
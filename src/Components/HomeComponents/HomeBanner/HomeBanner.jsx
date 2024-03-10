import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import HomeWelcomeCard from "../HomePageWelcomeCard/HomeWelcomeCard";
import headerImage from "../../../Media Assets/Personal Images/bernard_header_photo_opt.webp"


function HomeBanner() {

   const {media} = useContext(GlobalContext)
   return (
      <section>
         <img src={headerImage} alt="Photo of me Bernard, posing professional with a smile" style={{ height: '500px', pointerEvents: 'none' }} />
         {/* <video src={media[1].video} autoPlay></video> */}
         <HomeWelcomeCard />
      </section>
   )
}
export default HomeBanner;
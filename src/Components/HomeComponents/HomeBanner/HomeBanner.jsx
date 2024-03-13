import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import HomeWelcomeCard from "../HomePageWelcomeCard/HomeWelcomeCard";
// import HeaderVideo from "../../../Media Assets/Videos/"


function HomeBanner() {

   const {media} = useContext(GlobalContext)
   return (
      <section>
         {/* <img src={headerImage} alt="Photo of me Bernard, posing professional with a smile" style={{ height: '500px', pointerEvents: 'none' }} /> */}
         {/* <video src={media[6].video} autoPlay muted loop onContextMenu={(e) => e.preventDefault()}></video> */}
         <HomeWelcomeCard />
      </section>
   )
}
export default HomeBanner;
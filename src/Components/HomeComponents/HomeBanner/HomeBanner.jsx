import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import HomeWelcomeCard from "../HomePageWelcomeCard/HomeWelcomeCard";
import './HomeBanner.css'


function HomeBanner() {
   const {media} = useContext(GlobalContext)
   return (
      <section className="banner">
         <video src={media?.[9]?.video} autoPlay muted loop onContextMenu={(e) => e.preventDefault()} className="banner__video" disablePictureInPicture={false}></video>
         <HomeWelcomeCard />
      </section>
   )
}
export default HomeBanner;
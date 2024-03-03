import HomeWelcomeCard from "../HomePageWelcomeCard/HomeWelcomeCard";
import headerImage from "../../../Media Assets/Personal Images/bernard_header_photo.jpg"


function HomeBanner() {

   return (
      <section>
         <img src={headerImage} alt="Photo of me Bernard, posing professional with a smile" style={{ height: '500px', pointerEvents: 'none' }} />
         <HomeWelcomeCard />
      </section>
   )
}
export default HomeBanner;
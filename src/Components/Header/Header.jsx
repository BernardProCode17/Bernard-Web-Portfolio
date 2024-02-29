import HomeWelcomeCard from "../HomeComponents/HomePageWelcomeCard/HomeWelcomeCard";
import headerImage from "../../Media Assets/Personal Images/bernard_header_photo.jpg"
import HeaderBar from "../HeaderBar/HeaderBar";

function Header() {

   return (
      <header>
         {/* Container for Navigation and Logo */}
         <HeaderBar />
         <section>
            <img src={headerImage} alt="Photo of me Bernard, posing professional with a smile" style={{height: '500px', pointerEvents: 'none'}}/>
            <HomeWelcomeCard />
         </section>


      </header>
   )
}
export default Header;
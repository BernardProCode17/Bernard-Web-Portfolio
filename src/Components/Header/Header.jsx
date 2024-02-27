import HomeWelcomeCard from "../HomePageWelcomeCard/HomeWelcomeCard";
import Christ from "../../Media Assets/Images/christ_the_redeemer.jpg"
import HeaderBar from "../HeaderBar/HeaderBar";

function Header() {

   return (
      <header>
         {/* Container for Navigation and Logo */}
         <HeaderBar />
         <section>
            <img src={Christ} alt="Photo of me Bernard, posing professional with a smile" />
            <HomeWelcomeCard />
         </section>


      </header>
   )
}
export default Header;
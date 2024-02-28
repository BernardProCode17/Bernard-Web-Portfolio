import ContactComp from "../../Components/Contact/Contact";
import Header from "../../Components/Header/Header";
import HomeAbout from "../../Components/HomeComponents/HomeAbout/HomeAbout";
import HomeContact from "../../Components/HomeComponents/HomeContact/HomeContact";
import HomeProject from "../../Components/HomeComponents/HomeProjects/HomeProject";
import HomeSkills from "../../Components/HomeComponents/HomeSkills/HomeSkills";

function Home() {

   return (
      <>
      <Header />
      <main>
         <HomeProject />
         <HomeSkills />
         <HomeAbout />
         <HomeContact />
      </main>
      </>
   );
}
export default Home;
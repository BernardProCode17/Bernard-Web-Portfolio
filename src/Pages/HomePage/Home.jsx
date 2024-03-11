import Head from "../../Functions/head";
import HomeBanner from "../../Components/HomeComponents/HomeBanner/HomeBanner";
import HomeAbout from "../../Components/HomeComponents/HomeAbout/HomeAbout";
import HomeContact from "../../Components/HomeComponents/HomeContact/HomeContact";
import HomeProject from "../../Components/HomeComponents/HomeProjects/HomeProject";
import HomeSkills from "../../Components/HomeComponents/HomeSkills/HomeSkills";

function Home() {
   const title = 'Home - Bernard Web Portfolio';

   return (
      <>
         {Head(title)}
         <main>
            <HomeBanner />
            <HomeProject />
            <HomeSkills />
            <HomeAbout />
            <HomeContact />
         </main>
      </>
   );
}
export default Home;
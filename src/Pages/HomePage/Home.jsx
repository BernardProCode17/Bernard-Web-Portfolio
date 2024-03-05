import { useEffect } from "react";
import HomeBanner from "../../Components/HomeComponents/HomeBanner/HomeBanner";
import HomeAbout from "../../Components/HomeComponents/HomeAbout/HomeAbout";
import HomeContact from "../../Components/HomeComponents/HomeContact/HomeContact";
import HomeProject from "../../Components/HomeComponents/HomeProjects/HomeProject";
import HomeSkills from "../../Components/HomeComponents/HomeSkills/HomeSkills";

function Home() {

   useEffect(() => {
      document.title = 'Home - Bernard Web Portfolio';
    }, [])

   return (
      <>
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
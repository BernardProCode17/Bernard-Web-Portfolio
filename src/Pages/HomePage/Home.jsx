
import HomeBanner from "../../Components/HomeComponents/HomeBanner/HomeBanner";
import HomeAbout from "../../Components/HomeComponents/HomeAbout/HomeAbout";
import HomeContact from "../../Components/HomeComponents/HomeContact/HomeContact";
import HomeProject from "../../Components/HomeComponents/HomeProjects/HomeProject";
import HomeSkills from "../../Components/HomeComponents/HomeSkills/HomeSkills";
import './Home.css'
import { Helmet } from "react-helmet";

function Home() {
   const title = 'Home - Bernard Web Portfolio';

   return (
      <>
         <Helmet>
            <meta charSet="UTF-8" />
            <meta name="description" content="Web portfolio for Bernard Clarke portfolio website" />
            <meta name="keywords" content="HTML, CSS, JavaScript, React, PHP, Projects, Web Developer, web developer, Web Development, web development, front-end, front-end developer, developer, websites, web site, custom website, web site builder, website builder, Bernard brand
Food Explorer,Food blogging site,Cuisine articles,Mind Set,WordPress,Health blog,Web development topics,Lorem Ipsum Type,JavaScript game,Student Administration Portal,PHP application,tudent database,School administration,Library Theater,Movie database application,React,TMBD API,Projects,PHP,CSS,Saas,JavaScript,HTML,Professional portrait photo,Matthew 22:37-39,Bernard A. Clarke" />
            <meta httpEquiv="X-UA-Compatible" content="IE=7" />
            <meta name="author" content="Bernard A. Clarke" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
         </Helmet>

         
         <main className="home__main">
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
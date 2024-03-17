import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";


function HomeWelcomeCard() {
   const { homeText } = useContext(GlobalContext)

   return (
      <section className="banner__welcome Welcome">
         <h1 className="welcome__h1">{homeText?.[3]?.[0]?.textContent}</h1>
         <p className="welcome__title">{homeText?.[3]?.[1]?.textContent}</p>
         <p className="welcome__skills">{homeText?.[3]?.[2]?.textContent}</p>
         <p className="welcome__brief">{homeText?.[3]?.[3]?.textContent}</p>
      </section>
   )
}
export default HomeWelcomeCard;
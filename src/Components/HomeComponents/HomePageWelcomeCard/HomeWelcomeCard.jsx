import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";


function HomeWelcomeCard() {
   const { homeText } = useContext(GlobalContext)

   return (
      <section>
         {/* <h1>{homeText[3][0] && homeText[3][0].textContent}</h1>
         <p>{homeText[3][1] && homeText[3][1].textContent}</p>
         <p>{homeText[3][2] && homeText[3][2].textContent}</p>
         <p>{homeText[3][3] && homeText[3][3].textContent}</p> */}
      </section>
   )
}
export default HomeWelcomeCard;
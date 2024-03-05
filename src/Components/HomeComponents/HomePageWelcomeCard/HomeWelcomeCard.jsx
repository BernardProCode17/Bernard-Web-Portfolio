import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";


function HomeWelcomeCard() {
   const { homeText } = useContext(GlobalContext)
   console.log(homeText[0])
   return (
      <section>
         <h1>{homeText[0][0].textContent}</h1>
         <p>{homeText[0][1].textContent}</p>
         <p>{homeText[0][2].textContent}</p>
         <p>{homeText[0][3].textContent}</p>
      </section>
   )
}
export default HomeWelcomeCard;
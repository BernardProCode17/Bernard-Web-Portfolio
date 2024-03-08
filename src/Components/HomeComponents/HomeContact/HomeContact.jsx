import { useContext } from "react"
import { GlobalContext } from '../../../Context/GlobalContext'
import ContactComp from "../../Contact/Contact";

function HomeContact() {
   const { homeText } = useContext(GlobalContext)
   console.table(homeText)
   return (
      <section>
         <h2>{homeText[3][10].textContent}</h2>
         <p>{homeText[3][11].textContent}</p>
         <ContactComp />
      </section>
   )
}
export default HomeContact;
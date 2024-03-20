import { useContext } from "react"
import { GlobalContext } from '../../../Context/GlobalContext'
import ContactComp from "../../Contact/Contact";
import './HomeContact.css'

function HomeContact() {
   const { homeText } = useContext(GlobalContext)

   return (
      <section className="contact__home">
         <h2 className="contact__home-h2">{homeText?.[3]?.[10]?.textContent}</h2>
         <p className="contact__home-p">{homeText?.[3]?.[11]?.textContent}</p>
         <ContactComp />
      </section>
   )
}
export default HomeContact;
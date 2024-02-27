import Button from "../../Button/Button";
import ContactComp from "../../Contact/Contact";

function HomeContact() {

   return (
      <section>
         <h2>Connection</h2>
         <p>Please Get in Contact with us</p>
         <ContactComp />
         <Button title={'Contact'} URL={'/contact'} />
      </section>
   )
}
export default HomeContact;
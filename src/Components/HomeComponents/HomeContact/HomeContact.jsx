import Button from "../../Button/Button";

function HomeContact(){

   return(
      <section>
         <h2>Connection</h2>
         <p>Please Get in Contact with us</p>
         <div>
            <span>U+1f50b</span>
            <span>U+1f4BB</span>
            <span>U+1f5a8</span>
         </div>
         <Button title={'Contact'} URL={'/contact'} />
      </section>
   )
}
export default HomeContact;
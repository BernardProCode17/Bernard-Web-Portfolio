import Button from "../../Button/Button";
import Card from "../../Card/Cards";

function HomeSkills() {

   return (
      <section>
         <h2>Skills</h2>
         <section>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </section>
         <Button title={'Skills'} URL={'/skills'} />
      </section>
   )
}
export default HomeSkills;
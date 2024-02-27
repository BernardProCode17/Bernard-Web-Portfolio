import Button from "../../Button/Button";
import Card from "../../Card/Cards";
function HomeProject() {
   return (
      <section>
         <h2>Projects</h2>

         <section>
            <Card />
            <Card />
            <Card />
         </section>

         <Button title={'Projects'} URL={'/projects'}/>
      </section>
   )
}
export default HomeProject;
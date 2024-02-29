import SkillsCard from "../../Components/Card/SkillsCards";
import ContactComp from "../../Components/Contact/Contact";
import HeaderBar from "../../Components/HeaderBar/HeaderBar";

function Skills() {

   return (
      <>
         <header>
            <HeaderBar />
         </header>
         <main>

            <section>
               <h1>Skills</h1>
               <p>Lorem ipsum dolor sit amet.</p>
            </section>
            <SkillsCard />
            <section>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

               <button>
                  <Card />
               </button>

            </section>

            <secction>
            </secction>

            <ContactComp />
         </main>
      </>
   )
}
export default Skills;
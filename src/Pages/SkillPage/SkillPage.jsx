import SkillsCard from "../../Components/Card/SkillsCards";
import ContactComp from "../../Components/Contact/Contact";
import HeaderBar from "../../Components/Header/Header";

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
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
               </button>

               <button>
                  <SkillsCard />
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
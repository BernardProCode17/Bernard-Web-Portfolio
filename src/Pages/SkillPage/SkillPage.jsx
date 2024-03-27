import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Head from "../../Functions/head";
import SkillsCard from "../../Components/Card/SkillsCards";
import Libraries_frameworks from '../../Components/Card/SkillsCards_Libraries_frameworks'
import ContactComp from "../../Components/Contact/Contact";
import Facets from "../../Components/Facets/Facets";
import SectionHeader from "../../Components/Reusable/SectionHeader";
import './SkillPage.css'

function Skills() {
   const { homeText } = useContext(GlobalContext)
   const title = 'Skills - Bernard Web Portfolio'
   const pageTitle = <h1>{homeText?.[1]?.[0]?.textContent}</h1>;
   const pageSubTtitle = <p>{homeText?.[1]?.[1]?.textContent}</p>
   return (
      <>
         {Head(title)}
         <main className="skills__main">
            <SectionHeader title={pageTitle} subTitle={pageSubTtitle} />

            <section className="skills__lang">
               <h2 className="skills__lang-title">{homeText?.[1]?.[2]?.textContent}</h2>
               <ul className="skills__lang__list ">
                  <SkillsCard />
               </ul>
            </section>

            <section className="skills__libFrm">
               <h2 className="skills__libFrm--title">{homeText?.[1]?.[3]?.textContent}</h2>
               <ul className="skills__libFrm--list">
                  <Libraries_frameworks />
               </ul>
            </section>

            <section className="skills__facets">
               <ul className="skills__facets--list">
                  <Facets />
               </ul>
            </section>

            <ContactComp />
         </main>
      </>
   )
}
export default Skills;
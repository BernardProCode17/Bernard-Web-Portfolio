import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import Button from "../../Button/Button";
import ProjectCard from "../../Card/ProjectCards";
import SectionHeader from "../../Reusable/SectionHeader";

import './HomeProject.css'
import SectionFooter from "../../Reusable/SectionFooter";

function HomeProject() {
  const { homeText } = useContext(GlobalContext)
const title = <h2>{homeText?.[3]?.[4]?.textContent}</h2>
const subTitle = <p>{homeText?.[3]?.[5]?.textContent}</p>

  return (
    <section className="projects__home">
      <SectionHeader title={title} subTitle={subTitle}/>

      <section className="projects__home__cards">
        <ProjectCard limit={4} homePage={true}/>
      </section>

      <Button title={"Projects"} URL={"/projects"} aria-label='go to projects' />
      <SectionFooter />
    </section>
  );
}
export default HomeProject;

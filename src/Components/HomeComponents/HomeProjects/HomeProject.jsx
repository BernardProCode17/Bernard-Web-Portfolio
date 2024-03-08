import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import Button from "../../Button/Button";
import ProjectCard from "../../Card/ProjectCards";


function HomeProject() {
  const { homeText } = useContext(GlobalContext)

  return (
    <section>
      <h2>{homeText[3][4].textContent}</h2>
      <p>{homeText[3][5].textContent}</p>

      <section>
        <ProjectCard />
      </section>

      <Button title={"Projects"} URL={"/projects"} />
    </section>
  );
}
export default HomeProject;

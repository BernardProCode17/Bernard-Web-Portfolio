import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import ProjectCard from "../../Card/ProjectCards";
import Client from "../../../Main Files/sanity";

function HomeProject() {
  const [text, setText] = useState([]);
  const [shortProject, setShortProject] = useState();

  useEffect(() => {
    Client.fetch(`*[_type == "singletext"]`)
      .then((data) => {
        const textValue = data.map((item) => item.textContent);
        setText(textValue);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {

    const Q1 = `*[_type == 'projects'] {project_name, short_description, development_tools, slug, project_image}`;

    Client.fetch(Q1)
    .then((data) => {
      const projectData = data[0];
      console.log(projectData)
      setShortProject(projectData);
    })
    .catch(console.error);
 
  }, []);

  console.log(shortProject)

  return (
    <section>
      <h2>{text[0]}</h2>
      <p>{text[2]}</p>

      <section>
        {/* {shortProject.map((item, index) => (
          <ProjectCard key={index} shortProject={item} />
        ))} */}
      </section>

      <Button title={"Projects"} URL={"/projects"} />
    </section>
  );
}
export default HomeProject;

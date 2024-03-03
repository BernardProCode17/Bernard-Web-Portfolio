import { useEffect, useState} from "react";
// import {GlobalContext} from "../../../Context/GlobalContext";
import Button from "../../Button/Button";
import ProjectCard from "../../Card/ProjectCards";
import Client from "../../../Main Files/sanity";

function HomeProject() {
  const [text, setText] = useState([]);
  const [shortProject, setShortProject] = useState([]);

  // const {shortProject} = useContext(GlobalContext);
  // console.log(shortProject)

  useEffect(() => {
    Client.fetch(`*[_type == "singletext"]`)
      .then((data) => {
        const textValue = data.map((item) => item.textContent);
        setText(textValue);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const Q1 = `*[_type == 'projects' && short_description != null] 
    {
      project_name, 
      short_description, 
      slug, 
      project_image,
      'slug': slug.current    
    }`;

    Client.fetch(Q1)
      .then((data) => {
        const projectData = data;
        setShortProject(projectData);
      })
      .catch(console.error);

  }, []);
  
  return (
    <section>
      <h2>{text[0]}</h2>
      <p>{text[2]}</p>

      <section>
        {shortProject.slice(0, 3).map((item, index) => (
          <ProjectCard key={index} shortProject={item} />
        ))}
      </section>

      <Button title={"Projects"} URL={"/projects"} />
    </section>
  );
}
export default HomeProject;

import { useEffect, useState} from "react";
// import {GlobalContext} from "../../../Context/GlobalContext";
import Button from "../../Button/Button";
import ProjectCard from "../../Card/ProjectCards";
import Client from "../../../Main Files/sanity";

function HomeProject() {
  const [text, setText] = useState([]);

  useEffect(() => {
    Client.fetch(`*[_type == "singletext"]`)
      .then((data) => {
        const textValue = data.map((item) => item.textContent);
        setText(textValue);
      })
      .catch(console.error);
  }, []);
  
  return (
    <section>
      <h2>{text[0]}</h2>
      <p>{text[2]}</p>

      <section>
        <ProjectCard />
      </section>

      <Button title={"Projects"} URL={"/projects"} />
    </section>
  );
}
export default HomeProject;

import { useEffect, useState} from "react";
// import {GlobalContext} from "../../../Context/GlobalContext";
import Button from "../../Button/Button";
import ProjectCard from "../../Card/ProjectCards";
import Client from "../../../Main Files/sanity";

function HomeProject() {
  const [text, setText] = useState([]);
  useEffect(() => {
    Client.fetch(`*[_type == "singletext"]{textContent, _id}`)
    .then((data) => {
      const textValue = data.map((item) => ({text: item.textContent, id: item._id}));
      setText(textValue);
    })
    .catch(console.error);
  }, []);
  console.log(text)
  
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

import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import Card from "../../Card/Cards";
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
    const fetchData = async () => {
      try {
        const Q1 = `*[_type == 'projects'] {project_name, short_description, development_tools}`;
        const data = await Client.fetch(Q1);
        const projectData = data[0];
        setShortProject(projectData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

    console.log(shortProject);

  return (
    <section>
      <h2>{text[0]}</h2>
      <p>{text[2]}</p>

      <section>
        <Card projectData={shortProject} />
        <Card />
        <Card />
      </section>

      <Button title={"Projects"} URL={"/projects"} />
    </section>
  );
}
export default HomeProject;

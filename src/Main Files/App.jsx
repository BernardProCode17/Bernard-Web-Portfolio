import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Context } from "../Context/GlobalContext";
import Home from "../Pages/HomePage/Home";
import Projects from "../Pages/ProjectsPage/ProjectsPage";
import Skills from "../Pages/SkillPage/SkillPage";
import About from "../Pages/AboutPage/AboutPage";
import Project from "../Pages/ProjectPage/ProjectPage";
import Footer from "../Components/Footer/Footer";

function App() {

  return (
    // <Context.Provider>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/project:slug" Component={Project} />
          <Route path="/skills" Component={Skills} />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      </Router>
    // </Context.Provider>
  )
}

export default App

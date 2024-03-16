import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Context } from "../Context/GlobalContext";
import Home from "../Pages/HomePage/Home";
import Projects from "../Pages/ProjectsPage/ProjectsPage";
import Skills from "../Pages/SkillPage/SkillPage";
import About from "../Pages/AboutPage/AboutPage";
import Project from "../Pages/ProjectPage/ProjectPage";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import VerseOfTheDay from "../Bible Verse/Bibleverse";
import SkipToMain from "../Components/Button/skipToMain";

function App() {

  return (
    <Context>
      <Router>
        <SkipToMain />
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/project/:slug" Component={Project} />
          <Route path="/skills" Component={Skills} />
          <Route path="/about" Component={About} />
        </Routes>
        <VerseOfTheDay />
        <Footer />
      </Router>
    </Context>
  )
}

export default App

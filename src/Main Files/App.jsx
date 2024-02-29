import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Context from "../Context/GlobalContext";
import Home from "../Pages/HomePage/Home";
import Projects from "../Pages/ProjectsPage/ProjectsPage";
import Skills from "../Pages/SkillPage/SkillPage";
import Contact from "../Pages/ContactPage/ContactPage";
import About from "../Pages/AboutPage/AboutPage";
import Project from "../Pages/ProjectPage/ProjectPage";
import Header from "../Components/Header/Header";
import HeaderBar from "../Components/HeaderBar/HeaderBar";
import Footer from "../Components/Footer/Footer";

function App() {
  // const [header, setHeader] = useState(<Header />)
  // const location = useLocation();

  // useEffect(() => {

  //   if (location.pathname !== '/') {
  //     setHeader(<HeaderBar />);
  //   } else {
  //     setHeader(<Header />);
  //   }
  // }, [location]);

  return (
    <Router>
      {/* <Context.Provider value={header} > */}
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
        <Route path="/project:slug" Component={Project} />
        <Route path="/skills" Component={Skills} />
        <Route path="/about" Component={About} />
        {/* <Route path="/contact" Component={Contact} /> */}
      </Routes>
      <Footer />
      {/* <Context.Provider/> */}
    </Router>
  )
}

export default App

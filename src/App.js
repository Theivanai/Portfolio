// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Skills from './Pages/Skills';
// import Projects from './Pages/Projects';
// import Contact from './Pages/Contact';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/skills' element={<Skills />} />
//         <Route path='/projects' element={<Projects />} />
//         <Route path='/contact' element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import "./App.css";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      {/* Sections with IDs for scrolling */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;

import Banner from "./components/Banner";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar";
import Skills from "./components/Skills";

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Sidebar />
      <Navbar />
      <main>
        <Banner />
        <Skills />
        <Projects />
      </main>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

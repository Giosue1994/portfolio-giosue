import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;

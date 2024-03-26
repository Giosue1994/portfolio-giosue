import Banner from "./components/Banner";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;

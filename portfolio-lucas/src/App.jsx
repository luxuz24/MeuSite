// src/App.jsx
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Header from "./components/header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;

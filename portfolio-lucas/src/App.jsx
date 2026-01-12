// src/App.jsx
import "./App.css";
import Hero from "./components/hero";
import Projects from "./components/Projects";
import Header from "./components/header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      
      <Hero />
      <Projects />
      <Header />
      <Footer />
      {/* <Sobre /> */}
     
     
    </div>
  );
}

export default App;

import "./App.css";
import "./shared/gruvbox-dark.css";
import "./shared/bootstrap-theme.css";
import Banner from "./components/banner/banner.js";
import PresentacionCard from "./components/presentation-card/presentation-card";
import Navbar from "./components/navbar/navbar";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import { Toaster } from "sonner"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sebastian Diaz Torres",
      "url": "https://sebastiandiazweb.com",
      "sameAs": [
        "https://www.linkedin.com/in/sebastian-diaz-torres",
      ]
    });
    document.head.appendChild(script);
  })
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <div
        data-bs-target="#navbar-principal"
        data-bs-spy="scroll"
        data-bs-smooth-scroll="true"
        data-bs-root-margin="0px 0px -40%"
        tabIndex="0"
      >
        <Banner />
        <Experience />
        <PresentacionCard />
        <Projects />
      </div>
    </div>
  );
}

export default App;

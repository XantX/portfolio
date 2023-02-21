import "./App.css";
import "./shared/gruvbox-dark.css";
import "./shared/bootstrap-theme.css";
import Banner from "./components/banner/banner.js";
import PresentacionCard from "./components/presentation-card/presentation-card";
import Navbar from "./components/navbar/navbar";
import pdf from '../public/CV-SebastianDiazTorres.pdf';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        data-bs-target="#navbar-principal"
        data-bs-spy="scroll"
        data-bs-smooth-scroll="true"
        data-bs-root-margin="0px 0px -40%"
        tabIndex="0"
      >
        <Banner />
        <PresentacionCard />
        <a href={pdf} target="_blank" rel="noopener noreferrer" download="cv-sebastindiaztorres.pdf">CV</a>
      </div>
    </div>
  );
}

export default App;

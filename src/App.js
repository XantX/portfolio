import './App.css';
import './shared/gruvbox-dark.css'
import Banner from './components/banner/banner.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark background">
        <a className="gruv-nav-brand navbar-brand" href="https:\\google.com.pe">XantX</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <a className="gruv-nav-link nav-link" href="https:\\google.com.pe">About me</a>
            </li>
            <li className="nav-item">
              <a className="gruv-nav-link nav-link" href="https:\\google.com.pe">Experience</a>
            </li>
            <li className="nav-item">
              <a className="gruv-nav-link nav-link" href="https:\\google.com.pe">Projects</a>
            </li>
          </ul>
          <div className='icons-container me-4'>
            <a target={'_blank'} className="gruv-nav-link nav-link" href="https:\\github.com\XantX">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a target={'_blank'} className="gruv-nav-link nav-link" href="https:\\www.linkedin.com\in\sebastian-diaz-torres-43058a161">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </nav>
      <Banner />
    </div>
  );
}

export default App;

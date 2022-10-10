import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav
      class="sticky-top navbar navbar-expand-lg background"
      id="navbar-principal"
    >
      <div class="container-fluid">
        <a className="gruv-nav-brand" href="#top">
          XantX
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className=" gruv-nav-link" href="#about">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="gruv-nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="gruv-nav-link" href="#projects">
                Projects
              </a>
            </li>
          </ul>
          <div className="icons-container me-4">
            <a
              className="gruv-nav-link nav-link"
              href="https:\\github.com\XantX"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              className="gruv-nav-link nav-link"
              href="https:\\www.linkedin.com\in\sebastian-diaz-torres-43058a161"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import TraslateButton from "../traslate-button/traslate-button";
import { useTranslation } from "react-i18next";
import './navbar.css';

function Navbar() {
  const { t } = useTranslation('navbar')
  return (
    <nav
      className="sticky-top navbar navbar-expand-lg background"
      id="navbar-principal"
    >
      <div className="container-fluid">
        <a className="gruv-nav-brand" href="#top">
          XantX
        </a>

        <button
          className="navbar-toggler toogle-colors"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon toggle-colors-span"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className=" gruv-nav-link" href="#about">
                {t('about_me_section')}
              </a>
            </li>
            <li className="nav-item">
              <a className="gruv-nav-link" href="#experience">
                {t('experience_section')}
              </a>
            </li>
            <li className="nav-item">
              <a className="gruv-nav-link" href="#projects">
                {t('projects_section')}
              </a>
            </li>
          </ul>
          <div className="icons-container me-4">
            <a
              className="gruv-nav-link nav-link"
              href="https:\\github.com\XantX"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              className="gruv-nav-link nav-link"
              href="https:\\www.linkedin.com\in\sebastian-diaz-torres-43058a161"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <TraslateButton></TraslateButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

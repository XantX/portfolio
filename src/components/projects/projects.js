import "./project.css";
import { useEffect, useState } from "react";
import { myIcons } from "../../shared/icons-table";
import projectsEs from "../../files/projects-data-es.json";
import projectsEn from "../../files/projects-data-en.json";
import { useTranslation } from "react-i18next";
import RepoCard from "../github-card/repo-card";

function Projects() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { t, i18n } = useTranslation("projects");
  const [projectData, setProjectData] = useState(
    i18n.language === "es" ? projectsEs : projectsEn,
  );

  useEffect(() => {
    setProjectData(i18n.language === "es" ? projectsEs : projectsEn);
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [i18n.language]);

  return (
    <div id="projects" className="proyects-backgroung carrousel-container mt-5">
      <div className="text-center">
        <h1 className="color-aqua">{t("title")}</h1>
        <br />
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {projectData ? (
            projectData.projects.map((project, index) => (
              <div key={index} className={`carousel-item ${project.status}`}>
                <div className="container">
                  <div
                    className={`card ${screenWidth > 767 ? "text-start" : "text-center"}  proyect-card`}
                  >
                    <div className="card-body">
                      <div className="row card-content">
                        <div
                          className={
                            project.repoName
                              ? "col-md-6 col-sm-12 center"
                              : "col center"
                          }
                        >
                          <h5 className="card-title">{project.name}</h5>
                          <p className="card-text">{project.description}</p>
                          <div>
                            {project.tecnology.map((tecnology, index) => {
                              const Icon = myIcons.get(tecnology);
                              if (Icon) {
                                return (
                                  <Icon
                                    key={index}
                                    className="tech-icon-project"
                                  />
                                );
                              }
                              return null;
                            })}
                          </div>
                        </div>
                        {project.repoName ? (
                          <div className="col-md-6 col-sm-12 center">
                            <RepoCard repoName={project.repoName}></RepoCard>
                          </div>
                        ) : (
                          <div className="center">
                            <a
                              href={project.organization}
                              rel="noreferrer"
                              target="_blank"
                              className="btn btn-primary"
                            >
                              Go to project
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando..</p>
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Projects;

import "./work.css";
import { useEffect, useState } from "react";
import worksEs from "../../files/work-data-es.json";
import worksEn from "../../files/work-data-en.json";
import { useTranslation } from "react-i18next";

function Work() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { t, i18n } = useTranslation("works");
  const [workData, setWorkData] = useState(
    i18n.language === "es" ? worksEs : worksEn,
  );

  useEffect(() => {
    setWorkData(i18n.language === "es" ? worksEs : worksEn);
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [i18n.language]);

  return (
    <div id="works" className="works-backgroung carrousel-container mt-4 mb-4">
      <div className="container">
        <div className="text-center">
          <h1 className="color-aqua">{t("title")}</h1>
          <br />
        </div>
        <div className="row">
          { workData ? (
              workData.works.map((work, index) => (
                <div key={index} className="col-s-12 col-m-12 col-xl-4 mb-5">
                  <div className="card p-3">
                    <img src={work.organization} className="card-img mb-3" alt="product-logo"/>
                    <div className="card-body work-body">
                      <h5 class="card-title">{work.name}</h5>
                      <p className="card-text">{work.description}</p>
                      <a href={work.link} class="btn btn-primary">{t("work-link")}</a>
                    </div>
                  </div>
                </div>
              ))
          ) : (<p>Cargando..</p>)}
        </div>
      </div>
    </div>
  );
}

export default Work;

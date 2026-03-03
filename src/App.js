import "./App.css";
import "./shared/gruvbox-dark.css";
import "./shared/bootstrap-theme.css";
import { useTranslation } from "react-i18next";
import Banner from "./components/banner/banner.js";
import BookBanner from "./components/book-banner/book-banner.js";
import PresentacionCard from "./components/presentation-card/presentation-card";
import Navbar from "./components/navbar/navbar";
import ExperienceTimeline from "./components/experience/experience";
import ProjectShowcase from "./components/projects/projects";
import { Toaster } from "sonner"
import { useEffect, useState } from "react";
import  WorkShowcase from "./components/work/work.js";

import booksDataRawES from "./files/books-data-es.json";
import booksDataRawEN from "./files/books-data-en.json";

import projectsDataEs from "./files/projects-data-es.json"
import projectsDataEn from "./files/projects-data-en.json"

import experienceDataEs from './files/experience-data-es.json'
import experienceDataEn from './files/experience-data-en.json'

import workDataEs from './files/work-data-es.json'
import workDataEn from './files/work-data-en.json'

function App() {
  const { i18n } = useTranslation("books_data");

  const [workData, setWorkData] = useState(
    i18n.language === 'es' ? workDataEs: workDataEn
  );

  const [experienceData, setExperienceData] = useState(
    i18n.language === 'es' ? experienceDataEs : experienceDataEn
  );

  const [booksData, setBooksData] = useState(
    i18n.language === "es" ? booksDataRawES: booksDataRawEN,
  );

  const [projectsData, setProjectsData] = useState(
    i18n.language === "es" ? projectsDataEs: projectsDataEn,
  );

  useEffect(() => {
    setBooksData(i18n.language === "es" ? booksDataRawES: booksDataRawEN);
    setProjectsData(i18n.language === "es" ? projectsDataEs: projectsDataEn);
    setExperienceData(i18n.language === 'es' ? experienceDataEs : experienceDataEn)
    setWorkData(i18n.language === 'es' ? workDataEs: workDataEn)
  }, [i18n.language]);

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
        <PresentacionCard />
        <WorkShowcase works={workData.works}/>
        <ExperienceTimeline companies={experienceData.companies}/>
        <ProjectShowcase projects={projectsData.projects} />
        <BookBanner books={booksData}/>
      </div>
    </div>
  );
}

export default App;

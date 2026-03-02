import "./App.css";
import "./shared/gruvbox-dark.css";
import "./shared/bootstrap-theme.css";
import { useTranslation } from "react-i18next";
import Banner from "./components/banner/banner.js";
import BookBanner from "./components/book-banner/book-banner.js";
import PresentacionCard from "./components/presentation-card/presentation-card";
import Navbar from "./components/navbar/navbar";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import { Toaster } from "sonner"
import { useEffect, useState } from "react";
import Work from "./components/work/work.js";

import booksDataRawES from "./files/books-data-es.json";
import booksDataRawEN from "./files/books-data-en.json";

function App() {
  const { t, i18n } = useTranslation("books_data");
  const [booksData, setBooksData] = useState(
    i18n.language === "es" ? booksDataRawES: booksDataRawEN,
  );

  useEffect(() => {
    setBooksData(i18n.language === "es" ? booksDataRawES: booksDataRawEN);
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
        <Work />
        <Experience />
        <Projects />
        <BookBanner books={booksData}/>
      </div>
    </div>
  );
}

export default App;

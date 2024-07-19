import { useTranslation } from "react-i18next";
import ButtonTooltip from "../button-tooltip/button-tooltip";
import UserCard from "../github-card/user-card";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import pdf from '../../files/cv-sebastian-diaz-torres.pdf';
import "./banner.css"

function Banner() {
  const { t } = useTranslation('banner');
  return (
    <div className="banner-container text-wrap"  >
      <div className="row" id="home">
        <div className="col-lg-8 col-md-12 col-sm-12 center">
          <div>
            <h1 className="title  text-start">Sebastian Diaz</h1>
            <p className="subtitle">
              {t('greetings')}.
              <br />
              {t('main-skill')} <strong className="blue">{t('skill')}</strong>
            </p>
            <ButtonTooltip
              className="cta-download-resume"
              href={pdf}
              icon={faFileArrowDown}
              text={t('cv')}
              button_message="cv">
            </ButtonTooltip>
          </div>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 center">
          <UserCard></UserCard>
        </div>
      </div>
    </div>
  );
}

export default Banner;

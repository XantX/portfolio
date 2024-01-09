import { useTranslation } from "react-i18next";
import UserCard from "../github-card/user-card";
import "./banner.css"

function Banner() {
  const { t } = useTranslation('banner');
  return (
    <div className="banner-container text-wrap"  >
      <div className="row" id="home">
        <div className="col left">
          <h1 className="title">Sebastian Diaz</h1>
          <p className="subtitle">
              {t('greetings')}. 
              <br/>
              {t('main-skill')} <strong className="blue">{t('skill')}</strong></p>
        </div>
        <div className="col col-user-card">
          <UserCard></UserCard>
        </div>
      </div>
    </div>
  );
}

export default Banner;

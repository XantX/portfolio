import { useTranslation } from "react-i18next";
import UserCard from "../github-card/user-card";
import "./banner.css"

function Banner() {
  const { t } = useTranslation('banner');
  return (
    <div className="banner-container text-wrap"  >
      <div className="row" id="home">
        <div className="col left">
          <h1 className="title">{t('title')}</h1>
          <p className="subtitle">{t('greetings')} <strong className="blue">{t('name')}</strong> {t('ligature')} <strong className="blue">{t('aka')}</strong></p>
        </div>
        <div className="col">
          <UserCard></UserCard>
        </div>
      </div>
    </div>
  );
}

export default Banner;

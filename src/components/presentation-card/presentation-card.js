import "./presentation-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faReact, faCss3, faBootstrap, faJava, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next'
import SendCopyEmail from "../send-copy-email/send-copy-email";

function PresentacionCard() {
  const { t } = useTranslation('presentation_card')
  return (
    <div className="container pt-5 pb-5"  id="about">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fs-3 ">{t('title')}</h5>
          <p className="card-text">
            {t('first_paragraph')}
          </p>
          <p className="card-text">
            {t('second_paragraph')}
          </p>
          <p className="card-text">
            {t('third_paragraph')}
          </p>
          <p className="card-text">
            {t('fourth_paragraph')}
          </p>
          <p className="card-text">
            {t('fifth_paragraph')}
          </p>
          <p className="card-text">
            {t('sixth_paragraph')}
          </p>
          <SendCopyEmail></SendCopyEmail>
          <hr className="hr-color border border-2 opacity-100"></hr>
          <div className="row">
            <div className="col orange mt-2">
              <h5 className="card-title fs-4">{t('backend_skills_title')}</h5>
              <p className="card-text">
                {t('backend_skills_content')}
              </p>
              <div className="icons-container me-4">
                  <FontAwesomeIcon className="tech-icon" icon={faJava} />
                  <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
                  <FontAwesomeIcon className="tech-icon" icon={faPython} />
              </div>
            </div>
            <div className="col yellow mt-2">
              <h5 className="card-title fs-4">{t('frontend_skills_title')}</h5>
              <p className="card-text">
                {t('frontend_skills_content')}
              </p>
              <div className="icons-container me-4">
                <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
                <FontAwesomeIcon className="tech-icon" icon={faCss3} />
                <FontAwesomeIcon className="tech-icon" icon={faBootstrap} />
                <FontAwesomeIcon className="tech-icon" icon={faReact} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentacionCard;

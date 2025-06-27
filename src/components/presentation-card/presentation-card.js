import "./presentation-card.css";
import { faHtml5, faReact, faCss3, faBootstrap, faJava, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from 'react-i18next'
import SendCopyEmail from "../send-copy-email/send-copy-email";
import TechIcon from "../tech-icon/tech-icon";

function PresentacionCard() {
  const { t } = useTranslation('presentation_card')
  return (
    <div className="container pt-5 pb-5" id="about">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title fs-3 color-aqua">{t('title')}</h5>
          <p className="card-text">
            {t('first_paragraph')}
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
            <div className="col mt-2">
              <h5 className="orange card-title fs-4">{t('backend_skills_title')}</h5>
              <p className="card-text">
                {t('backend_skills_content')}
              </p>
              <div className="icons-container me-4">
                <TechIcon
                  name="Java"
                  icon={faJava}
                ></TechIcon>
                <TechIcon
                  name="NodeJs"
                  icon={faNodeJs}
                ></TechIcon>
                <TechIcon
                  name="Python"
                  icon={faPython}
                ></TechIcon>
              </div>
            </div>
            <div className="col mt-2">
              <h5 className="yellow card-title fs-4">{t('frontend_skills_title')}</h5>
              <p className="card-text">
                {t('frontend_skills_content')}
              </p>
              <div className="icons-container me-4">
                <TechIcon
                  name="Html"
                  icon={faHtml5}
                ></TechIcon>
                <TechIcon
                  name="Css"
                  icon={faCss3}
                ></TechIcon>
                <TechIcon
                  name="Bootstrap"
                  icon={faBootstrap}
                ></TechIcon>

                <TechIcon
                  name="React"
                  icon={faReact}
                ></TechIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentacionCard;

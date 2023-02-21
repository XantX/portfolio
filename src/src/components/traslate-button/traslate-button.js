import { useTranslation } from "react-i18next";
import i18n from "../../traslations/traslate-config";
import './traslate-button.css'
function TraslateButton () {
  const { t } = useTranslation('languages')
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className="traslation_dropdown">
      <select onChange={(e) => {changeLanguage(e.target.value)}}>
        <option value="es">{t('es')}</option>
        <option value="en">{t('en')}</option>
      </select>
    </div>
  );
}

export default TraslateButton;


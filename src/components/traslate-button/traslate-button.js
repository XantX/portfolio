import { useTranslation } from "react-i18next";
import i18n from "../../traslations/traslate-config";
import './traslate-button.css'
import { FaCaretDown } from 'react-icons/fa';
import { useRef, useState } from "react";
function TraslateButton() {
  const { t } = useTranslation('languages')
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  const toggleSelect = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      selectRef.current.focus()
    }
  }
  return (
    <div className="traslation_dropdown custom-select">
      <select
        ref={selectRef}
        onChange={(e) => { changeLanguage(e.target.value) }}>
        <option value="es">{t('es')}</option>
        <option value="en">{t('en')}</option>
      </select>
      <div onClick={toggleSelect} className="icon-container">
        <FaCaretDown></FaCaretDown>
      </div>
    </div>
  );
}

export default TraslateButton;


import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import github_traslation_es  from './es/user-github-card.json';
import github_traslation_en from './en/user-github-card.json';
import presentation_card_es from './es/presentation-card.json';
import presentation_card_en from './en/presentation-card.json';
import languages_en from './en/languages.json';
import languages_es from './es/languages.json'
import banner_en from './en/banner.json';
import banner_es from './es/banner.json';
import navbar_en from './en/navbar.json';
import navbar_es from './es/navbar.json';
import tooltip_messages_en from './en/tooptip-messages.json'
import tooltip_messages_es from './es/tooptip-messages.json'
import experience_data_es from './es/experience.json'
import experience_data_en from './en/experience.json'
import project_data_es from './es/projects.json'
import project_data_en from './en/projects.json'
import alert_messages_en from './en/alert_messages.json'
import alert_messages_es from './es/alert_messages.json'

const resources = {
  en: {
    github_user_card: github_traslation_en,
    presentation_card: presentation_card_en,
    languages: languages_en,
    banner: banner_en,
    navbar: navbar_en,
    tooltip_messages: tooltip_messages_en,
    experience_data: experience_data_en,
    projects: project_data_en,
    alert_messages: alert_messages_en
  },
  es: {
    github_user_card: github_traslation_es,
    presentation_card: presentation_card_es,
    languages: languages_es,
    banner: banner_es,
    navbar: navbar_es,
    tooltip_messages: tooltip_messages_es,
    experience_data: experience_data_es,
    projects: project_data_es,
    alert_messages: alert_messages_es
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

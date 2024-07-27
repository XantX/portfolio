import ExpecienceCard from '../experience-card/experience-card';
import './experience.css'
import experienceDataEs from '../../files/experience-data-es.json'
import experienceDataEn from '../../files/experience-data-en.json'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';

function Experience() {
  const { t, i18n } = useTranslation('experience_data')
  const [experienceData, setExperienceData] = useState(i18n.language === 'es' ? experienceDataEs : experienceDataEn)
  useEffect(() => {
    setExperienceData(i18n.language === 'es' ? experienceDataEs : experienceDataEn)
  }, [i18n.language])
  const getExperienceTime = () => {
    const start_date = experienceData.companies[experienceData.companies.length - 1].start_date
    const [day, month, year] = start_date.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    return new Date().getFullYear() - date.getFullYear();
  }
  return (
    <div id="experience" className="pt-4 container text-center">
      <h1 className="bg-soft">{t('title')}</h1>
      <h5 className="bg-soft">{getExperienceTime() + ' ' + t('year')}</h5>
      <div id="line"></div>
      <div id="arrow"></div>
      {experienceData ? (
        experienceData.companies.map((company, index) => (
          <div key={index} className="row mt-5">
            <div className="col">
              <ExpecienceCard reverse={index % 2 === 0} position={index % 2 === 0} company={company} />
            </div>
          </div>
        ))
      ) : (
        <p>cargando..</p>
      )
      }
    </div>
  )
}

export default Experience;

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './experience-card.css'
import TechIcon from '../tech-icon/tech-icon';
import { myFontAwesomeIcons } from '../../shared/icons-table';
function ExpecienceCard(props) {
  const { t, i18n } = useTranslation('experience_data');

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const formatDateToMonthAndYear = (date) => {
    const currentLanguage = i18n.language;
    const nombresMeses = {
      es: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ],
      en: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
    };

    const [_, mes, anio] = date.split("/"); // eslint-disable-line no-unused-vars

    // Seleccionar el arreglo de nombres de meses según el idioma actual
    const nombreMes = nombresMeses[currentLanguage]?.[parseInt(mes, 10) - 1] || nombresMeses["es"][parseInt(mes, 10) - 1];

    return `${nombreMes} - ${anio}`;
  }

  const formatDate = (date, format) => {
    const resultDate = format;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return resultDate.replace('mm', month < 10 ? '0' + month : month)
      .replace('yy', date.getFullYear())
      .replace('dd', day < 10 ? '0' + day : day)
  }
  const text_position = props.position ? 'text-end' : 'text-start'
  const icon_position = props.position ? '2' : '1'
  const image_position = props.position ? 'end' : 'start'
  const order = props.reverse ? 'order-first' : 'order-last'
  return (
    <div className="row" key={`name-${props.company.name}`}>
      <div className="col-lg-6 col-md-6 col-sm-12 fecha">
        <h4>
          {!props.company.end_date
            ? t('work_state_active')
            : t('work_state_inactive')}<br />

          {!props.company.start_date
            ? formatDate(new Date(), 'dd/mm/yy')
            : t('from') + formatDateToMonthAndYear(props.company.start_date)}<br />

          {!props.company.end_date
            ? " "
            : t('to') + formatDateToMonthAndYear(props.company.end_date)}
        </h4>
      </div>
      <div className={`col-lg-6 col-md-6 col-sm-12 experiencia ${screenWidth > 767 ? order : ''} p-4`}>
        <div className={`card ${screenWidth > 767 ? text_position : 'text-start'}`}>
          <div className="card-body">
            <h5 className="card-title">Empresa: {props.company.name}</h5>
            <p className="card-text"><b>{t('description_tag')}: </b>{props.company.description}</p>
            <p className="card-text"><b>{t('position_tag')}: </b> {props.company.cargo}</p>
            <div className="row">
              <div className="col order-2">
                <div className="tech-icon-experience-container w-100 h-100 text-end">
                  {props.company.tecnologias.map((tecnology, index) => {
                    const Icon = myFontAwesomeIcons.get(tecnology);
                    if (Icon) {
                      return (
                        <TechIcon
                          key={index}
                          index={index}
                          name={tecnology}
                          icon={Icon}
                        ></TechIcon>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
              <div className={`col  order-${screenWidth > 767 ? icon_position : '1'}`}>
                <div className={`justify-content-${screenWidth > 767 ? image_position : "start"} img-container-experience w-100 h-100`}>
                  <img src={props.company.logo} alt="company_logo" width="40%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpecienceCard;

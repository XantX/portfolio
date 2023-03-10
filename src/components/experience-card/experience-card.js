import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './experience-card.css'
function ExpecienceCard(props) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const { t } = useTranslation('experience_data');

  useEffect(() => {
    function handleResize(){
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  const formatDate = (date, format) => {
    const resultDate = format;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return resultDate.replace('mm', month < 10? '0' + month : month)
                     .replace('yy', date.getFullYear())
                     .replace('dd', day < 10? '0' + day: day)
  }
  const text_position = props.position? 'text-end': 'text-start'
  const order = props.reverse? 'order-first': 'order-last'
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 fecha">
        <h4> 
          {!props.company.end_date
            ?t('work_state_active')
            : t('work_state_inactive')}<br/>
          {!props.company.end_date
            ?formatDate(new Date(), 'dd/mm/yy')
            :props.company.end_date}</h4>
      </div>
      <div className={`col-lg-6 col-md-6 col-sm-12 experiencia ${screenWidth > 767?order: ''} p-4`}>
        <div className={`card ${screenWidth > 767? text_position : 'text-start'}`}>
          <div className="card-body">
            <h5 className="card-title">Empresa: {props.company.name}</h5>
            <p className="card-text"><b>Descripcion: </b>{props.company.description}</p>
            <p className="card-text"><b>Cargo: </b> {props.company.cargo}</p>
            <img src={props.company.logo} alt="company_logo" width={100}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpecienceCard;

import './project.css'
import { useEffect, useState } from 'react'
import myIcons from '../../shared/icons-table'

function Projects () {
  const languages = ['java', 'python']
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize(){
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])
  return (
    <div className='carrousel-container mt-5 mb-5'>
      <div className='text-center'>
        <h1>Mis proyectos personales</h1>
        {
          languages.map((language) => {
            const Icon = myIcons.get(language)
            return <Icon />
          })
        }
      </div>
      <div id='carouselExampleAutoplaying' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='container'>
              <div className={`card ${screenWidth > 767? 'text-start': 'text-center'}`}>
                <div className='card-body'>
                  <h5 className='card-title'>Titulo del proyecto</h5>
                  <p className='card-text'>descripcion</p>
                  <p className='card-text'>logos y links</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleAutoplaying' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Projects;

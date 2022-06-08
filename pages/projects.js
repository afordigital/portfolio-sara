import ComplexProject from '../components/complexProject'

import { FaCalculator, FaCamera, FaShip } from 'react-icons/fa'
import { GrPersonalComputer } from 'react-icons/Gr'

const Projects = () => {
  return (
    <div id='projects' className='max-w-5xl mx-auto'>
      <ComplexProject
        icon={<FaCalculator />}
        title={'Calculadora Solar'}
        src={'/proyecto1.JPG'}
        description={
          'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.'
        }
        softwares={'JavaScript | HTML | CSS | PHP | Wordpress'}
        hrefbutton={'https://sima.mandarinaservices.com/calculadora/%27%7D'}
      />
      <br />
      <br />
      <ComplexProject
        icon={<GrPersonalComputer />}
        title={'Posicionamiento Web'}
        src={'/proyecto2.JPG'}
        description={
          'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.'
        }
        softwares={'React | NextJS | TailwindCSS'}
        hrefbutton={'https://posicionamiento-web.vercel.app/'}
      />
      <br />
      <br />
      <ComplexProject
        icon={<FaCamera />}
        title={'Alessio Muganni'}
        src={'/proyecto3.JPG'}
        description={
          'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.'
        }
        softwares={'React | NextJS | TailwindCSS'}
        hrefbutton={'https://prueba-navy.vercel.app/'}
      />
      <br />
      <br />
      <ComplexProject
        icon={<FaShip />}
        title={'Puerto de Los Ángeles'}
        src={'/proyecto4.JPG'}
        description={
          'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.'
        }
        softwares={'JavaScript | HTML | CSS | Verge3D'}
        hrefbutton={
          'https://app.estudiocactus.com/visitor-hsse/map/losAngeles/'
        }
      />
    </div>
  )
}

export default Projects

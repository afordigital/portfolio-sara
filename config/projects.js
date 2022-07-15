import {
  FaCalculator,
  FaCamera,
  FaShip,
  FaRegBuilding,
  FaCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import Skill from '../components/common/skill'

export const projects = [
  {
    title: 'Calculadora Solar',
    description:
      'Calculadora Solar hecha con JavaScript, HTML, CSS e introducción a php para calcular los datos de compra del usuario.'
  },
  {
    title: 'Posicionamiento Web 24',
    description:
      'Página estática realizada con React, NextJS y Tailwindcss con tarifas para vender posicionamiento web, diseño original con Figma.'
  },
  {
    title: 'Alessio Muganni',
    description:
      'Portfolio de músico reconocido realizado con React, NextJS y Tailwindcss, diseño original con Figma.'
  },
  {
    title: 'Puerto de los Ángeles',
    description:
      'Interfaz básica de una aplicación 3D para la seguridad portuaria. Realizado con JavaScript, Verge3D, HTML y CSS.'
  }
]

export const renders = [
  '/preview-2.jpg',
  '/preview-1.jpg',
  '/preview-5.jpg',
  '/preview-8.jpg',
  '/preview-4.jpg',
  '/preview-3.jpg'
]

export const complexProjects = [
  {
    icon: <FaCalculator />,
    title: 'Calculadora Solar',
    src: '/proyecto1.JPG',
    description:
      'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.',
    softwares: 'JavaScript | HTML | CSS | PHP | Wordpress',
    hrefbutton: 'https://sima.mandarinaservices.com/calculadora/%27%7D'
  },
  {
    icon: <FaChartBar />,
    title: 'Posicionamiento Web',
    src: '/proyecto2.JPG',
    description:
      'Página estática realizada en React para facilitar la información y la venta de un servicio de un cliente. Diseño original hecho en Figma.',
    softwares: 'React | NextJS | TailwindCSS',
    hrefbutton: 'https://posicionamiento-web.vercel.app/'
  },
  {
    icon: <FaCamera />,
    title: 'Alessio Muganni',
    src: '/proyecto3.JPG',
    description:
      'Página estática hecha en React que mumestra el portfolio de un fotógrafo, con su información personal, mapa y un cuadro de contacto con validación de usuario realizada en Yup. Diseño original hecho en Figma.',
    softwares: 'React | NextJS | TailwindCSS',
    hrefbutton: 'https://prueba-navy.vercel.app/'
  },
  {
    icon: <FaShip />,
    title: 'Puerto de Los Ángeles',
    src: '/proyecto4.JPG',
    description:
      'Interfaz sencilla realizada en JavaScript y Verge3D que combina 3D y programación. A través de la leyenda de la interfaz puedes acceder a los puntos que te muestran giros de cámara e información sobre distintas secciones para mejorar la seguridad portuaria.',
    softwares: 'JavaScript | HTML | CSS | Verge3D',
    hrefbutton: 'https://app.estudiocactus.com/visitor-hsse/map/losAngeles/'
  }
]

export const Tables = [
  {
    title: 'Frontend',
    skill1: <Skill image={'/resume-icons/react.svg'} description={'React'} />,
    skill2: <Skill image={'/resume-icons/nextjs.svg'} description={'NextJS'} />,
    skill3: <Skill image={'/resume-icons/js.svg'} description={'JavaScript'} />,
    skill4: <Skill image={'/resume-icons/html.svg'} description={'HTML'} />,
    skill5: <Skill image={'/resume-icons/css.svg'} description={'CSS'} />
  },
  {
    title: 'Diseño Gráfico',
    skill1: <Skill image={'/resume-icons/figma.svg'} description={'Figma'} />,
    skill2: (
      <Skill image={'/resume-icons/photoshop.svg'} description={'Photoshop'} />
    ),
    skill3: (
      <Skill
        image={'/resume-icons/illustrator.svg'}
        description={'Illustrator'}
      />
    ),
    skill4: (
      <Skill image={'/resume-icons/indesign.svg'} description={'InDesign'} />
    ),
    skill5: (
      <Skill
        image={'/resume-icons/after-effects.svg'}
        description={'After Effects'}
      />
    )
  },
  {
    title: 'Softwares 3D',
    skill1: (
      <Skill image={'/resume-icons/3dsmax.svg'} description={'3ds Max'} />
    ),
    skill2: <Skill image={'/resume-icons/vray.svg'} description={'V-Ray 5'} />,
    skill3: (
      <Skill image={'/resume-icons/verge.svg'} description={'Verge 3D'} />
    ),
    skill4: (
      <Skill image={'/resume-icons/blender.svg'} description={'Blender'} />
    )
  },
  {
    title: 'Herramientas',
    skill1: <Skill image={'/resume-icons/github.svg'} description={'Github'} />,
    skill2: (
      <Skill image={'/resume-icons/vs-code.svg'} description={'VS Code'} />
    )
  }
]

export const TablesLabExp = [
  {
    title: 'Artista Técnica',
    place: 'Estudio Cactus, Castellón',
    iconPlace: <FaRegBuilding />,
    date: 'Sept 2021 - Actual',
    iconDate: <FaCalendarAlt />,
    description: 'Retos enfrentados en esta start-up tecnológica:',
    labor1:
      'Desarrollo de aplicaciones 3D con softwares actuales como Verge3D, JavaScript, HTML y CSS.',
    labor2: 'Creación de Landing Pages con React, NextJS y Tailwindcss.',
    labor3:
      'Realización de imágenes CGI en 3ds Max y V-Ray 5 con múltiples estilos de interiorismo.',
    showList: true
  },
  {
    title: 'Programadora Web',
    place: 'Mandarina Webs, Valencia',
    iconPlace: <FaRegBuilding />,
    date: 'Autónoma',
    iconDate: <FaCalendarAlt />,
    description: 'Retos enfrentados en esta empresa de marketing digital:',
    labor1:
      'Desarrollo de un plugin para Wordpress consistente en una calculadora solar.',
    labor2: 'Realización de un branding profesional para una tienda de ropa.',
    labor3: 'Venta de servicios web como teleoperadora y vendedora.',
    showList: true
  },
  {
    title: 'Artista en CGI',
    place: 'Nuxot, Catellón',
    iconPlace: <FaRegBuilding />,
    date: 'Enero 2021 - Junio 2021',
    iconDate: <FaCalendarAlt />,
    description: 'Retos enfrentados en esta empresa: ',
    labor1:
      'Realización de imágenes CGI para arquitectura en 3ds Max y V-Ray 5.',
    labor2: 'Postprocesado de imágenes en Photoshop.',
    labor3: 'Estudio y creación de materiales PBR.',
    showList: true
  }
]

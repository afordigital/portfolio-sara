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
  '/preview-1.jpg',
  '/preview-2.jpg',
  '/preview-5.jpg',
  '/preview-4.jpg'
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
      'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.',
    softwares: 'React | NextJS | TailwindCSS',
    hrefbutton: 'https://posicionamiento-web.vercel.app/'
  },
  {
    icon: <FaCamera />,
    title: 'Alessio Muganni',
    src: '/proyecto3.JPG',
    description:
      'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.',
    softwares: 'React | NextJS | TailwindCSS',
    hrefbutton: 'https://prueba-navy.vercel.app/'
  },
  {
    icon: <FaShip />,
    title: 'Puerto de Los Ángeles',
    src: '/proyecto4.JPG',
    description:
      'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.',
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
    description:
      'Start-up tecnológica en la que trabajo actualmente en proyectos relacionados con la programación de aplicaciones 3D e imágenes hiperrealistas.'
  },
  {
    title: 'Programadora Web',
    place: 'Mandarina Webs, Valencia',
    iconPlace: <FaRegBuilding />,
    date: 'Autónoma',
    iconDate: <FaCalendarAlt />,
    description:
      'Empresa de desarrollo web con la que he colaborado en múltiples proyectos, especialmente con JavaScript y Wordpress.'
  },
  {
    title: 'Artista en CGI',
    place: 'Nuxot, Catellón',
    iconPlace: <FaRegBuilding />,
    date: 'Enero 2021 - Junio 2021',
    iconDate: <FaCalendarAlt />,
    description:
      'Pequeña empresa de CGI donde pude realizar mis prácticas y empezar mi carrera laboral desarrollándome en el estudio del arte hiperrealista 3D.'
  }
]

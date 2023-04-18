import Skill from '../components/common/skill'
import { useTranslation } from 'react-i18next'
import {
  GraphUp,
  Calculator,
  Computer,
  Camera,
  Fishing,
  City,
  Calendar
} from 'iconoir-react'

export const projects = [
  {
    title: 'Priorización de Leads',
    description:
      'SaaS que recoge el histórico del usuario y gracias a modelos predictivos le permite mejorar la conversión de clientes potenciales.'
  },
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
  }
]

export const renders = [
  '/preview-8.jpg',
  '/preview-2.jpg',
  '/preview-10.jpg',
  '/preview-9.jpg',
  '/preview-1.jpg',
  '/preview-4.jpg'
]

export const complexProjects = [
  {
    icon: <GraphUp width={30} strokeWidth={2.3} />,
    title: 'Previsión de Leads',
    src: '/proyecto6.JPG',
    description:
      'Desarrollo de un SaaS basado en Inteligencia Artificial que a través de modelos predictivos usa el histórico de datos del usuario y permite mejorar la conversión de leads.',
    softwares: 'React | Tailwindcss | AWS',
    hrefbutton: 'https://fiuter-app.com/'
  },
  {
    icon: <Calculator width={26} strokeWidth={2.3} className='mt-2' />,
    title: 'Calculadora Solar',
    src: '/proyecto1.JPG',
    description:
      'Proyecto de calculadora solar realizado con JavaScript con un algoritmo de cálculo donde dependiendo de la orientación de tu tejado, el área de tu mapa importado con la librería Leaflet y vatios consumidos entre otros parámetros, calcula qué objetos necesitas para pasarte a usar energía solar y cuándo lo rentabilizas.',
    softwares: 'JavaScript | HTML | CSS | PHP | Wordpress',
    hrefbutton: 'https://sima.mandarinaservices.com/calculadora/%27%7D'
  },
  {
    icon: <Computer width={28} strokeWidth={2.3} className='mt-2' />,
    title: 'Posicionamiento Web',
    src: '/proyecto2.JPG',
    description:
      'Página estática realizada creada para facilitar la información de servicios de posicionamiento web con distintas tarifas con el objetivo de venta de estos servicios. Diseño original hecho en Figma.',
    softwares: 'React | NextJS | TailwindCSS',
    hrefbutton: 'https://posicionamiento-web.vercel.app/'
  },
  {
    icon: <Camera width={28} strokeWidth={2.3} className='mt-2' />,
    title: 'Alessio Muganni',
    src: '/proyecto3.JPG',
    description:
      'Página estática de portfolio de un fotógrafo, con su información personal, mapa y un cuadro de contacto con validación de usuario realizada en Yup. Diseño original hecho en Figma.',
    softwares: 'React | NextJS | TailwindCSS',
    hrefbutton: 'https://prueba-navy.vercel.app/'
  },
  {
    icon: <Fishing width={28} strokeWidth={2.3} className='mt-2' />,
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
    title: 'Desarrolladora Frontend',
    place: 'Fiuter, Madrid',
    iconPlace: <City />,
    date: 'Sept 2022 - Actual',
    iconDate: <Calendar width={20} strokeWidth='2' className='mt-1' />,
    description: 'Retos enfrentados en esta start-up:',
    labor1:
      'Desarrollo de un SaaS que automatiza la creación de modelos de priorización de leads en base a un histórico de datos. Creación de la plataforma con React, Tailwindcss y AWS.',
    labor2:
      'Desarrollo de una plataforma en React integrada en Shopify que permite a los dueños de e-commerces generar segmentación inteligente para sus campañas de marketing.',
    labor3:
      'Organización del equipo técnico a través de la metodología ágil Scram.',
    showList: true
  },
  {
    title: 'Artista Técnica y Desarrolladora Frontend',
    place: 'Estudio Cactus, Castellón',
    iconPlace: <City width={22} strokeWidth='1.6' />,
    date: 'Sept 2021 - Sept 2022',
    iconDate: <Calendar width={20} strokeWidth='2' className='mt-1' />,
    description: 'Retos enfrentados en esta consultoría tecnológica:',
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
    iconPlace: <City width={22} strokeWidth='1.6' />,
    date: 'Autónoma',
    iconDate: <Calendar width={20} strokeWidth='2' className='mt-1' />,
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
    iconPlace: <City width={22} strokeWidth='1.6' />,
    date: 'Enero 2021 - Junio 2021',
    iconDate: <Calendar />,
    description: 'Retos enfrentados en esta empresa: ',
    labor1:
      'Realización de imágenes CGI para arquitectura en 3ds Max y V-Ray 5.',
    labor2: 'Postprocesado de imágenes en Photoshop.',
    labor3: 'Estudio y creación de materiales PBR.',
    showList: true
  }
]

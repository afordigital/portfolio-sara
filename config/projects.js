import { FaCalculator, FaCamera, FaShip } from 'react-icons/fa'
import { GrPersonalComputer } from 'react-icons/Gr'

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
  '/preview-3.jpg',
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
    icon: <GrPersonalComputer />,
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

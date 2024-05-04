interface Freelance {
  id: number
  title: string
  image_url: string
  descricao: string
  description: string
  techs: string
  deploy_url: string
  layout_url?: string
}

export const Freelances: Freelance[] = [
  {
    id: 1,
    title: 'Dentiff',
    image_url: '/static/freelances/dentiff.png',
    description: 'Landing page of a company that sells dental products.',
    descricao:
      'Landing page para uma empresa especializada em produtos odontológicos.',
    techs: 'html,css,js',
    deploy_url: 'https://www.dentiffdental.com.br/',
  },
  {
    id: 2,
    title: 'Barra do Corumbá',
    image_url: '/static/freelances/barra.png',
    description:
      'Landing page of a tourism company that offers a wide range of travel services.',
    descricao:
      'Landing page de uma empresa de turismo que oferece vários passeios.',
    techs: 'wordpress',
    deploy_url: 'https://barradocorumba.com.br/',
  },
  {
    id: 3,
    title: 'Oxente Passeios',
    image_url: '/static/freelances/oxente.png',
    description: 'Landing page of a tourism company specialized in boat trips.',
    descricao:
      'Landing page de uma empresa de turismo especializada em passeios de barco.',
    techs: 'wordpress',
    deploy_url: 'https://jangadaoxentepasseios.com.br/',
  },
]
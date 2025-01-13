export interface Project {
  id: string
  title: string
  image_url: string
  descricao: string
  description: string
  techs: string
  deploy_url: string
  repo_url: string
  layout_url?: string
}

export const Projects: Project[] = [
  {
    id: '1',
    title: 'Código Certo',
    image_url: '/static/projects/1.png',
    description:
      'Landing Page developed for the Código Certo community, where I worked as a tech lead.',
    descricao:
      'Landing Page desenvolvida para a comunidade Código Certo, onde atuei como techlead.',
    techs: 'figma,html,css,js,bootstrap,nodejs,prisma,sqlite,cypress',
    deploy_url: 'https://equipe04.vercel.app/',
    repo_url: 'https://github.com/Raul-Albuquerque/equipe04',
    layout_url:
      'https://www.figma.com/design/G9aAaq7RO2CaD3dxdAf4rm/Landing-Page----C%C3%B3digo-Certo?node-id=434-134&t=Ca9p6xUSTsON92K2-1',
  },
  {
    id: '2',
    title: 'Pokédex',
    image_url: '/static/projects/2.png',
    description:
      'Web Application about Pokémons with a lot of features, using the PokéAPI.',
    descricao:
      'Aplicação web sobre pokémons com várias funcionalidades, usando a PokéAPI.',
    techs: 'html,css,bootstrap,js,vue',
    deploy_url: 'https://desafio-pokedex-neon.vercel.app/',
    repo_url: 'https://github.com/Raul-Albuquerque/desafio-pokedex',
  },
  {
    id: '3',
    title: 'Y - Twitter Clone',
    image_url: '/static/projects/3.png',
    description:
      'This is a robust project that replicates various functionalities of Twitter.',
    descricao:
      'Um projeto robusto que replica várias funcionalidades do Twitter, garantindo uma experiência de rede social.',
    techs: 'html,css,py,django,postgres,docker',
    deploy_url: 'http://raulalbuquerque.pythonanywhere.com/',
    repo_url: 'https://github.com/Raul-Albuquerque/Y_twitter_clone',
  }
]

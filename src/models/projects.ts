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
    title: 'Pokédex',
    image_url: '/static/projects/1.png',
    description:
      'Web Application about Pokémons with a lot of features, using the PokéAPI.',
    descricao:
      'Aplicação web sobre pokémons com várias funcionalidades, usando a PokéAPI.',
    techs: 'html,css,bootstrap,js,vue',
    deploy_url: 'https://desafio-pokedex-neon.vercel.app/',
    repo_url: 'https://github.com/Raul-Albuquerque/desafio-pokedex',
  },
  {
    id: '2',
    title: 'Y - Twitter Clone',
    image_url: '/static/projects/2.png',
    description:
      'This is a robust project that replicates various functionalities of Twitter.',
    descricao:
      'Um projeto robusto que replica várias funcionalidades do Twitter.',
    techs: 'html,css,py,django,postgres,docker',
    deploy_url: 'http://raulalbuquerque.pythonanywhere.com/',
    repo_url: 'https://github.com/Raul-Albuquerque/Y_twitter_clone',
  },
  {
    id: '3',
    title: 'My Contacts',
    image_url: '/static/projects/3.png',
    description:
      'Sort of an agenda that allows the user to add name, e-mail, phone, and avatar.',
    descricao:
      'Uma espécie de agenda que permite o usuário adicionar nome, e-mail, telefone e avatar.',
    techs: 'html,css,ts,react',
    deploy_url: 'https://meus-contatos-react-seven.vercel.app/',
    repo_url: 'https://github.com/Raul-Albuquerque/meus_contatos_react',
    layout_url:
      'https://www.figma.com/file/YsfBsQ2APXN3CiJ94YQjPh/meus-contatos?type=design&node-id=0%3A1&mode=design&t=wyFMAJmZiQCmdLRA-1',
  },
]

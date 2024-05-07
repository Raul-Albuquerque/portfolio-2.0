export interface FreelanceData {
  id: string
  title: string
  image_url: string
  descricao: string
  description: string
  techs: string
  deploy_url: string
  layout_url?: string
}

export interface FreelanceResponse {
  data: FreelanceData[]
}

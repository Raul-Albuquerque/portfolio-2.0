export interface DeveloperData {
  full_name: string
  stack_pt: string
  stack_en: string
  about: string
  sobre: string
  skills: string
  resume_url: string
  profile_picture: string
  cv_url: string
  whatsapp_url: string
  linkedin_url: string
  email_url: string
  github_url: string
}

export interface DeveloperResponse {
  data: DeveloperData[]
}

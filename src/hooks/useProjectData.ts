import { ProjectResponse } from '@/interfaces/project-data'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = 'https://api-portfolio-2-0.onrender.com/projects'

const fetchData = async (): Promise<ProjectResponse> => {
  const response = await axios.get<ProjectResponse>(API_URL)
  return response.data
}

export function useProjectData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['project-data'],
  })

  return {
    ...query,
    data: query.data,
  }
}

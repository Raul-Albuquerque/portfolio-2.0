import { ProjectResponse } from '@/interfaces/project-data'
import { useQuery } from '@tanstack/react-query'

import api from '@/services/api'

const fetchData = async (): Promise<ProjectResponse> => {
  const response = await api.get<ProjectResponse>('/projects')
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

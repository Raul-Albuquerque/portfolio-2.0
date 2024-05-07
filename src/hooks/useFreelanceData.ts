import { FreelanceResponse } from '@/interfaces/freelance-data'
import { useQuery } from '@tanstack/react-query'

import api from '@/services/api'

const fetchData = async (): Promise<FreelanceResponse> => {
  const response = await api.get<FreelanceResponse>('/freelances')
  return response.data
}

export function useFreelanceData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['freelance-data'],
  })

  return {
    ...query,
    data: query.data,
  }
}

import { DeveloperResponse } from '@/interfaces/developer-data'
import { useQuery } from '@tanstack/react-query'

import api from '@/services/api'

const fetchData = async (): Promise<DeveloperResponse> => {
  const response = await api.get<DeveloperResponse>('/developers')
  return response.data
}

export function useDeveloperData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['developer-data'],
  })

  return {
    ...query,
    data: query.data,
  }
}

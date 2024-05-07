import { DeveloperResponse } from '@/interfaces/developer-data'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = 'https://api-portfolio-2-0.onrender.com/developers'

const fetchData = async (): Promise<DeveloperResponse> => {
  const response = await axios.get<DeveloperResponse>(API_URL)
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

import { FreelanceResponse } from '@/interfaces/freelance-data'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const API_URL = 'https://api-portfolio-2-0.onrender.com/freelances'

const fetchData = async (): Promise<FreelanceResponse> => {
  const response = await axios.get<FreelanceResponse>(API_URL)
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

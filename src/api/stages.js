import axios from '@/api/axios'

// const register = credentials => {
//     return axios.post('/users', {user: credentials})

const getStagesLast = async () => {
  try {
    const response = await axios.get('/api/stages/last')
    return response.data
  } catch (error) {
    console.log('Error get stages/last:', error)
  }
}

export default {
  getStagesLast,
}

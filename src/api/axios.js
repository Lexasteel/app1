import axios from 'axios'

//axios.defaults.baseURL = 'https://web-kutes/webapi/api'
//axios.defaults.baseURL = 'http://localhost/webapi/api'
//axios.defaults.baseURL = 'https://localhost:7137/api'
//console.log('node_env=', process.env.NODE_ENV)
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://localhost/webapi/api'
    : 'https://web-kutes/webapi/api'

export default axios

import axios from 'axios'

//axios.defaults.baseURL = 'https://web-kutes/webapi/api'
//axios.defaults.baseURL = 'http://localhost/webapi/api'
//axios.defaults.baseURL = 'https://localhost:7137/api'
//console.log('node_env=', process.env.NODE_ENV)
axios.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://localhost:7137/api'
    : 'https://web-kutes/webapi/api'
// axios.defaults.headers = {
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers':
//     'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
//     'Access-Control-Allow-Origin': '*',
// }
export default axios

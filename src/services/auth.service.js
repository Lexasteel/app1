import axios from 'axios'

const API_URL = 'https://localhost:7137/'

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'token', {
        userName: user.username,
        password: user.password,
        role: '',
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }
        return response.data
      })
  }

  logout() {
    //console.log(user)
    localStorage.removeItem('user')
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
    })
  }
}

export default new AuthService()

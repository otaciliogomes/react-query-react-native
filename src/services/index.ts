import axios from 'axios'

const api = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'http:10.0.2.2:3333',
    headers: {
      Accept: 'application/json',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '6da79d9a49msh42ebaa609700661p13e2f6jsnf181e867ea44'
    }
})

api.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response)
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
      if (error.response.status === 401) {
        console.log("AQUI")
      } else {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
    }
  )
  

export default api
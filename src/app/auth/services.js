import http from 'src/http'

export const postLogin = (email, password) => {
  return http.get('https://uinames.com/api/?ext')
    .then(response => response.data)
}

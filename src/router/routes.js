import { routes as app } from '../app/index.js'

const root = [
  { path: '/', redirect: '/dashboard' }
]

export default [ ...root, ...app ]

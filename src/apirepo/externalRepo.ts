import axios from 'axios'

// You can use your own logic to set your local or production domain
const baseDomain = 'https://api.stocktwits.com/api/2/streams/'

// The base URL is empty this time due we are using the jsonplaceholder API
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL
})

import Repository from './repo'

const daily = 'events?sym=daily/'
const hourly = 'events?sym=hourly/'
export default {

  getHourly (hour: string) {
    return Repository.get(`${hourly}${hour}`)
  },

  getDaily (day: string) {
    return Repository.get(`${daily}${day}`)
  }
}

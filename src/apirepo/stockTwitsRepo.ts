// import Repository from './externalRepo'

// const endpoint = 'symbol/'
// const token = '/?access_token/=eade5d2e846b2932ee84720e2e19c648e840e09f'
// export default {

//   getSymbolStream (ticker: string) {
//     return Repository.get(`${endpoint}${ticker}.json${token}`)
//   }
// }

import Repository from './repo'

const endpoint = 'events?sym=symbol/'
const token = '.json/?access_token/=eade5d2e846b2932ee84720e2e19c648e840e09f'
export default {

  getHourly (ticker: string) {
    return Repository.get(`${endpoint}${ticker}${token}`)
  }
}

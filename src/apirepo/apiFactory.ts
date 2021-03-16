import Trader212Hotlist from './hotListRepo'
import StockTwitsRepo from './stockTwitsRepo'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const repositories: any = {
  hotlists: Trader212Hotlist,
  stocktwits: StockTwitsRepo
}

export const RepositoryFactory = {
  get: (name: string | number) => repositories[name]
}

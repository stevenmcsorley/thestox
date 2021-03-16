/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */

<template>
  <div>
<h1>DATA</h1>

{{getStocksData}}

<p v-if="this.symbolStream.length > 0">{{stData}}</p>

<p>BULLS: {{getBulls}}</p>
<p>BEARS: {{getBears}}</p>

</div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { RepositoryFactory } from '../apirepo/apiFactory'

import FlightStore from '../store/flights/flightStore'

import { CSimpleGrid, CGrid, CBox } from '@chakra-ui/vue'

const StockTwitsApi = RepositoryFactory.get('stocktwits')

@Component({
  components: {
    CSimpleGrid,
    CGrid,
    CBox
  }
})
export default class HelloWorld extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Inject() readonly $chakraColorMode!: any
  FlightStore = getModule(FlightStore);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainStyles: any = {
    dark: {
      bg: 'gray.700',
      color: 'whiteAlpha.900'
    },
    light: {
      bg: 'white',
      color: 'gray.900'
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventSource: any = ''
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  symbolStream: any = []
  bearCount = 0
  bullCount = 0
  search_fields = ['messages']

  created () {
    if (this.eventSource) {
      this.eventSource.close()
    }
  }

  async mounted () {
    this.setupStream()
  // await this.fetch('AMC')
  }

  async fetch (params: string) {
    if (this.eventSource) {
      this.eventSource.close()
    }
    // this.isActive = `${params}H`
    // console.log('called daily', params)
    try {
      const { data } = StockTwitsApi.getHourly(params)
      console.log('called try', data)
      this.symbolStream = data
      this.updateProdutList(JSON.parse(data))
      // this.FlightStore.updateFlights({ flightsData: this.hotlistStocks })
      // console.log('set vuex')
      console.log('api', this.symbolStream)
    } catch (e) {
      console.log('error', e)
    }
  }

  // fetchDaily (params: string) {
  //   // if (this.eventSource) {
  //   //   this.eventSource.close()
  //   // }
  //   // console.log('called daily func')
  //   this.isActive = `${params}D`
  //   try {
  //     console.log('here')
  //     const data = HotlistApi.getDaily(params)
  //     console.log('daily try', data)
  //     this.hotlistStocks = data
  //     console.log('api', this.hotlistStocks)
  //     this.updateProdutList(JSON.parse(data))
  //     this.FlightStore.updateFlights({ flightsData: this.hotlistStocks })
  //     console.log('api', this.hotlistStocks)
  //   } catch (e) {
  //     console.log('error', e)
  //   }
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateProdutList (myd: any): void {
    this.symbolStream = myd

    console.log('update', this.symbolStream)

    this.bearCount = this.isBearOrBull('Bearish')
    this.bullCount = this.isBearOrBull('Bullish')
    const sentiObj = {
      bulls: this.bullCount,
      bears: this.bearCount,
      ghosts: 0
    }
    this.FlightStore.updateFlights({ flightsData: this.symbolStream })
    this.FlightStore.updateSentiment({ sentiData: sentiObj })
    // this.symbolStream.map(function (e) {
    //   e.added = e.lastSnapshot.holdersCount - e.holdersCount
    // })

  // this.FlightStore.updateFlights({ flightsData: this.symbolStream })
  }

  setupStream () {
    this.eventSource = new EventSource('url')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.eventSource.onmessage = (e: any) => this.updateProdutList(JSON.parse(e.data))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // get roomData (): any | undefined {
  //   const x = JSON.parse(this.symbolStream.contents)
  //   return x
  // }

  isBearOrBull (side: string) {
    const x = JSON.parse(this.symbolStream.contents)
    let count = 0
    for (let i = 0; i < x.messages.length; i++) {
      if (x.messages[i].entities.sentiment !== null) {
        if (x.messages[i].entities.sentiment.basic === side) {
          count++
        }
      }
    }
    console.log('llll', x.messages[0].entities.sentiment)
    return count
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  count (sentence: string) {
    return sentence.split(' ').reduce(function (acc, word) {
      acc[word] ? ++acc[word] : acc[word] = 1
      return acc
    }, Object.create(null))
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get stData (): any | undefined {
    return JSON.parse(this.symbolStream.contents)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get getBears (): any | undefined {
    return this.bearCount
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get getBulls (): any | undefined {
    return this.bullCount
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  search (keyword: any) {
    if (keyword.length < 1) // skip if input is empty
    // eslint-disable-next-line brace-style
    { return }

    const results = []

    for (const i in this.dataObj) { // iterate through dataset
      for (let u = 0; u < this.search_fields.length; u++) { // iterate through each key in dataset
        const rel = this.getRelevance(this.dataObj[i][this.search_fields[u]], keyword) // check if there are matches
        // no matches...
        // ...skip
        if (rel === 0) { continue }

        results.push({ relevance: rel, entry: this.dataObj[i] }) // matches found, add to results and store relevance
      }
    }

    results.sort(this.compareRelevance) // sort by relevance

    for (let i = 0; i < results.length; i++) {
      results[i] = results[i].entry // remove relevance since it is no longer needed
    }

    return results
  }

  getRelevance (value: string, keyword: string) {
    value = value.toLowerCase() // lowercase to make search not case sensitive
    keyword = keyword.toLowerCase()

    const index = value.indexOf(keyword) // index of the keyword
    const wordindex = value.indexOf(' ' + keyword) // index of the keyword if it is not on the first index, but a word

    // value starts with keyword (eg. for 'Dani California' -> searched 'Dan')
    // highest relevance
    // value doesnt start with keyword, but has the same word somewhere else (eg. 'Dani California' -> searched 'Cali')
    // medium relevance
    // value contains keyword somewhere (eg. 'Dani California' -> searched 'forn')
    // no matches, no relevance
    // low relevance
    if (index === 0) { return 3 } else if (wordindex !== -1) { return 2 } else if (index !== -1) { return 1 } else { return 0 }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compareRelevance (a: any, b: any) {
    return b.relevance - a.relevance
  }

  // subtract ({ x, y }: { x: number; y: number }) {
  //   return (x) - (y)
  // }

  // sortHolders () {
  //   this.hotlistStocks.sort((b, a) => {
  //     return this.sortScopeToggle ? a.holdersCount - b.holdersCount : b.holdersCount - a.holdersCount
  //   })

  //   this.sortScopeToggle = !this.sortScopeToggle
  // }

  // sortAdded () {
  //   this.hotlistStocks.sort((b, a) => {
  //     return this.sortScopeToggle ? a.added - b.added : b.added - a.added
  //   })

  //   this.sortScopeToggle = !this.sortScopeToggle
  // }

  // sortAsk () {
  //   this.hotlistStocks.sort((b, a) => {
  //     return this.sortScopeToggle ? a.askPrice - b.askPrice : b.askPrice - a.askPrice
  //   })

  //   this.sortScopeToggle = !this.sortScopeToggle
  // }

  // sortBid () {
  //   this.hotlistStocks.sort((b, a) => {
  //     return this.sortScopeToggle ? a.bidPrice - b.bidPrice : b.bidPrice - a.bidPrice
  //   })

  //   this.sortScopeToggle = !this.sortScopeToggle
  // }

  // get colorMode () {
  //   return this.$chakraColorMode()
  // }

  get getStocksData () {
    const stocks = this.FlightStore.getSentiment
    return stocks
  }

  get dataObj () {
    return JSON.parse(this.symbolStream.contents)
  }

  get wsbPatter () {
    return this.search('HODL')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

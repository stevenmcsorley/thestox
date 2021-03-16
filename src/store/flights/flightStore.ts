/* eslint-disable @typescript-eslint/no-explicit-any */
import store from '../index'
import {
  Module,
  VuexModule,
  Mutation,
  Action
} from 'vuex-module-decorators'
@Module({
  dynamic: true,
  namespaced: true,
  store,
  name: 'flightStore'
})
class FlightStore extends VuexModule {
  public flights: any = '';
  public cities: any = ''
  public tables: any = ''
  public sentiment: any = {
    bulls: 0,
    bears: 0,
    ghosts: 0
  }

  @Action({ commit: 'updateFlights' })
  public setWeather (readings: {}) {
    const flights = readings
    return flights
  }

  @Action({ commit: 'updateSentiment' })
  public setSentiment (read: {
    bulls: 0;
    bears: 0;
    ghosts: 0;
  }) {
    const sentiment = read
    return sentiment
  }

  @Action({ commit: 'updateCities' })
  public setCities (readings: {}) {
    const cities = readings
    return cities
  }

  @Action({ commit: 'updateTimetables' })
  public setTimeTables (readings: {}) {
    const tables = readings
    return tables
  }

  @Mutation
  updateSentiment (payload: any) {
    this.sentiment.bulls += payload.sentiData.bulls
    this.sentiment.bears += payload.sentiData.bears
    this.sentiment.ghosts = payload.sentiData.ghosts
  }

  @Mutation
  updateFlights (payload: any) {
    this.flights = payload
  }

  @Mutation
  updateCities (payload: any) {
    this.cities = payload
  }

  @Mutation
  updateTimetables (payload: any) {
    this.tables = payload
  }

  get getFlights (): any {
    return this.flights
  }

  get getSentiment (): any {
    return this.sentiment
  }

  get getCities (): any {
    return this.cities
  }

  get getTables (): any {
    return this.tables
  }
}

export default FlightStore

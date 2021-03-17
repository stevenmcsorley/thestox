/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <div class="hello">
    <h1 class="text-green">THE STOX</h1>
  <div class="small">
    <!-- <line-chart :chart-data="datacollection" id="mychart"></line-chart> -->
    {{datacollection['datasets'][0].data[0]}}
    {{datacollection['datasets'][0].data[1]}}
    {{datacollection['datasets'][0].data[2]}}
  </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import io from 'socket.io-client'
const socket = io.io('http://localhost:4000')

@Component({
  components: {
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  datacollection: any = null

  created (): void {
    this.getRealtimeData()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fillData (fetchedData: any): void {
    this.datacollection = {
      labels: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)],
      datasets: [
        {
          label: 'Google Stock',
          backgroundColor: '#1A73E8',
          data: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)]
        },
        {
          label: 'Microsoft Stock',
          backgroundColor: '#2b7518',
          data: [this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData), this.getRandomChartValues(fetchedData)]
        }
      ]
    }
  }

  getRealtimeData () {
    socket.on('newdata', fetchedData => {
      this.fillData(fetchedData)
    })
  }

  getRandomChartValues (number: number) {
    return Math.floor(Math.random() * number)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.text-green{
  color: #42b983;
}
</style>

import { Component } from 'react'
import { CodingDayList } from './CodingDayList'
import { CodingDayCount } from './CodingDayCount'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allCodingDays: [
  			{
  				location: "Campus London",
  				date: new Date("06/21/2017"),
  				coding: true,
  				nonCoding: false
  			},
  			{
  				location: "Waterstones, TCR",
  				date: new Date("06/22/2017"),
  				coding: false,
  				nonCoding: true
  			},
  			{
  				location: "Campus London",
  				date: new Date("06/23/2017"),
  				coding: true,
  				nonCoding: false
  			}
  		]
    }
  }
  countDays(filter) {
    const { allCodingDays } = this.state
    return allCodingDays.filter(
      (day) => (filter) ? day[filter] : day ).length
  }
  render() {
    return(
      <div className="app">
        <CodingDayList days={this.state.allCodingDays}/>
        <CodingDayCount total={this.countDays()}
                        coding={this.countDays(
                          "coding"
                        )}
                        nonCoding={this.countDays(
                          "nonCoding"
                        )}/>
      </div>
    )
  }
}

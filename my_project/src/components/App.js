import { createClass } from 'react'
import { CodingDayList } from './CodingDayList'
import { CodingDayCount } from './CodingDayCount'

export const App = createClass({
  getInitialState() {
    return {
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
  },
  countDays(filter) {
    return this.state.allCodingDays.filter(function(day) {
      if (filter) {
        return day[filter]
      } else {
        return day
      }
    }).length
  },
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
})

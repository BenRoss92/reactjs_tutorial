import React from 'react'
import '../stylesheets/ui.scss'

export const CodingDayCount = React.createClass({
  render() {
    return (
      <div className="coding-day-count">
        <div className="total-days">
          <span>5 days</span>
        </div>
        <div className="coding-days">
          <span>2 days</span>
        </div>
        <div className="non-coding-days">
          <span>1 non-coding day</span>
        </div>
      </div>
    )
  }
})

import React from 'react'

export const CodingDayCount = React.createClass({
  render() {
    return (
      <div class="coding-day-count">
        <div class="total-days">
          <span>5 days</span>
        </div>
        <div class="coding-days">
          <span>2 days</span>
        </div>
        <div class="non-coding-days">
          <span>1 non-coding day</span>
        </div>
      </div>
    )
  }
})

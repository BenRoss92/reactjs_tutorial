import React from 'react'
import '../stylesheets/ui.scss'

export const CodingDayCount = React.createClass({
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="coding-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
          <span>days</span>
        </div>
        <div className="coding-days">
          <span>{this.props.coding}</span>
          <span>days</span>
        </div>
        <div className="non-coding-days">
          <span>{this.props.nonCoding}</span>
          <span>non-coding day</span>
        </div>
        <div>
          <span>{this.calcGoalProgress(
            this.props.total,
            this.props.goal
          )}</span>
        </div>
      </div>
    )
  }
})

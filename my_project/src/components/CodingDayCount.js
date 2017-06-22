import '../stylesheets/ui.scss'
import TiCodeOutline from 'react-icons/lib/ti/code-outline'
import TiMediaPauseOutline from 'react-icons/lib/ti/media-pause-outline'
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const CodingDayCount = ({total=15, coding=10, nonCoding=5, goal=50}) => (
    <div className="coding-day-count">
      <div className="total-days">
        <span>{total}</span>
          <TiCalendarOutline />
        <span>days</span>
      </div>
      <div className="coding-days">
        <span>{coding}</span>
          <TiCodeOutline />
        <span>days</span>
      </div>
      <div className="non-coding-days">
        <span>{nonCoding}</span>
          <TiMediaPauseOutline />
        <span>non-coding day</span>
      </div>
      <div>
        <span>{calcGoalProgress(total, goal)}</span>
      </div>
    </div>
)

// Can also add default prop values in same way as using ES6 classes
// - i.e. if 'CodingDayCount' was a class, would add them to the instance
// of the class:
//
// CodingDayCount.defaultProps = {
//   total: 15,
//   coding: 10,
//   nonCoding: 5,
//   goal: 50
// }

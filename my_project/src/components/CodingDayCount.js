import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const CodingDayCount = ({total, coding, nonCoding, goal}) => (
    <div className="coding-day-count">
      <div className="total-days">
        <span>{total}</span>
        <span>days</span>
      </div>
      <div className="coding-days">
        <span>{coding}</span>
        <span>days</span>
      </div>
      <div className="non-coding-days">
        <span>{nonCoding}</span>
        <span>non-coding day</span>
      </div>
      <div>
        <span>{calcGoalProgress(total, goal)}</span>
      </div>
    </div>
)

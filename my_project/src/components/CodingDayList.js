import TiCodeOutline from 'react-icons/lib/ti/code-outline'
import TiMediaPauseOutline from 'react-icons/lib/ti/media-pause-outline'
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline'
import { CodingDayRow } from './CodingDayRow'
import PropTypes from 'prop-types'

export const CodingDayList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Location</th>
        <th>Coding</th>
        <th>Non Coding</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <CodingDayRow key={i}
                      {...day}/>
      )}
    </tbody>
  </table>
)

CodingDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"SkiDayList should be an array"
				)
		} else if(!props.days.length > 0) {
			return new Error(
				"SkiDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}

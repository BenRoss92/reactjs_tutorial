import TiCodeOutline from 'react-icons/lib/ti/code-outline'
import TiMediaPauseOutline from 'react-icons/lib/ti/media-pause-outline'
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline'
import { CodingDayRow } from './CodingDayRow'

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
        <CodingDayRow {...day}/>
      )}
    </tbody>
  </table>
)

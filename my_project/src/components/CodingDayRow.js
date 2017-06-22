import TiCodeOutline from 'react-icons/lib/ti/code-outline'
import TiMediaPauseOutline from 'react-icons/lib/ti/media-pause-outline'
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline'

export const CodingDayRow = ({location, date,
                              coding, nonCoding}) => (
  <tr>
    <td>
      {date.getDate()}/{date.getMonth() + 1}/
      {date.getFullYear()}
    </td>
    <td>
      {location}
    </td>
    <td>
      {(coding) ? <TiCodeOutline/> : null}
    </td>
    <td>
      {(nonCoding) ? <TiMediaPauseOutline/> : null}
    </td>
  </tr>
)

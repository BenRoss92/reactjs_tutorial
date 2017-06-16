import React from 'react'
import { render } from 'react-dom'
import { CodingDayCount } from './components/CodingDayCount'

window.React = React

render(
	<CodingDayCount />,
	document.getElementById('react-container')
)

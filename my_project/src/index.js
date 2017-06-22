import React from 'react'
import { render } from 'react-dom'
import { CodingDayList } from './components/CodingDayList'
// Not wishing to render CodingDayCount component at the moment:
//
// import { CodingDayCount } from './components/CodingDayCount'

window.React = React

// Not wishing to render CodingDayCount component at the moment:
//
// render(
// 	<CodingDayCount/>,
// 	document.getElementById('react-container')
// )

render(
	<CodingDayList days={
		[
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
	}/>,
	document.getElementById('react-container')
)

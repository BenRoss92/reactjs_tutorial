import React from 'react'
import { render } from 'react-dom'
// Importing CodingDayCount instead of CodingDayList component
// for this default value example:
// import { CodingDayList } from './components/CodingDayList'
import { CodingDayCount } from './components/CodingDayCount'

window.React = React

render(
	<CodingDayCount/>,
	document.getElementById('react-container')
)

// Using CodingDayCount component instead of CodingDayList component
// for this example:
//
// render(
// 	<CodingDayList days={
// 		[
// 			{
// 				location: "Campus London",
// 				date: new Date("06/21/2017"),
// 				coding: true,
// 				nonCoding: false
// 			},
// 			{
// 				location: "Waterstones, TCR",
// 				date: new Date("06/22/2017"),
// 				coding: false,
// 				nonCoding: true
// 			},
// 			{
// 				location: "Campus London",
// 				date: new Date("06/23/2017"),
// 				coding: true,
// 				nonCoding: false
// 			}
// 		]
// 	}/>,
// 	document.getElementById('react-container')
// )

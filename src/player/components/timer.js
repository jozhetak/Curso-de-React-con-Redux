import React from 'react';
import './timer.css';

// function leftPad(number){
// 	const pad = '00';
// 	return pad.substring(0, pad.length - number.length) + number;
// }

// function formattedTime(secs) {
// 	//Transformamos a entero y divimos entre 60 para obtener mins y lo ponemos en formato decimal
// 	const minutes = parseInt(secs / 60, 10)
// 	const seconds = parseInt(secs % 60, 10)
// 	return `${leftPad(minutes.toString())} : ${leftPad(seconds.toString())}`
// }

const Timer = ( props ) => {
	return(
		<div className="Timer">
			<p>
				<span>{props.currentTime} / {props.duration}</span>
			</p>
		</div>
	)
}

export default Timer;
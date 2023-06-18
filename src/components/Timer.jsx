import { useEffect, useState } from 'react';

const convertSecondsToHMS = (timeInSeconds) => {
	timeInSeconds = Number(timeInSeconds);
	const h = Math.floor(timeInSeconds / 3600);
	const m = Math.floor(timeInSeconds % 3600 / 60);
	const s = Math.floor(timeInSeconds % 3600 % 60);

	const hDisplay = h < 10 ? '0' + h : h;
	const mDisplay = m < 10 ? '0' + m : m;
	const sDisplay = s < 10 ? '0' + s : s;

	return `${hDisplay}:${mDisplay}:${sDisplay}`;
};

let intervalId;

const Timer = () => {

	const [ elaspedTime, setElapsedTime ] = useState(0);

	useEffect(() => {
		intervalId = setInterval(() => {
			setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
		}, 1000);
		return () => {
			clearInterval(intervalId);
		}
	}, []);

	return (
		<p>{ convertSecondsToHMS(elaspedTime) }</p>
	)
};

export default Timer;
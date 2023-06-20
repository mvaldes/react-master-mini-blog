import { useEffect, useState } from 'react';

let intervalId;

const useTimer = (interval = 1000) => {

	const [ elaspedTime, setElapsedTime ] = useState(0);

	useEffect(() => {
		intervalId = setInterval(() => {
			setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
		}, interval);

		return () => {
			clearInterval(intervalId);
		}
	}, []);

	return elaspedTime;

};

export default useTimer;
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes,nextISSTimesForMyLocation } = require('./iss-promise');

const { nextISSTimesForMyLocation } = require('./iss-promise');

// === first step
// fetchMyIP()
// 	.then(fetchCoordsByIP)
// 	.then(fetchISSFlyOverTimes)
// 	.then(body => console.log(JSON.parse(body)));

// Call
const printPassTimes = passTimes => {
	passTimes.forEach(item => {
		const date = new Date(item.risetime * 1000);
		const duration = item.duration;
		console.log(`Next pass at ${date} for ${duration} seconds`);
	});
};

nextISSTimesForMyLocation()
	.then(passTimes => {
		printPassTimes(passTimes);
	})
	.catch(error => {
		console.log('It did not work!', error);
	});

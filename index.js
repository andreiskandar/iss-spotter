const { nextISSTimesForMyLocation } = require('./iss');

/*
nextISSTimesForMyLocation(passTimes => {
	// if (error) {
	// 	return console.log("It didn't work! ", error);
	// }

	// fetchMyIP((error, ip) => {
	// 	if (error) {
	// 		console.log("It didn't work! ", error);
	// 		return;
	// 	}
	// 	console.log('It worked! Returned IP: ', ip);

	// 	fetchCoordsByIP(ip.ip, (error, coords) => {
	// 		if (error) {
	// 			console.log('Error: ', error);
	// 			return;
	// 		}
	// 		console.log('My coordinates: ', coords);

	// 		fetchISSFlyOverTimes(coords, (err, passes) => {
	// 			if (err) {
	// 				console.log('Error: ', error);
	// 				return;
	// 			}
	// 			passTimes(passes);

	// 			console.log('It worked! Returned flyover times: ', passes);
	// 		});
	// 	});
	// });
});
*/

const printPassTimes = passTimes => {
	passTimes.forEach(item => {
		const date = new Date(item.risetime * 1000);
		const duration = item.duration;
		console.log(`Next pass at ${date} for ${duration} seconds`);
	});
};

nextISSTimesForMyLocation((err, passTimes) => {
	if (err) {
		return console.log("It didn't work! ", error);
	}
	printPassTimes(passTimes);
});

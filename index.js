const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
	if (error) {
		console.log("It didn't work! ", error);
		return;
	}
	console.log('It worked! Returned IP: ', ip);
});

// const ip = '199.126.253.57';
fetchCoordsByIP('199.126.253.57', (error, coords) => {
	if (error) {
		console.log('Error: ', error);
		return;
	}
	console.log('My coordinates: ', coords);
	fetchISSFlyOverTimes(coords, (err, result) => {
		if (err) {
			console.log('Error: ', error);
			return;
		}
		console.log('It worked! Returned flyover times: ', result);
	});
});

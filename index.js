const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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
		console.log('lost', error);
		return;
	}
	console.log(coords);
	// console.log(`{${coords.lat}, ${coords.lon}}`);
});

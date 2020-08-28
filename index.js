const { nextISSTimesForMyLocation } = require('./iss');
const moment = require('moment-timezone');

nextISSTimesForMyLocation(callback => {
	if (error) {
		return console.log("It didn't work! ", error);
	}
	fetchMyIP((error, ip) => {
		if (error) {
			console.log("It didn't work! ", error);
			return;
		}
		console.log('It worked! Returned IP: ', ip);

		fetchCoordsByIP(ip.ip, (error, coords) => {
			if (error) {
				console.log('Error: ', error);
				return;
			}
			console.log('My coordinates: ', coords);

			fetchISSFlyOverTimes(coords, (err, passes) => {
				if (err) {
					console.log('Error: ', error);
					return;
				}
				console.log('It worked! Returned flyover times: ', passes);
			});
		});
	});
});

// var s = new Date(1504095567183).toLocaleDateString("en-US")
// console.log(s)
// // expected output "8/30/2017"
// and for time:

// var s = new Date(1504095567183).toLocaleTimeString("en-US")
// console.log(s)
// // expected output "3:19:27 PM"

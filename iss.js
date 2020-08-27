/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');
// const ipAPI = 'https://ipinfo.io/json';
const ipAPI = 'https://api.ipify.org?format=json';

const fetchMyIP = callback => {
	// use request to fetch IP address from JSON API
	request(ipAPI, (err, response, body) => {
		if (err) return callback(err, null);
		if (response.statusCode !== 200) {
			const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
			return callback(Error(msg), null);
		}

		const data = JSON.parse(body);
		callback(null, data);
	});
};

// const ip = '199.126.253.57';
const coordsAPI = `https://ipvigilante.com/json/`;
// const coordsAPI = 'http://ip-api.com/json/';

const fetchCoordsByIP = (ip, callback) => {
	request(coordsAPI + ip, (err, response, body) => {
		if (err) {
			return callback(Error('stuck'), null);
		}
		if (response.statusCode !== 200) {
			const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${response}`;

			return callback(Error(msg), null);
		}

		const { latitude, longitude } = JSON.parse(body).data;
		// const data = JSON.parse(body);
		return callback(null, { latitude, longitude });
	});
};

module.exports = { fetchMyIP, fetchCoordsByIP };

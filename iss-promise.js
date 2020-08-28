const request = require('request-promise-native');

const ipAPI = 'https://api.ipify.org?format=json';
const coordsAPI = `https://ipvigilante.com/json/`;

const fetchMyIP = () => request(ipAPI);

const fetchCoordsByIP = body => {
	const ip = JSON.parse(body).ip;
	return request(coordsAPI + ip);
};

const fetchISSFlyOverTimes = body => {
	const { latitude, longitude } = JSON.parse(body).data;
	const ISSFlyOverAPI = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
	return request(ISSFlyOverAPI);
};

const nextISSTimesForMyLocation = () => {
	return fetchMyIP()
		.then(fetchCoordsByIP)
		.then(fetchISSFlyOverTimes)
		.then(data => {
			const { response } = JSON.parse(data);
			return response;
		});
};

module.exports = { nextISSTimesForMyLocation };

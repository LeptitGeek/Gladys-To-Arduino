const Promise = require('bluebird');

const retry = 4;

// wait time between signals in ms
const waitTimeBetweenSignals = 200;

module.exports = function(params){

	// if module serial is not present, we cannot contact the arduino
	if(!gladys.modules.serial || typeof gladys.modules.serial.sendCode !== 'function') {
		sails.log.error(`You need to install the serial module in Gladys.`);
		return Promise.reject(new Error('DEPENDENCY_MISSING'));
	}
	else {
		var id = parseInt(params.deviceType.id);
		var codeValue = parseInt(params.state.value);
		
		setTimeout(function(){ 
			gladys.modules.serial.sendCode(`{"deviceType":"${id}","value":"${codeValue}"}%`);
		},
	}
	
	return Promise.resolve();
};

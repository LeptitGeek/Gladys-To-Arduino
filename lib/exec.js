const Promise = require('bluebird');


module.exports = function(params){

	// if module serial is not present, we cannot contact the arduino
	if(!gladys.modules.serial || typeof gladys.modules.serial.sendCode !== 'function') {
		sails.log.error(`You need to install the serial module in Gladys.`);
		return Promise.reject(new Error('DEPENDENCY_MISSING'));
	}
	else {
		var id = params.deviceType.id;
		var code = params.state.value;
		
		gladys.modules.serial.sendCode(`{"deviceType":"${id}","value":"${code}"}%`);
	}
	
	return Promise.resolve();
};

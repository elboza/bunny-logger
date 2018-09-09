'use strict';

const log = require('./bunny-logger.js');

function output(){
	log.info('info output...');
	log.debug('debug output...');
	log.error('error output...');
	console.log('');
}

console.log('default mode:');
output();

console.log('debug=true');
log.set_debug(true);
output();

console.log('quiet=true');
log.set_quiet(true);
output();

console.log('log mode...');
log.set_debug(false);
log.set_quiet(false);
log.set_log(true);
output();
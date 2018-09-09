'use strict';

var bunyan = require('bunyan');
var PrettyStream = require('bunyan-prettystream');

var prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

var log = bunyan.createLogger({
	name: 'logger-simple',
	streams: [{
		level: 'debug',
		type: 'raw',
		stream: prettyStdOut
	}]
});

var DEBUG = false;
var QUIET = false;
var LOG = false;

var logger = module.exports = {
	info: function() {
		if(LOG) return logger.info_bunyan.apply(null, arguments);
		if(QUIET) return;
		return console.log.apply(null, arguments);
	},
	info_bunyan: log.info.bind(log),
	debug: function() {
		if(LOG) return logger.debug_bunyan.apply(null, arguments);
		if(QUIET) return;
		if(DEBUG) return console.log.apply(null, arguments);
	},
	debug_bunyan: log.debug.bind(log),
	error: function() {
		return LOG ?
			logger.error_bunyan.apply(null, arguments) :
			console.log.apply(null, arguments);
	},
	error_bunyan: log.error.bind(log),
	set_debug: function(bool) {
		if(typeof(bool) === 'boolean') DEBUG = bool;
	},
	set_quiet: function(bool) {
		if(typeof(bool) === 'boolean') QUIET = bool;
	},
	set_log: function(bool) {
		if(typeof(bool) === 'boolean') LOG = bool;
	}
};

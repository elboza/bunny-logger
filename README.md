# bunny-logger
a simple logger package for nodeJS

easely change you output mode without changing your code.

## API

```
log.info(...);
log.debug(...);
log.error(...);

log.set_debug(boolean);
log.set_quiet(boolean);
log.set_log(boolean);

```

## example


```
'use strict';

const log = require('bunny-logger');

function output(){
	log.info('info output...');
	log.debug('debug output...');
	log.error('error output...');
	console.log('')
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
```

output:

```
default mode:
info output...
error output...

debug=true
info output...
debug output...
error output...

quiet=true
error output...

log mode...
[2018-09-09T16:51:43.027Z]  INFO: logger-simple/13574 on volcan3.local: info output...
[2018-09-09T16:51:43.028Z] DEBUG: logger-simple/13574 on volcan3.local: debug output...
[2018-09-09T16:51:43.028Z] ERROR: logger-simple/13574 on volcan3.local: error output...
```

## Debug Node

1. add string `debugger;` in js
1. run command `node inspect server.js`
1. enter `repl` to enter variables viewing mode


Using inspector 

For help, see: [link](https://nodejs.org/en/docs/inspector)

1. Start script in inspector mode:
`node --inspector server.js`
1. Open chrome://inspect in a Chromium-based browser or edge://inspect in Edge. 
Click the Configure button and ensure your target host and port are listed.

## Logging

1. Debug
    ```
    const debug = require('debug')('module-name:specific-param');
    
    debug("Hello from module");
    ```
    and use DEBUG env variable when run Node:
    `DEBUG=module-name node server.js` or
    `DEBUG=module-name:* node server.js` or
    `DEBUG=module-name:specific-param node server.js` or
    `DEBUG=other-module,module-name:specific-param node server.js`

1. Winston
    First of all we need to install and link it
    
    ```
    npm i -g winston
    npm link winston
    ```
   
   Winston can be configured to use corresponding transports:
   ```
   return new winston.Logger( {
     transports: [
        new winston.transports.Console({
            timestamp: true,
            colorized: true,
            level: 'info',
        }),
        new winston.transports.File({
            filename: 'debug.log',
            level: 'debug',
        }),
     ]
   });
   ```
   
1. NODE_DEBUG

    Just run with env variable NODE_DEBUG with expected list of debugging modules:
    ```
   NODE_DEBUG='net http' node server.js
    ```
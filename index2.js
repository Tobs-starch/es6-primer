/* 
var logger = function(output){
    console.log(output)
}
export default logger;

logger("Welcome! We are now having fun with modularity");


console.log ("Welcome! We are now having fun with modularity ")
*/

import logger, {appName, dummyFunction} from './tools';
logger(`Welcome! The application name is "${appName}". There is
a function that returns "${dummyFunction()}".`);
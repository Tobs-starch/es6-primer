/* 
//ilustration 1 Default export

import logger from './tools' 
logger("Welcome! We are now having fun with modularity");


import logger, {appName, dummyFunction} from './tools.js';
logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );

logger(`Welcome! The application name is "${appName}".
There is a function that returns "${dummyFunction()}".`); */

/*lexical block scoping */
// here we essentially distinguish betwen variables that are not mutable


// import {multiplier} from './tools.js'

/* spread operator and destructuring assignment*/


// const languages = ["python", "html", "java", "javascript"]

// const [fLang, sLang] = languages;
//console.log(fLang)
//console.log(` the first language i learnt is ${fLang} and the second is ${sLang}`)

//spread operator
/* 
const [fLang, sLang, ... oLang] = languages;

console.log(oLang)

try{
    console.log{multiplier()};
}catch(error){
    console.log(error.message);
}
*/


//263 
/*
import log, {Person} from './tools.js'; 
let person1 = new Person("Tobi", "Vincent", "Male",1.7); 
let person2 = new Person("Mary", "Joseph", "Female", undefined); 

log(`Person 1 is ${person1.firstName} whose gender is ${person1.gender}. Person 2 is ${person2.firstName} whose gender is ${person2.gender}`); 
*/

// accessing object properties
/*
import log, {Person} from './tools.js'; 
let person1 = new Person("Tobi", "Vincet", "Male",1.7); 
let person2 = new Person("Uche", "Joseph", "Female", 1.8); 
person1.firstName = "jane"; //here we have deliberately used lowercase for first letter 
person2.firstName = "casey"; //here we have deliberately used lowercase for first letter 
log(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is ${person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName. 
*/


//static class methods
/* 
import log, {CustomMath} from './tools.js'; 
log(CustomMath.sqrt(100)); 
*/

//inheritance
import log, {User} from './tools.js'; 
let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined); 
log(`The username of ${user1.firstName} is ${user1.username}`) 


//map
import logger from './tools.js' ;

const addressees = ["John Uzo","Mary Smart","Paul Umoh"]; //array with elements.
addressees.map(addressee => {
    let message = `Dear ${addressee}, 
    It is my pleasure to inform you that your admission letter is ready for collection
    
    `;
    logger(message);
});


var logger = function(output){
    console.log(output)
}

/*
//Arrow Function illustration 
var logger = (output) => {
    console.log(output)
}

export var appName = "ES6 Review";

/*
export var dummyFunction = function(){ 
    return "I am a dummy function"; 
}

export var dummyFunction = () =>{ 
    return "I am a dummy function"; 
} 


 
export default logger; 

*/
export const multiplier = (...numbers) => {

    if (numbers.length < 2){ 
        throw new Error("Illegal arguments counts. Arguments must be greater than 1") 
    
} 
       
    let product = 1;

     for(let numer of numbers){
         product = product * numbers;
     }
    
     return product;
}


/**
 * This function returns an array of (x,y) objects for all the x arguments passed
 * @param {*} m
 * @param {*} c
 * @param {...any} x 
 *
 */

/* export const lineGraphFunction = (m, c, ...x) =>{
    
    //map the array of x into an array of {x,y} object , with the y value calculated each time
    const coordinates = x.map((x) =>{
        const y = (m * x) + c;
        return{'x': x, 'y' : y}

    })

    // return coordinates
    let output = 'The (x,y) values are as follows' ;

    for (let coordinate of coordinates){
        let xy = `(${coordinate.x}, ${coordinate.y})`
        //output+=xy;
        output = output + xy;
    }
    return output
}
*/

//263

/*
export class Person{ 
    constructor(firstName, lastName, gender, height){ 
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.gender = gender; 
        this.height = height; 
    } 
}; 
   

*/


//Accessing Object properties

//Create a function that will capitalize the first letter of a string. 
const toTitleCase = (str) => { 
    str.toLowerCase();//first set the whole string to lowercase in case 
    return str.substring(0,0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase 
} 

export class Person{ 
    constructor(firstName, lastName, gender, height){ 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.gender = gender; 
    this.height = height 
} 
getFirstName(){ 
    return toTitleCase(this.firstName) 
    } 
}; 
        


//JavaScript Class methods
   // Static class methods 
//static methods 
/*
export class CustomMath{ 
    static sqrt(a){ 
    return Math.sqrt(a); 
    } 
    static pow(a,b){ 
        return Math.pow(a,b); 
    } 
} 

*/

//inheritance
export class User extends Person{ 
    constructor(username, password, firstName, lastName, gender, height){ 
        super(firstName, lastName, gender, height); 
        this.username = username; 
        this.password = password; 
    } 
} 
   
export default logger;


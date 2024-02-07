/**
 * Object Destructuring
 */

const person={
    name:"Kevin",
    age: 25,
    password: "Wonejo",
};

console.log(person.name)
console.log(person.age)
console.log(person.password)

/**
 * Object Destructuring Example
 */
const {name,age,password}=person; // If we have already a variable with the same name just ranme  like this const {name: name2} = person;
console.log(`This is a Object Destructuring ${name} ${age} ${password}`);


const getPerson=(person)=>{
console.log(person)
const{name,age,password}=person
console.log(name,age,password)
};

getPerson(person)

/**
 * Object Destructuring Example in the argument 
 */

const usecontext=({password,name,age,range='Capitan'})=>{ // In this line y get only the name and the age also can assig values like Capitan
    //console.log(name,age,range)
    return{
        passwordName:password,
        age2:age,
        address:{
            lat:14.24569,
            lng:78.45627
        }
         
    }
}
/**
 * How to make a
 */
const {age2,passwordName,address:{lat,lng}}=usecontext(person); // Destructuring an arrow function
//If We have an object into another object to acces them we use Address:{Data we want to know,Data we nwant to know}
console.log(passwordName,age2)
console.log(lat,lng)


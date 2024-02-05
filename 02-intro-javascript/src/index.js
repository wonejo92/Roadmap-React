/**
 *  They are also know as dictionaries
 */
const person={
    name:"Tony",
    lastName: "Stark",
    age: 45,
    address:{
        city: "NY",
        zip: 1053062,
        lat: 14.3223,
        lng: 34.6597,
    }
};
//console.table({person})
console.log(person)

/**
 * This is a reference assignment
 */
const person2={...person}
console.log(person2)
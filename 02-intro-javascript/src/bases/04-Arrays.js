/**
 * This is one way to create arrays, but this example is to create an array with fixed values and a specific size.
 */
const userArray = new Array(100);
userArray.push("Joan") //Now we have an array with 100 empty values and the last values is Joan

console.log(userArray)

/**
 * The second way to create an array and the most recommended
 * One way to initialize an array is as follows
 */
const numbers=[1,2,3,4]

/**
 * @todo
 * Insert 5 into number without using push
 */
let numbers2=[...numbers,5] //We can use Spread Operator to add number 5

/**
 * Function to  multiply numbers using map
 */
const numbers3=numbers2.map(function(number){
    return number*2
});

console.log(numbers)
console.log(numbers2)
console.log(numbers3)
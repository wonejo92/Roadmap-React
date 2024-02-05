/**
 * Functions on JS
 * This one way to create functions but this is not the best way
 */
function sayHello(name){
    return `Hello ${name} !! Nice to meet you. `;
}

console.log(sayHello("Kevin Cordero"))
/**
 * The best Way to create function is
 */

const sayHello2 = function(name){
    return `Hello ${name} !! Nice to meet you. `;
}

console.log(sayHello2("Kevin Cordero"))

/**
 * Arrow Functions
 */ 
const sayHello3=(name)=>{
    return `This is an arrow Function in ${name}. `;
}

console.log(sayHello3());

/**
 * The same arrow function but more simplified
 */
const sayHello4=(name)=>`Hello this is an simplified arrow Function in ${name}`

console.log(sayHello4("React"))

/**
 * 
 * @returns an Object
 */
const getUser=()=>{
    return{
        uid:'123ABC',
        username: 'Mack92'
    }
}

console.log(getUser())
/**
 * @returns an object with arrow function simplified without return 
 */
const getUserS=()=>({uid:'123ABC',username: 'Mack92'})

console.log(getUserS())


// Practicing
// 1. Change this function to arrow function
// 2. Should return an implicit object
// 3. Testing
function getActiveUser(name){
    return{
        uid:'ABC',
        username:name,

    }
};

const activeUser=getActiveUser("Kevin")
console.log(activeUser)

const getActiveUserArrow=(name)=>({
    uid:'ABC',
    username:name,
})

console.log(getActiveUserArrow("Wonejo92"))





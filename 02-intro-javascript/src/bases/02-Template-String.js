const name = "Kevin"
const lastName = "Cordero"

/**
 * const fullName = name + ' ' + lastName
 */

/**
 * Example of a template string
 */
const fullName = `${name} 
${lastName}
${2+3}`; 

console.log(fullName)

/**
 * 
 * @returns Return a simple greeeting
 */

function getGreeting(name){
    return " Hello " + name
}

console.log(`This is a text: ${getGreeting(name)}`)

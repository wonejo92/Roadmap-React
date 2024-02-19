/**
 * Import and Export
 */

import   heroes,{owners}  from "../data/heroes";

//import {heroes} from './data/heroes' //One way to import is like this

//import {heroes} from './data/heroes'
console.log(heroes)


const getHeroeById=(id)=>{
    return heroes.find((heroe)=>heroe.id===id)
}

const getHeroeById2=(id)=>heroes.find((heroe)=>heroe.id===id)

//Another way to return data

console.log(getHeroeById(2))
console.log(getHeroeById(3))

const getHeroesByOwner=(owner)=>heroes.filter((heroe)=>heroe.owner===owner)
console.log(getHeroesByOwner('DC'))


//Multiple exportations

console.log(owners)


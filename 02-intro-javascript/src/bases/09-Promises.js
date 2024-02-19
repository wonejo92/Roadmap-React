import {getHeroeById} from './bases/08-import-export'
import heroes from './data/heroes';
const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const heroe=getHeroeById(2)
        resolve(heroe);
        //reject("We cant Find") 
    }, 2000);

});

promesa.then((heroe)=>{
    console.log("Heroe",heroe)
}).catch(err=>console.warn(err))



const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           const h1=getHeroeById(id) 
           if(h1){
            resolve(h1)
           }else{
            reject('We cant Find your Heroe!!')
           }
        }, 2000);
    })
}
getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn)

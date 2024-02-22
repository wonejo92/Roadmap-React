//Ternary conditional operator

const activo=true
//let mensaje;
//if(!activo){
//    mensaje='Activo'
//} else{
//    mensaje='Inactivo'
//}

// Ternary conditional operatorExample
const mensaje=(activo)?'Activo':'Inactivo';

//Another way passingn null
const mensaje2=(!activo)?'Activo': null;

//Another way
const mensaje3=activo && 'Activo'

console.log(mensaje)
console.log(mensaje2)
console.log(mensaje3)

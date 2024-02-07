/**
 * Array Destructuring
 */
const  users=["Goku","Vegeta","Trunks"];
console.log(users)
const [character1]=users //How to get the firs element
const [,character2]=users// This i how i can get the second element from the users array
const [,,character3]=users// This i how i can get the third element from the users array
console.log(character1)
console.log(character2)
console.log(character3)


const getArray=()=>{
    return ['ABC',123];
};
console.log(getArray);

const [data1,data2]=getArray();
console.log(data1,data2)


//Todo

const usestate=(valor)=>{
    return [valor,()=>{console.log("Hello Word")}]; //In the second position we have a function
};
const arr=usestate("React")
console.log(arr)

// 1. The first value of the array will be called name
// 2. The second value of the array will be called setName
const [name,setName]=usestate("React")
console.log(name)
setName()
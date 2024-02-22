//Async- Await
//const getImagePromise=()=> 
//   new Promise((resolve)=> resolve('https//jadsasd.com'))  
//getImagePromise()
//    .then(console.log)


const getImage=async/*When we use Async reserved word it becomes a promise*/()=>{ // 
    try {
        const apikey='OalWK9ErjwHXAS3c7Ya5auZOVMVVKbEe';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const {data} = await resp.json();
        const {url}=data.images.original
        const img=document.createElement('img')
        img.src=url
        document.body.append(img)
    } catch (error) {
        console.log("Error!",error)
    }

}

getImage()

const apikey='OalWK9ErjwHXAS3c7Ya5auZOVMVVKbEe'

//FetchApi Example
const request_api = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
request_api
    .then(resp=>resp.json())
    .then(({data}/**Destructuring to avoid having to access as data.data*/)=>{
        const {url}=data.images.original;
        
        //insert image in html
        const img =  document.createElement('img')
        img.src=url;
        document.body.append(img)
       })
    .catch(console.warn)

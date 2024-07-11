
import {GifItem} from "./GifItem.jsx";
import {useFetchGifs} from "../Hooks/useFetchGifs.js";

export const GifGrid = ({category}) => {
    const{images,isloading}=useFetchGifs(category)
    // console.log(images)
    console.log(isloading)


    // getGifs(category)
    return(
      <>
          <h3>{category}</h3>
          <div className="card-grid">
              {
                  images.map(img => (
                      // <li key={id}>{title}</li>
                      <GifItem
                          key={img.id}
                          // title={img.title}
                          // url={img.url}
                          {... img} //Permite Esparcir las props y poder enviar cada uno sin necesidad de definir una variable
                      />
                  ))
              }
          </div>
      </>
    )
}
import {useFetch,userCounter} from "../Hooks";
import {LoadingMessage} from "../03-Examples/LoadingMessage.jsx";
import {PokemonCard} from "../03-Examples/PokemonCard.jsx";


export const Layout = () => {
    const{counter,increment,decrement}=userCounter(1)
    const{data,isLoading,hasError}=useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    return(
        <>
            <h1>Pokemon Data</h1>
            <hr/>
            { isLoading ?
                <LoadingMessage/>:
                <PokemonCard
                    id={data.id}
                    name={data.name}
                    sprites={[data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny
                    ]}/>}
            {/*<pre>{JSON.stringify(data,null,2)}</pre>*/}
            {/*<h2>{data?.name}</h2>*/}
            <button onClick={()=>counter>1? decrement():null} className="btn btn-primary">PREVIUS POKEMON</button>
            <button onClick={()=>increment()} className="btn btn-primary">NEXT POKEMON</button>
        </>
    )
}
import {useState} from "react";
import {AddCategory} from "./Components/AddCategory.jsx";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','One Piece']);

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        // Una forma de insertar una categoria en la lista
        setCategories([newCategory,...categories])
        // Otra forma de insertar una categoria en una lista
        // setCategories(cat=>['Valorant',...cat])
    }
    return(
        <>
            {/*Titulo*/}
        <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value=>onAddCategory(value)}
            />

            {/*Listados de gifs*/}
            <ol>
                {/*Permite Mostrar el listado de categorias en la pagina web*/}
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/*    Gif Iten*/}
        </>
    )
}
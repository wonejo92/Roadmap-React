import {useState} from "react";
import {AddCategory,GifGrid} from "./Components";
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        // Validate the category
        if (categories.includes(newCategory.toLowerCase()) ) return;
        console.log(newCategory);
        // Una forma de insertar una categoria en la lista
        setCategories([newCategory,...categories])
        // Otra forma de insertar una categoria en una lista
        // setCategories(cat=>['Valorant',...cat])
    }
    return(
        <>
        <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={value=>onAddCategory(value)}
            />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}/>
                    ))
            }
        </>
    )
}
import {useEffect, useState} from "react";
import {getGifs} from "../Helpers/getGifs.js";

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([])
    const [isloading, setIsloading] = useState(true)

    const getimages= async ()=>{
        const newImages= await getGifs(category);
        setimages(newImages)
        setIsloading(false)
    }

    useEffect(()=>{
        getimages()
    },[])

    return {
        images,
        isloading
    }
}
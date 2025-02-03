import {useFetchGifs} from "../../src/Hooks/useFetchGifs.js";
import {renderHook,waitFor} from "@testing-library/react";

describe("Test on useFetchGifs hook",()=>{
    test("show return initial state",()=>{
       const{result} = renderHook(()=>useFetchGifs('One Punch'))
        const {images,isloading}=result.current;
        expect(images.length).toBe(0)
        expect(isloading).toBeTruthy()
    })

    test("show return an image array and isloading return false",async () => {
        const {result} = renderHook(() => useFetchGifs('One Punch'))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const {images, isloading} = result.current;
        expect(images.length).toBeGreaterThan(0)
        expect(isloading).toBeFalsy()
    })
})
import {Navbar} from "../../UI/Components/index.js";
import {Navigate, Route, Routes} from "react-router";
import {DCPage, MalvelPage,SearchPage,HeroPage} from "../Pages/index.js";

export const HeroesRoutes = () => {
    return(
       <>
           <Navbar/>
           <div className="container">
               <Routes>

                   <Route path="marvel" element={<MalvelPage/>} />
                   <Route path="dc" element={<DCPage/>} />
                   <Route path="search" element={<SearchPage/>} />
                   {/*  /:Id Se representa como un comodin para que se permita pasar parametros*/}
                   <Route path="hero/:id" element={<HeroPage/>} />
                   <Route path="/" element={<Navigate to={"/marvel"}/>} />

               </Routes>
           </div>

       </>
    )
}
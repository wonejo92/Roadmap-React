import { Route, Routes} from "react-router";
import {HeroesRoutes} from "../Heroes";
import {LoginPage} from "../Auth";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";


export const AppRouter = () => {
    return(
        <>
            <Routes>


                <Route path="login" element={
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>
                } />
                {/*<Route path="login" element={<LoginPage/>} />*/}

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes/>
                        {/*<Route path="/*" element={<HeroesRoutes/>} />*/}
                    </PrivateRoute>
                } />


            </Routes>
        </>
    )
}
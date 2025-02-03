import {AppRouter} from "./Router/AppRouter.jsx";
import {AuthProvider} from "./Auth/index.js";

export const HeroesApp = () => {
    return(
        // Permite Comprtair la informacion correspondiente a la Autenticacion
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    )
}
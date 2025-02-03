import {Navigate, Route, Routes,Link} from "react-router-dom";
import {HomePage} from "./HomePage.jsx";
import {AboutPage} from "./AboutPage.jsx";
import {LoginPage} from "./LoginPage.jsx";
import {NavBar} from "./NavBar.jsx";
import {UserProvider} from "./context/UserProvider.jsx";

export const MainApp = () => {
  return(
      <UserProvider>
          <h1>Main App</h1>
          <NavBar/>
          <hr/>

          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="about" element={<AboutPage/>}/>

              {/*Redirecciona a una pagina en espesifico cuando no se encuentra la pagina que se busca*/}
              {/*<Route path="/*"  element={<LoginPage/>} />*/}
              <Route path="/*" element={<Navigate to="/about"/>}/>

          </Routes>
      </UserProvider>
)
}
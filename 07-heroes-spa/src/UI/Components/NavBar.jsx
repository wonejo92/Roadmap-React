import {Link, NavLink, replace, useNavigate} from "react-router";
import {useContext} from "react";
import {AuthContext} from "../../Auth/index.js";


export const Navbar = () => {
    // Custom Hook to navigate to other page
    const navigate = useNavigate();
    const {user,logout} = useContext(AuthContext)
    const onLogout=()=>{
        logout()
        navigate('/login',
            {replace:true});
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className={({isActive}) =>`nav-link ${isActive ? 'active':''}`}
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({isActive}) =>`nav-link ${isActive ? 'active':''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({isActive}) =>`nav-link ${isActive ? 'active':''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({isActive}) =>`nav-link ${isActive ? 'active':''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        {/*Kevin Cordero*/}
                        {user ?.name}
                    </span>
                    <button
                        className="nav-item nav-link btn"
                    onClick={onLogout}
                    >Logout</button>
                </ul>
            </div>
        </nav>
    )
}
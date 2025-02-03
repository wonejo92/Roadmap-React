import {Navigate, useNavigate, useParams} from "react-router";
import {getHeroById} from "../Helpers/index.js";
import {useMemo} from "react";

export const HeroPage = () => {
    const {id}=useParams()
    // useMemo Permite alamcenar en este caso el id si es el mismo no se efectua el cambio pero si es diferente si se hace el cambio
    const hero= useMemo(()=>getHeroById(id),[id]);
    const navigate=useNavigate();
    const onNavigateBack=()=>{
        navigate(-1)
    }


    if(!hero){
        return <Navigate to={`/marvel`}/>
    }

    return(
        <div className="row -mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInUp"/>
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:{hero.alter_ego}</b></li>
                    <li className="list-group-item"><b>Publisher:{hero.publisher}</b></li>
                    <li className="list-group-item"><b>First Appearence:{hero.first_appearance}</b></li>
                </ul>

                <h5 className="mt-3">Characters:</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-outline-primary" onClick={onNavigateBack}> Back </button>
            </div>
        </div>

    )
}
import {getHeroesByPubisher} from "../Helpers";
import {HeroesCard} from "./HeroeCard.jsx";
import {useMemo} from "react";

export const HeroesList = ({publiser}) => {
    const heroes= useMemo(()=>getHeroesByPubisher(publiser),[publiser]);
    return(
        <>
            <div className="row rows-col1 row-cols-md-3 g-3">
                {heroes.map((hero) => (
                    <HeroesCard
                        key={hero.id}
                        {...hero}/>
                ))}
            </div>
        </>
    )
}
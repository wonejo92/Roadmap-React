import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp.js";
import heroes from "../../src/data/heroes.js";

describe('Test of 08-imp-exp', () => {

    test('getHeroeById Returns Heroe', () => {
        const id=1;
        const hero = getHeroeById(id);
        // console.log(hero);
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    })

    test('getHeroeById Returns Undefined', () => {
        const id=100;
        const hero = getHeroeById(id);
        // console.log(hero);
        expect(hero).toBeFalsy()

    })

    test('GetHeroesByOwner Return  DC HEROES', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes)
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
        expect(heroes).toEqual(heroes.filter((heroes)=>heroes.owner === owner))
    })

    test('GetHeroesByOwner Return  MARVEL HEROES', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes)
        expect(heroes.length).toBe(2)
        expect(heroes).toEqual(heroes.filter((heroes)=>heroes.owner === owner))
    })

    //Tarea GetHeroesByOwner


})
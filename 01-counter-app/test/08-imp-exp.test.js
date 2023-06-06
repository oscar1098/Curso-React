import { getHeroeById } from '../src/base-pruebas/08-imp-exp';

describe('Prueba en 08-imp-exp', () => {

    test('getHeroeById Debe retornar un heroe por ID', () => {
        
        const id = 1;

        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )

    });

    test('getHeroeById deber retornar undefine si no existe', () => {
        
        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )

        console.log(hero);
    });
});
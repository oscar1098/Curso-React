import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Prueba en 08-imp-exp', () => {

    test('getHeroeById Debe retornar un heroe por ID', () => {
        
        const id = 1;

        const hero = getHeroeById( id );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } )

    });

    test('getHeroeByOwner deber retornar un arreglo de heroes por owner', () => {
        
        const owner = 'DC';
        const heroess = getHeroesByOwner( owner );
        console.log(heroess);

        expect( heroess.length ).toBe( 3 );
    });
}); 
import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe('Prueba en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );
     });

    test('getUsuarioActivo debe retornar un objeto', () => { 

        const nombre = 'Oscar';

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: nombre
        };

        const usuarioActivo = getUsuarioActivo(nombre,edad);

        expect( testUsuarioActivo ).toEqual( usuarioActivo )
     });
 });

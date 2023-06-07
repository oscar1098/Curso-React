import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Prueba 06 desestructuracion arreglos' , () => {
    test('usContext debe retornar un objeto',() => {

        const clave = 'Oscar',
              edad = 23;
            
        const obj = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        expect(obj).toEqual(usContext({clave,edad}))
    })
})
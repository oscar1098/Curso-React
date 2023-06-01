
test('Esta prueba no debe de falar', ()=>{
    if ( 0 === 1 ) {
        throw new Error('No puede dividir entre cero')
    }
})
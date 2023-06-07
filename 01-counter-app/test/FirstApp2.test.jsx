import { render,screen }  from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp2 />', () => { 
    
    const title = 'Hola a todos';
    const subTitle = 'Soy un subtitulo';
    

   test('Debe hacer match con el snapshot', () => { 

       const { container } = render( <FirstApp title = { title } /> );

       expect(container).toMatchSnapshot();
    });

    test('Dede mostrar el mensaje "Hola a todos"', () => { 

        render( <FirstApp title={ title } /> );
        expect( screen.getAllByText ).toBeTruthy();
        // screen.debug();
     });

     test('Debe mostrar el titulo en un h1', () => { 
        
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title );

     });

     test('Debe de mostrar el subtitulo enviado por prpos', () => { 

        render( 
        <FirstApp 
            title= {title} 
            subTitle={subTitle}
        /> 
        );

        expect( screen.getAllByText( subTitle).length).toBe(2);
      })
 });
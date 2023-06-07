import { render }  from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => { 
    
    // test('Debe de hacer match con el snapshot', () => { 

    //     const title = 'Hola mundo';
    //     const {container } =  render( <FirstApp title= {title} /> );

    //     expect(container ).toMatchSnapshot();

    //  });

     test('Debe mostrar el titulo en un h1', () => { 
        const title = 'Titulo';
        const { container, getByText, getByTestId } =  render( <FirstApp title= {title} /> );

        expect(  getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML).toContain( title )

         
      });

      test('Debe mostrar el subtitulo enviado por props', () => { 
        
        const title = 'Titulo';
        const subTitle = 'No hay subtitulo';
        const { getByText } =  render( 
            <FirstApp 
                title= {title} 
                subTitle={subTitle}
            /> 
        );

        expect(  getByText(title) ).toBeTruthy();
       })
 })
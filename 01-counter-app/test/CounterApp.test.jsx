import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Prueba en CounterApp', () => { 

    const valuei = 10;

    test('Debe hacer match con el snapchot', () => { 

        const { container } = render( <CounterApp value={valuei}/> );
        expect( container ).toMatchSnapshot()
     });

     test('Dede mostrar el valor inical de 100', () => { 

        render( <CounterApp value={100} /> );
        expect( screen.getByText(100)).toBeTruthy();

        // expect(screen.getByRole('heading',{level : 2}).innerHTML).toContain('100')
      });

      test('Debe incrementar con el boton +1', () => { 

        render( <CounterApp value={valuei}/> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy();
       });
      
      test('Debe decrementar con el boton -1', () => { 

      render( <CounterApp value={valuei}/> );
      fireEvent.click( screen.getByText('-1') )
      expect( screen.getByText('9') ).toBeTruthy();
      
      });
      
      test('Debe reinicar con el boton reset', () => { 

      render( <CounterApp value={355}/> );
      fireEvent.click( screen.getByText('+1') )
      fireEvent.click( screen.getByText('+1') )
      fireEvent.click( screen.getByText('+1') )
      // fireEvent.click( screen.getByText('Reset') )
      fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
      expect( screen.getByText( 355 ) ).toBeTruthy();


      });
 });
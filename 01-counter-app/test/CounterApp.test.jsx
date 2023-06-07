import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Prueba en CounterApp', () => { 

    const valuei = 100;

    test('Debe hacer match con el snapchot', () => { 

        const { container } = render( <CounterApp value={valuei}/> );
        expect( container ).toMatchSnapshot()
     });

     test('Dede mostrar el valor inical de 100', () => { 

        render( <CounterApp value={100} /> );
        expect( screen.getByText(100)).toBeTruthy();
      })
 });
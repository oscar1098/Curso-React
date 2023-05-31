import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstComponent, SecondComponent } from './FirstComponent';


ReactDOM.createRoot( document.getElementById('root') ).render(

    <React.StrictMode>
        <FirstComponent/>
        <SecondComponent/>
    </React.StrictMode>
);


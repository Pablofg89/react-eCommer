import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Clases de bootstrap -> estilo 
import 'bootstrap/dist/css/bootstrap.min.css';
// Archivos js y jquery de bootstrap -> comportamiento
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);



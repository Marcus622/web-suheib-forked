import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Komponente from './Komponente';
import ChartsOverviewDemo from './ChartsOverviewDemo'; 
import Dynamic from './useState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Komponente Name="Marcus" />
    <Komponente Name="Julian" />
    <Komponente Name="Helmut" />
    <ChartsOverviewDemo />
    <Dynamic>                        </Dynamic>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

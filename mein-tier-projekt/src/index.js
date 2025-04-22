import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Behandlung from './Behandlung'
import Contact from './Contact';
import Impressum from './Impressum';
import Faq from './Faq';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/Behandlung" element={<Behandlung></Behandlung>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Impressum" element={<Impressum></Impressum>}></Route>
        <Route path="/Faq" element={<Faq></Faq>}></Route>



      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from  './pages/About'
import Location from './pages/Location'
import Error from './components/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

//import reportWebVitals from './reportWebVitals';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import {createGlobalStyle} from 'styled-components';




const GlobalStyle = createGlobalStyle`
    
    nav {
        float: right;
        margin-top: 25px;
  }`

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle />
    <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path ='/about' element={<About />} />
      <Route path ='location/${id}' element={<Location />} />
      <Route path ='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

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
  }
  
  .card {
    margin: 50px;
    padding-top: 50px;
    padding-bottom:50px;
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    grid-gap: 60px;
    margin-bottom: 100px;
    

  }
  .cardDiv {
    
    border-radius: 15px;
    background-color: red;
    position: relative;
  }
  .cardImg{
    width: 100%;
    height: 100%;
    border-radius: 15px;
  
  }

  .cardTitle {
    position: absolute;
    bottom: 0;
    font-size: 18px;
    color: #FFFFFF;
    margin-left: 19px;
  }
  `

 

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle />
    <Header />
    
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path ='/about' element={<About />} />
      <Route path ='/:id' element= {<Location  />} />
      <Route path ='/error' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

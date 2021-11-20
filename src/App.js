import './App.css';
import {Header} from './My component/Header'
import Main from './My component/Main'
import Footer from './My component/Footer'
import {useState} from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [theme, setTheme]= useState('light');
  let themeHandler={};
  if (theme==='dark') {
    document.body.style.background= "#0e0e0e";
    document.body.style.transition= "all 0.6s";
    themeHandler={
      backgroundColor: '#0e0e0e',
      color: 'white',
      transition: 'all 0.6s'
    }
  }
  else{
    document.body.style.background= "white"
    themeHandler={
      backgroundColor: 'white',
      color: 'black',
      transition: 'all 0.6s'
    }
  }

  return (
    <Router>
      <div style={themeHandler}>
        <Header title="Text-Tool" searchbar={false} theme={theme} setTheme={setTheme}/>
        <Main themeHandler={themeHandler}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
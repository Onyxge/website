import './App.css'
import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Services from './components/Services'
import Companies from './components/Companies'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Main/>
      <About />
      <Services/>
      <Companies />
      <Footer/>
     </>

  );
}

export default App

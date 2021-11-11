import React, { useEffect, useState } from 'react';
import Preloader from './helpers/Preload';
// import ScrollToTop from './helpers/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [load, updateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      updateLoad(false);
    }, 1200);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App">
        <Header />
        {/* <ScrollToTop /> */}
        {/* <Home /> || Hero section and social links with brief explanation about me */}
        {/* <About /> || More detailed overview of myself and who I am */}
        {/* <Projects /> || Display of my most technical or efficient projects with links to code and deploymnent */}
        {/* <Resume /> || Display of my experience and programming knowledge */}
        <Footer />
      </div>
    </>
  );
}

export default App;

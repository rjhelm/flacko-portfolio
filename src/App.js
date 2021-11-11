import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
        {/* <Home /> || Hero section and social links with brief explanation about me */}
        {/* <About /> || More detailed overview of myself and who I am */}
        {/* <Projects /> || Display of my most technical or efficient projects with links to code and deploymnent */}
        {/* <Resume /> || Display of my experience and programming knowledge */}
      <Footer />
    </div>
  );
}

export default App;

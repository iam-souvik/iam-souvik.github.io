
// import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Github from './Components/GithubCalender/gitgubCalender';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Protfolio from './Components/Protfolio/Protfolio';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonials/Testimonial';
// import Profile from './ProrofolioContainer/Home/Profile';

function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <Nav/>
      <About/>
      <Protfolio/>
      <Experience/>
      <Services/>
      
      <Github/>
      <Testimonial/>
      <Contact/>
      <Footer/>
   </>
    </div>
  );
}

export default App;

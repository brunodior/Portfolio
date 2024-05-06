import './index.scss';
import Home from './sections/Home';
import NavBar from './sections/Navbar';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Footer from './sections/Footer';
import Hability from './sections/Hability';

function App() {
  return (
    <div className='bg-secondary w-100 overflow-hidden'>
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Hability/>
        <Portfolio/>
        <Footer/>
    </div>
  );
}

export default App;

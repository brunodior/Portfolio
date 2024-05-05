import './index.scss';
import Home from './sections/Home';
import NavBar from './sections/Navbar';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';

function App() {
  return (
    <div className='bg-secondary w-100 overflow-hidden'>
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Portfolio/>
    </div>
  );
}

export default App;

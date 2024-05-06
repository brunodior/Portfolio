import './index.scss';
import Home from './sections/Home';
import NavBar from './sections/Navbar';
import AboutMe from './sections/AboutMe';
import Portfolio from './sections/Portfolio';
import Footer from './sections/Footer';
import Hability from './sections/Hability';
import Contact from './sections/Contact';
import {  IonContent, IonMenu,  } from '@ionic/react';
import Hobbies from './sections/Hobbies';

function App() {
  return (
    
    <div className='bg-secondary w-100 overflow-hidden'>
          {/* <IonMenu contentId="main-content">
                  <IonContent className="ion-padding">

                  <ul class="nav nav-underline d-block">
                  <li class="nav-item">
                      <a class="nav-link h6 mx-2 mt-1 fw-semibold unbounded " aria-current="page" href="#home">Inicio</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link h6 mx-2 mt-1 fw-semibold unbounded" aria-current="page" href="#aboutme">Sobre mim</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link h6 mx-2 mt-1 fw-semibold unbounded" aria-current="page" href="#hability">Habilidades</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link h6 mx-2 mt-1 fw-semibold unbounded" aria-current="page" href="#portfolio">Portfólio</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link h6 mx-2 mt-1 fw-semibold unbounded" aria-current="page" href="#hobbies">Hobbies</a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link h6 mx-2 mt-1 fw-semibold unbounded" aria-current="page" href="#contact">Contato</a>
                  </li>
                
                </ul>

                  
                  </IonContent>
          </IonMenu> */}
        <NavBar/>
        <Home/>
        <AboutMe/>
        <Hobbies/>
        <Hability/>
        <Portfolio/>
        <Contact/>
        <Footer/>

    </div>
  );
}

export default App;

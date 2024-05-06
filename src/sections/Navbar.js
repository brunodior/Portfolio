import logo from '../assets/logotipoBD.png'
import {  IonMenuButton, } from '@ionic/react';

function NavBar(){
return(
   <section className="position-fixed top-0 end-0 start-0 px-3 px-md-5 py-3 d-flex justify-content-between bg-primary" style={{zIndex: '100', minHeight: '96px'}}>
        <img src={logo} alt='logo' style={{height: '40px'}}/>
        <ul class="nav nav-underline d-none d-md-flex">
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


           
            {/* <div id="main-content" color="white" className="d-flex d-md-none text-white">
                <IonMenuButton></IonMenuButton>
            </div> */}

   </section> 
)
}
export default NavBar
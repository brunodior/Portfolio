import logo from '../assets/logotipoBD.png'

function NavBar(){
return(
   <div className="px-5 py-4 d-flex justify-content-between bg-primary">
        <img src={logo} alt='logo' style={{height: '40px'}}/>
        <ul class="nav nav-underline">
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
   </div> 
)
}
export default NavBar
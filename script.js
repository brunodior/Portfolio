let marginhabilidades = 0; //Margin para movimentar o carrosel de habilidades

let active = false

document.querySelector('.material-symbols-outlined').addEventListener('click', ()=>{ 

    if(active == false){
        active = true;

        document.querySelector('.menu-hamburguer').style.display = 'flex';
    }
    else {
        active = false;
        document.querySelector('.menu-hamburguer').style.display = 'none';
    }
   


})
document.querySelector('.habilidades-setaLeft-icone').addEventListener('click', ()=> {
   
    if(window.innerWidth >460){
    marginhabilidades = marginhabilidades + 340;
    if(marginhabilidades > 0){
        marginhabilidades = 0;
    }
    
    document.querySelector('.habilidades-list').style.marginLeft = marginhabilidades  + 'px';}
    else {
        marginhabilidades = marginhabilidades + (window.innerWidth - 20);
        if(marginhabilidades > 0){
            marginhabilidades = 0;
        }
        document.querySelector('.habilidades-list').style.marginLeft = marginhabilidades + 'px'; ;
    }
})

document.querySelector('.habilidades-setaRigth-icone').addEventListener('click', () => {
    if(window.innerWidth > 460){
    let x = marginhabilidades - 340;
    if((window.innerWidth - 2640) > x){
        x = 0;
    }
    marginhabilidades = x;
    document.querySelector('.habilidades-list').style.marginLeft = marginhabilidades + 'px';}
    else{
        marginhabilidades = marginhabilidades - (window.innerWidth - 80)  ;
        let x = -(window.innerWidth * 4) - 20;
        if(marginhabilidades < x){
            marginhabilidades = 0;
        }
        document.querySelector('.habilidades-list').style.marginLeft = marginhabilidades + 'px';
    }
})


window.addEventListener('scroll', () => {

    monitorar();


})

function monitorar(){

        if(window.scrollY > 100){
            document.querySelector('header').style.backgroundColor = '#05001c';
            
        }else {
            document.querySelector('header').style.backgroundColor = 'transparent';
           
        }
    }
    ;

    window.sr = ScrollReveal({reset: true});

ScrollReveal().reveal('.inicio-informacoes', {
    delay: 300,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})

ScrollReveal().reveal('.inicio-img', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})

ScrollReveal().reveal('.video', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})

ScrollReveal().reveal('.include-texto', {
    delay: 300,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})

ScrollReveal().reveal('.sobreMim-texto', {
    delay: 300,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})

ScrollReveal().reveal('.sobreMim-img', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
ScrollReveal().reveal('.hobbies-item', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})

ScrollReveal().reveal('.portifolio-item', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})

const menuItens = document.querySelectorAll('.navegacao a[href^="#"]'); //pega todos a

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick); //coloca um evento de click para cada a
})

function scrollToIdOnClick(event) { //esse event e passado cada a cada vez que e clicado, addeventlistener
    event.preventDefault();
    const element = event.target; // o event vem com varios atributos, o target pega so a tag "a"
    const id = element.getAttribute('href'); //pega so atributo href dentro do element
    const to = document.querySelector(id).offsetTop; //esse offsettop pega o top da section

    window.scroll({
        top: to - 100,
        behavior: "smooth",
    })
}

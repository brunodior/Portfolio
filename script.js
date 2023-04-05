let active = false

let header = document.querySelector('header');




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

window.sr = ScrollReveal({reset: true});

ScrollReveal().reveal('.inicio-anuncio', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})

ScrollReveal().reveal('.missao-texto', {
    delay: 300,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('.missao-conteudo h1', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
ScrollReveal().reveal('.quemSomos-textos', {
    delay: 300,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
ScrollReveal().reveal('#quemSomos img', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})

ScrollReveal().reveal('.servicos-item', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})
ScrollReveal().reveal('.membros-container', {
    delay: 300,
    rotate:{
        x:0,
        y:100,
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

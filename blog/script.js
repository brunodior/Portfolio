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

window.sr = ScrollReveal({reset: true});

ScrollReveal().reveal('.foto', {
    delay: 300,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})

ScrollReveal().reveal('.logo', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})


ScrollReveal().reveal('.post-item', {
    delay: 300,
    rotate:{
        x:100,
        y:0,
        z:0
    }
})

ScrollReveal().reveal('.doPost', {
    delay: 300,
    rotate:{
        x:0,
        y:100,
        z:0
    }
})
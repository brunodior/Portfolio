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
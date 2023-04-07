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
        marginhabilidades = marginhabilidades + (window.innerWidth - 60);
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
        marginhabilidades = marginhabilidades - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 8) - 10;
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
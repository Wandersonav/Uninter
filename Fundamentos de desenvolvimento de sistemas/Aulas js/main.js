let botao1 = document.querySelector("#bt");
let estaQuebrado = false;

botao1.style.background="blue";
    

botao1.addEventListener("mouseover", e =>{
    if (!estaQuebrado) // ! significa não
    botao1.style.background="green"; 
     });

botao1.addEventListener("mouseout", e =>{
    if (!estaQuebrado) // ! significa não
    botao1.style.background="blue"; 
     });
        
botao1.addEventListener('click', e =>{
    botao1.style.background="red"; 
        botao1.innerHTML="Quebrei";
        estaQuebrado=true;
    });


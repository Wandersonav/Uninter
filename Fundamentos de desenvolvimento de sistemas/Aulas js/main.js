let botao1 = document.querySelector("#bt");

botao1.addEventListener("mouseover", corVerde);
botao1.addEventListener("mouseout", corVerde);
botao1.addEventListener('click', corVermelho);


    function corVerde(){
        botao1.style.background="green";
    }

    function corVerde() {
        botao1.style.background="blue";

    }

    function corVermelho() {
        botao1.style.background="red";
        
        alert("quebrei")

    }
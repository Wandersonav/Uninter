const numero1 = document.querySelector("#numero1");
const numero2 = document.querySelector("#numero2");

const selecionado = document.querySelector("#selecionado");
const igual = document.querySelector("#igual");
let resposta = document.querySelector("#resposta");

selecionado.addEventListener("change", calcular);
numero1.addEventListener("keyup",calcular);
numero2.addEventListener("keyup",calcular);


function calcular() {
   
    if (numero1.value != "" && numero2.value != ""){
    const valor1 = parseInt(numero1.value);
    const valor2 = parseInt(numero2.value);

    const operacao = selecionado.value

    if(operacao === "Soma"){resposta.innerHTML = valor1 + valor2};
    if(operacao === "Subtração"){resposta.innerHTML = valor1 - valor2};
    if(operacao === "Divisão"){resposta.innerHTML = valor1 / valor2};
    if(operacao === "Multiplicação"){resposta.innerHTML = valor1 * valor2};

}}
    





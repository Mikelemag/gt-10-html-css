 //armazenar valor dos inputs altura e peso
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
//armazenar o valor do botão por id
var btn = document.getElementById("btn")
//armazenar o valor da div fim
var fim = document.getElementById("fim")

//funçao para calcular o IMC
function calcularIMC(){
    //armazenar apenas o valor do input
    const valorAltura = altura.value
    const valorPeso = peso.value

    //calcular o IMC
    const imc = valorPeso / (valorAltura * valorAltura)
    
    return imc
}

//função de click
function calcular(){
    //chama a funçao de calcular IMC e armazenar valor
    const imc = calcularIMC()
    var mensagem =""

    if(imc < 18.5){
        mensagem = "voce esta abaixo do peso"
    }
    if (imc >= 19 && imc < 24.9){
        mensagem = "peso normal"
    }   
    if(imc >= 25 && imc < 29.9){
        mensagem = "sobrepeso"
    }
    if(imc >= 30 && imc < 34.9){
        mensagem = "obesidade grau 1"
    }
    if(imc >=35 && imc < 39.9){
        mensagem = "obesidade grau 2"
    }
    if(imc >= 40){
        mensagem = "obesidade grau 3"
    }

   //renderizar o resultado na div fim
   fim.innerHTML = `
    <div class="linha"></div>
            <div class="resultado">
            <div class="esquerda">
                <h2>${imc.toFixed(2)}</h2>
                    <p>Seu IMC</p>
                </div>
                <div class="direita">
                <p>${mensagem}</p>                
                </div>
            </div>
            <div class="linha"></div>
   `
}

//acd evento de click no botao
btn.addEventListener("click", calcular)

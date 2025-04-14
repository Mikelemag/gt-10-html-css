const carro = {
    modelo: "Palio",
    cor: "vermelho",
    ano: 2021,
    km: 800
}

function verificarCarro(carro){
    if(carro.ano > 2020 || carro.km < 1000){
        console.log("carro novo")
    } else{
        console.log("carro.usado")
    }
}
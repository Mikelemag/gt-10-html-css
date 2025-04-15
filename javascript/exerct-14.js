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
        console.log("carro usado")
    }
}

verificarCarro(carro)


const moto = {
    modelo: "fazer",
    cor: "azul",
    ano: 2019,
    km: 600
}
    function verificarMoto(moto){
        if(moto.ano > 2019 || moto.km < 600)
        {console.log("moto nova")}
        else{
            console.log("moto usada")
        }
    }
    verificarMoto(moto)

    
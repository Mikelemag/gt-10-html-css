// crie uma funçao pegue a idade, genero e cidade de um usuario
//se o usuario for do sexo masculino e tiver mais de 18 anos
//exibir Precisa se alistar
//se o usuario for do sexo masculino e tiver menos de 18 anos
//exibir Nao pode se alistar

const user = {
    nome: "Paulo",
    idade: 19,
    genero: "masculino",
    cidade: "Fortaleza"

}
function verificarAlistamento (user){
    if(user.genero == "masculino" && user.idade >= 19){
        console.log("Precisa se alistar")
}   else{
    console.log("Nao pode se alistar")
}
}
verificarAlistamento (user)
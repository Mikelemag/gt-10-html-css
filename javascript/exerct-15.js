const user = {
    nome: "Mikele",
    altura: 1.56,
    peso: 67,
}


//criar uma funçao que receba o objeto user e calcule o IMC
//IMC = peso / (altura * altura)

function calcularIMC(user){

    const imc = user.peso / (user.altura * user.altura)
    if(imc < 18,5){
        console.log("abaixo do peso")}
         if (imc >= 18,5 && imc < 24.9){
            return console.log("peso normal")
        } 
         if( imc >= 25 && imc < 29.9){
            return console.log("Sobrepeso")
        }
         if(imc >= 30 && imc < 34.9){
            return console.log("obesidade grau 1")
        }
         if(imc >=35 && imc < 39.9){
           return console.log("obesidade grau 2")
        }
        if (imc =>40 ){
           return console.log("obesidade grau 3")
        }

    }
    
    

calcularIMC(user)


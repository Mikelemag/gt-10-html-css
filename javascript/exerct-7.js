//lista de modelos de carros

const modelos =[ "argo", "gol", "hilux", "civic" , "onix"]

//adicionar um modelo no final da lista
modelos.push("voyage")

console.log(modelos)

//contagem 
console.log(modelos.length)
modelos.push("palio")
console.log(modelos.length)

//remover o ultimo modelo
modelos.pop() //palio
console.log(modelos.length)

//remover modelo especifico
modelos.splice(1, 1)//remove modelo na posiçao 1
console.log(modelos)


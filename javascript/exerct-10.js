const user ={
    nome: "Mikele",
    idade: 28,
}

const produtos = [
    {nome: "maça", preco:2.50},
    {nome: "iphone", preco: 3000}
]

const produtosMaiorDeIdade = [
    {nome: "51", preco: 50.00},
    {nome: "JackDaniels", preco: 150.00}
]

if(user.idade >= 18){
    console.log(produtos, produtosMaiorDeIdade)
}
else {
    console.log(produtos)
}
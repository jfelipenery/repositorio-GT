
const produtos = [
    {nome: "tv", preco: 2034, categoria: "eletronicos"},
    {nome: "ventilador", preco: 2035, categoria: "eletronicos"},
    {nome: "nootbook", preco: 2036, categoria: "eletronicos"}
];
for (let i =0; produtos.length; i++){
    const produto = produtos[i]
    console.log(`produto: ${produto.nome}| preço: ${produto.preco} | categoria: ${produto.categoria}`);
    
};


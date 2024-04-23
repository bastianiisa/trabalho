
let array = []

function adicionarPersonagem() {
    let nomePersonagem = readline.question("insira o nome do personagem");
    let idadeDoPersonagem = readline.question("insira a idade do personagem");
    
    array.push({nome : nomePersonagem, idade: idadeDoPersonagem});
}
console.log(array)
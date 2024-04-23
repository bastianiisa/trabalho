let moradores = ["Seu Madruga", "Chaves", "Kiko", "Dona Florinda"]

const readlineSync = require('readline-sync');
const novoMorador = readlineSync.question("Insira o nome do morador:");
moradores.push(novoMorador)

console.log(moradores)

let ladrao = Math.floor((Math.random() * 10) + 1); 

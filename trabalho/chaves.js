const readlineSync = require('readline-sync');

let moradores = ["Seu Madruga", "Chaves", "Kiko", "Dona Florinda"]

let objetosRoubados = []

//funçao para exibir o menu de opçoes
function exibirMenu() {
    console.log("Menu de Opções: ");
    console.log("1. Investigar ladrão");
    console.log("2. Cadastrar novo morador");
    console.log("3. Visualizar todos moradores da vila");
    console.log("4. Adicionar um novo objeto roubado");
    console.log("5. Visualizar todos objetos roubados");
    console.log("6. Sair");
}

function processarEscolha(opcao) {
    switch (opcao) {
        case '1':
            let indiceLadrao = Math.floor(Math.random() * moradores.length);
            let nomeLadrao = moradores[indiceLadrao];

            console.log("O ladrão é: " + nomeLadrao)

            break;
        case '2':
            const novoMorador = readlineSync.question("Insira o nome do morador: ");
            moradores.push(novoMorador)

            break;
        case '3':
            console.log(moradores)

            break;
        case '4':
            const novoObjetoRoubado = readlineSync.question("Insira o objeto roubado: ");
            objetosRoubados.push(novoObjetoRoubado)

            break;
        case '5':
            console.log(objetosRoubados)

            break;
        case '6':
            console.log("Saindo do programa...")

            return true; // indica que o programa deve ser encerrado
        default:
            console.log("Opçao invalida. Por favor, escolha uma opçao válida.");
    }
    return false; //indica que o programa não deve ser encerrado


}

//Funçao Principal
function main() {
    let encerrar = false;

    while (!encerrar) {
        exibirMenu();
        let opcao = readlineSync.question("Digite o numero da opção desejada: ");
        encerrar = processarEscolha(opcao);
    }
}

//iniciar o programa
main() 
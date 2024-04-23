//funçao para exibir o menu de opçoes
function exibirMenu() {
    console.log("Menu de Opções: ");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");
    console.log("4. Sair");
}

const readlineSync = require('readline-sync');

function processarEscolha(opcao){
    switch(opcao){
        case '1':
            console.log("Você escolheu a opção 1.");
            break;
            case '2':
                console.log("Você escolheu a opçao 2.");
                break;
                case '3':
                    console.log("Você escolheu a opção 3.");
                    break;
                    case '4':
                        console.log("Encerrando o programa...");
                        return true; // indica que o programa deve ser encerrado
                    default:
                        console.log("Opçao invalida. Por favor, escolha uma opçao válida.");
    } 
    return false; //indica que o programa não deve ser encerrado
                    
                
}

//Funçao Principal
function main() {
    let encerrar = false;

    while (!encerrar){
        exibirMenu();
        let opcao = readlineSync.question("Digite o numero da opçao desejada: ");
        encerrar = processarEscolha(opcao);
    }
}

//iniciar o programa
main() 


let listaDoNumeroSorteado=[];
let numeroLimite=100;
let numeroSecreto= gerarNumeroAleatório();
let Tentativas= 1;
function exibirTextoNaTela(tag, texto) {
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');

exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = Tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${Tentativas} ${palavraTentativa}!`; 
        mensagemTentativas = String(mensagemTentativas);
        console.log("Valor de mensagemTentativas:", mensagemTentativas);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }  else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        Tentativas= Tentativas + 1;
        LimparCampo()
     }
}



function gerarNumeroAleatório() {
    let numeroEscolhido= parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDoNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDoNumeroSorteado= [];
    }

    if (listaDoNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatório();
    } else {
        listaDoNumeroSorteado.push(numeroEscolhido);
        console.log(listaDoNumeroSorteado);
        return numeroEscolhido;
    }
}

function LimparCampo() {
        chute=document.querySelector('input');
        chute.value='';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatório();
    LimparCampo();
    Tentativas= 1;
    exibirTextoNaTela('h1', 'Jogo do número aleatório');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número aleatório');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

exibirMensagemInicial();
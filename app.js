console.log(dados);


// Supondo que já existam dois valores para comparar
let valorAtual = Math.floor(Math.random() * 10) + 1; // Valor inicial aleatório
let novoValor = Math.floor(Math.random() * 10) + 1;  // Novo valor para comparação

// Exibindo o valor atual para o jogador
document.getElementById('valor-atual').innerText = `Valor Atual: ${valorAtual}`;

// Variável para armazenar a escolha do jogador
let escolhaJogador = '';

// Adicionando os botões para a escolha do jogador
const botaoMaior = document.getElementById('maior');
const botaoMenor = document.getElementById('menor');

// Lógica quando o jogador escolhe "maior"
botaoMaior.addEventListener('click', () => {
  escolhaJogador = 'maior';
  compararValores();
});

// Lógica quando o jogador escolhe "menor"
botaoMenor.addEventListener('click', () => {
  escolhaJogador = 'menor';
  compararValores();
});

// Função para comparar os valores e exibir o resultado
function compararValores() {
  document.getElementById('novo-valor').innerText = `Novo Valor: ${novoValor}`;

  if (escolhaJogador === 'maior') {
    if (novoValor > valorAtual) {
      exibirResultado('Você ganhou! O novo valor é maior.');
    } else {
      exibirResultado('Você perdeu! O novo valor não é maior.');
    }
  } else if (escolhaJogador === 'menor') {
    if (novoValor < valorAtual) {
      exibirResultado('Você ganhou! O novo valor é menor.');
    } else {
      exibirResultado('Você perdeu! O novo valor não é menor.');
    }
  }

  // Gerar um novo valor para a próxima rodada
  valorAtual = novoValor;
  novoValor = Math.floor(Math.random() * 10) + 1;
  document.getElementById('valor-atual').innerText = `Valor Atual: ${valorAtual}`;
}

// Função para exibir o resultado
function exibirResultado(mensagem) {
  document.getElementById('resultado').innerText = mensagem;
}

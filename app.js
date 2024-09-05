console.log(dadosHerois);
console.log(dadosItens); // Verifique se você está carregando dadosItens também

// Função para encontrar o item associado ao herói
function encontrarItemParaHeroi(heroi) {
    // Supondo que o item esteja associado ao herói pelo cargo
    return dadosItens.find(item => item.heroi === heroi.cargo);
}

// Função para exibir o herói e o item associado
function exibirHeroiEItem(heroi) {
    const itemAssociado = encontrarItemParaHeroi(heroi);
    const infoHeroi = document.getElementById('info-heroi');
    const infoItem = document.getElementById('info-item');

    if (infoHeroi && infoItem) { // Verifique se os elementos existem
        if (itemAssociado) {
            infoHeroi.innerHTML = `
                <button class="button-hero">
                    <div class="${heroi.cargo.toLowerCase()}"></div> ${heroi.cargo}
                </button> (Poder: ${heroi.poder})
            `;
            infoItem.innerHTML = `
                <button class="button-hero">
                    <div class="${itemAssociado.nome.toLowerCase()}"></div> ${itemAssociado.nome}
                </button> (Poder: ${itemAssociado.poder})
            `;
        } else {
            infoHeroi.innerHTML = `
                <button class="button-hero">
                    <div class="${heroi.cargo.toLowerCase()}"></div> ${heroi.cargo}
                </button> (Poder: ${heroi.poder})
            `;
            infoItem.innerHTML = `Item: Nenhum item associado`;
        }
    } else {
        console.error('Elementos para exibir o herói e o item não encontrados');
    }
}

// Seleciona todos os botões de herói
const buttons = document.querySelectorAll('.container');

// Função para lidar com a escolha do herói
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove a classe "selected" de todos os botões
    buttons.forEach(btn => btn.classList.remove('selected-hero'));
    
    // Adiciona a classe "selected" ao botão clicado
    button.classList.add('selected-hero');
    
    // Obtém o container do herói escolhido
    const containerEscolhido = button.closest('.container');
    
    // Oculta todos os outros containers de herói
    document.querySelectorAll('.container').forEach(container => {
      if (container !== containerEscolhido) {
        container.style.display = 'none';
      }
    });

    // Obtém o cargo do herói selecionado
    const cargoHeroi = containerEscolhido.getAttribute('data-heroi');
    const heroiSelecionado = dadosHerois.find(heroi => heroi.cargo === cargoHeroi);

    // Exibe o herói e o item associado
    exibirHeroiEItem(heroiSelecionado);
  });
});

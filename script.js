const tabuleiro = document.getElementById('tabuleiro');
let peca = null;

const quadrados = document.querySelectorAll('.quadrado');
quadrados.forEach(quadrado => {
    quadrado.addEventListener('click', () => {
        const linha = parseInt(quadrado.getAttribute('posicao-l'));
        const coluna = parseInt(quadrado.getAttribute('posicao-c'));

        
        if (peca) {     // Se já tiver uma peça selecionada
            const quadradoRaiz = document.querySelector(`.quadrado[posicao-l="${peca.linha}"][posicao-c="${peca.coluna}"]`);    //recebe os atributos do quadrado original
            quadradoRaiz.classList.remove('selecionado');
            quadrado.textContent = peca.mover;  // Move a peça
            quadradoRaiz.textContent = '';      // Limpa o quadrado original
            peca = null;
        }
        else if (quadrado.textContent !== '') { // Se não tiver peça selecionada e esse quadrado tiver uma peça, seleciona a peca
            peca = { linha, coluna, mover: quadrado.textContent };
            quadrado.classList.add('selecionado');
        }
    });
});

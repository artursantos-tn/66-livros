import { bibliaAntigoTestamento } from './livros.js';
import { bibliaNovoTestamento } from './livros.js';

const modalPlayGame = document.getElementById('modalplaygame');
const buttonPlayGame = document.getElementById('buttonPlay');

const modalPerguntas = document.getElementById('modalPerguntas');

const iFaSolid = document.getElementById('fa-solid');
const textoPergunta = document.getElementById('texto-pergunta');
const containerAlternativas = document.getElementById('alternativas');

const testamentoH2 = document.querySelectorAll('h2')

function loadCartsLivros() {
    
    modalPlayGame.classList.add('closed');

    testamentoH2.forEach(h => {

        h.style.visibility = 'visible'

    })

    renderizarTestamento(bibliaAntigoTestamento.livros, 'cards-antigo');
    renderizarTestamento(bibliaNovoTestamento.livros, 'cards-novo');

}

function renderizarTestamento(listaLivros, secaoId) {
    
    const sectionCardLivros = document.getElementById(secaoId)
    sectionCardLivros.innerHTML = ''

    listaLivros.forEach(livro => {

        const div = document.createElement('div')
        const idFormatado = livro.id < 10 ? '0' + livro.id : livro.id

        div.classList.add('livro-card')
        div.innerHTML = `
        <p class="id-livro">${idFormatado}</p>
        <p class="nome-livro">${livro.nome}</p>
        `
        div.addEventListener('click', ()=>{

            console.log(`Você clicou no livro: ${livro.nome}`);
            abrirPergunta(livro)
            div.classList.add('blocked')

        })

        sectionCardLivros.appendChild(div)
        
    })

    console.log(`Total de livros carregados: ${listaLivros.length}`);

}

function abrirPergunta(livro) {

    modalPerguntas.classList.remove('closed')

    const containerNumeros = document.querySelector('.container-botoes-perguntas')
    containerNumeros.innerHTML = ''
    containerNumeros.classList.remove('closed')

    livro.perguntas.forEach((_, index) => {

        const btn = document.createElement('button')
        btn.classList.add('btn-numero');
        btn.textContent = `${index + 1}`

        btn.addEventListener('click', ()=> {

            const perguntaSelecionada = livro.perguntas[index];
            containerNumeros.classList.add('closed')
            exibirPerguntaDetalhada(perguntaSelecionada);

        })

        containerNumeros.appendChild(btn)

    });

}

iFaSolid.addEventListener('click', ()=> {

    const modalPerguntas = document.getElementById('modalPerguntas');
    modalPerguntas.classList.add('closed')

    textoPergunta.textContent = 'Selecione uma pergunta acima.'
    containerAlternativas.innerHTML = ''
    iFaSolid.style.visibility = 'hidden'

})

function exibirPerguntaDetalhada(pergunta) {

    textoPergunta.textContent = pergunta.pergunta
    containerAlternativas.innerHTML = ''

    Object.entries(pergunta.opcoes).forEach(([letraAlt, textoAlt]) => {

        const btnAlt = document.createElement('button');
        btnAlt.textContent = `${letraAlt}) ${textoAlt}`;
        containerAlternativas.appendChild(btnAlt);

        btnAlt.addEventListener('click', ()=> {

            const todosBotoes = containerAlternativas.querySelectorAll('button')
            todosBotoes.forEach(b => b.disabled = true);

            if (pergunta.respostaCorreta == letraAlt) {
                console.log(`Alternativa ${letraAlt}) ${textoAlt} | está CORRETA`);
                btnAlt.classList.add('correta')
            } else {
                console.log(`Alternativa ${letraAlt}) ${textoAlt} | está ERRADA`);
                btnAlt.classList.add('errada')
                
                // OPCIONAL, VOU VER SE VOU GOSTAR, E DEPOIS ADICIONAR UM TEMPO
                todosBotoes.forEach(b => {
                    if (b.textContent.startsWith(pergunta.respostaCorreta + ')')) {
                        b.classList.add('correta');
                    }
                });

            }

            iFaSolid.style.visibility = 'visible'

        })

    })

}

buttonPlayGame.addEventListener('click', loadCartsLivros)
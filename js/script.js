import { bibliaAntigoTestamento } from './livros.js';
// import { bibliaNovoTestamento } from './livros.js';

let livrosDisponiveis = [...bibliaAntigoTestamento.livros];
let livrosConcluidos = [];

const modalPlayGame = document.getElementById('modalplaygame')
const buttonPlayGame = document.getElementById('buttonPlay')

let iFaSolid = document.getElementById('fa-solid')
let textoPergunta = document.getElementById('texto-pergunta')
let containerAlternativas = document.getElementById('alternativas')

function loadCartsLivros() {
    
    modalPlayGame.classList.add('closed')
    const quantidadeLivros = livrosDisponiveis.length

    const sectionCardLivros = document.getElementById('cards-livros')
    
    livrosDisponiveis.forEach(livro => {

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
            div.classList.add('closed')

        })

        sectionCardLivros.appendChild(div)
        
    })

    console.log(livrosDisponiveis.length);

}

function abrirPergunta(livro) {
    const modalPerguntas = document.getElementById('modalPerguntas')
    modalPerguntas.classList.remove('closed')

    const containerNumeros = document.querySelector('.container-botoes-perguntas')
    containerNumeros.innerHTML = ''
    containerNumeros.classList.remove('closed')

    for (let i = 0; i < 5; i++) {
        
        const btn = document.createElement('button')
        btn.classList.add('btn-numero');
        btn.textContent = `${i + 1}`

        btn.addEventListener('click', ()=> {

            const perguntaSelecionada = livro.perguntas[i];
            containerNumeros.classList.add('closed')
            exibirPerguntaDetalhada(perguntaSelecionada);
            iFaSolid.style.visibility = 'visible'

        })

        containerNumeros.appendChild(btn)
        
    }

    iFaSolid.addEventListener('click', ()=> {

        modalPerguntas.classList.add('closed')

        textoPergunta.textContent = ''
        containerAlternativas.innerHTML = ''

    })

}

function exibirPerguntaDetalhada(pergunta) {

    textoPergunta.textContent = pergunta.pergunta
    containerAlternativas.innerHTML = ''

    Object.entries(pergunta.opcoes).forEach(([letraAlt, textoAlt]) => {

        const btnAlt = document.createElement('button');
        btnAlt.textContent = `${letraAlt}) ${textoAlt}`;
        containerAlternativas.appendChild(btnAlt);

        btnAlt.addEventListener('click', ()=> {

            if (pergunta.respostaCorreta == letraAlt) {
                console.log(`Alternativa ${letraAlt} está CORRETA`);
                btnAlt.classList.add('correta')
            } else {
                console.log(`Alternativa ${letraAlt} está ERRADA`);
                btnAlt.classList.add('errada')
            }

        })

    })

}

buttonPlayGame.addEventListener('click', loadCartsLivros)
# 📖 Quiz Bíblico Interativo

Um projeto web interativo desenvolvido em **JavaScript, HTML e CSS** para testar e aprimorar o conhecimento bíblico sobre o Antigo e o Novo Testamento de forma dinâmica e divertida.

---

## 🚀 Funcionalidades

* **Divisão por Testamentos:** Separação clara entre o Antigo Testamento e o Novo Testamento[cite: 6].
* **Navegação por Livros:** Cards interativos para cada livro da Bíblia[cite: 4, 6].
* **Sistema de Perguntas:** Múltipla escolha (A, B, C, D) com validação instantânea de acertos e erros[cite: 2, 5].
* **Bloqueio de Cliques Múltiplos:** Desativação automática dos botões após a resposta para evitar envios duplicados.
* **Feedback Visual:** Destaque automático da resposta correta caso o usuário erre[cite: 2, 5].
* **Modularização:** Organização dos dados dos livros em arquivos JavaScript separados (`ES Modules`)[cite: 5].

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 / CSS3:** Estruturação e estilização da interface (com design responsivo e moderno)[cite: 6].
* **JavaScript (ES6+):** Lógica do jogo, manipulação de DOM e controle de eventos[cite: 5, 6].

---

## 🤖 Desenvolvimento e Ferramentas

Este projeto foi construído com o apoio da **Gemini** (como assistente de ferramentas e suporte na lógica de programação e estruturação do código), auxiliando no desenvolvimento e refinamento das funcionalidades.

---

## 🐛 Feedback e Correções

Caso encontre alguma pergunta incorreta, erro de digitação ou inconsistência no conteúdo bíblico, por favor, abra uma **Issue** no repositório para avisar e ajudar a melhorar o projeto!

---

## 📁 Estrutura de Arquivos

```text
/
├── index.html           # Página principal da aplicação[cite: 6]
├── css/
│   └── style.css        # Estilos globais e componentes visuais
└── js/
    ├── script.js        # Lógica principal e fluxo do jogo[cite: 5]
    ├── livros.js        # Objeto de dados com os livros do Antigo Testamento[cite: 5]
    └── livrosNovo.js    # Objeto de dados com os livros do Novo Testamento[cite: 5]

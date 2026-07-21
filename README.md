# 📖 Quiz Bíblico Interativo

Um projeto web interativo desenvolvido em **JavaScript, HTML e CSS** para testar e aprimorar o conhecimento bíblico sobre o Antigo e o Novo Testamento de forma dinâmica e divertida.

---

## 🚀 Funcionalidades

* **Divisão por Testamentos:** Separação clara entre o Antigo Testamento e o Novo Testamento.
* **Navegação por Livros:** Cards interativos para cada livro da Bíblia.
* **Sistema de Perguntas:** Múltipla escolha (A, B, C, D) com validação instantânea de acertos e erros.
* **Bloqueio de Cliques Múltiplos:** Desativação automática dos botões após a resposta para evitar envios duplicados.
* **Feedback Visual:** Destaque automático da resposta correta caso o usuário erre.
* **Modularização:** Organização dos dados dos livros em arquivos JavaScript separados (`ES Modules`).

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 / CSS3:** Estruturação e estilização da interface (com design responsivo e moderno).
* **JavaScript (ES6+):** Lógica do jogo, manipulação de DOM e controle de eventos.

---

## 📁 Estrutura de Arquivos

```text
/
├── index.html           # Página principal da aplicação
├── css/
│   └── style.css        # Estilos globais e componentes visuais
└── js/
    ├── script.js        # Lógica principal e fluxo do jogo
    ├── livros.js        # Objeto de dados com os livros do Antigo Testamento
    └── livrosNovo.js    # Objeto de dados com os livros do Novo Testamento

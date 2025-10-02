# 🚀 Visualizador de Perfil do GitHub

Uma aplicação web simples que permite visualizar informações de perfis de usuários do GitHub e seus repositórios mais recentes. Este projeto foi desenvolvido como parte do módulo de JavaScript Avançado.

## ✨ Funcionalidades

- **Pesquisa de Usuário**: Busque por qualquer usuário do GitHub.
- **Informações do Perfil**: Exibe o avatar, nome, biografia, número de seguidores e quantos usuários está seguindo.
- **Repositórios Recentes**: Lista os 10 repositórios públicos mais recentes do usuário.
- **Detalhes do Repositório**: Mostra o nome, estrelas, forks, watchers e a linguagem de programação de cada repositório.
- **Feedback Visual**: Inclui um estado de "Carregando..." durante a busca e trata erros para usuários não encontrados.
- **Interatividade**: A busca pode ser acionada tanto pelo clique no botão quanto pela tecla "Enter".

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Para a estrutura da página.
- **CSS3**: Para a estilização e layout.
- **JavaScript (ES6+)**: Para a lógica da aplicação, incluindo:
  - **Módulos (import/export)**: Para organizar o código de forma limpa e reutilizável.
  - **Async/Await com Fetch API**: Para realizar as chamadas assíncronas à API do GitHub.
- **[GitHub API](https://docs.github.com/pt/rest)**: Para obter os dados dos usuários e seus repositórios.

## 📂 Estrutura do Projeto

O código-fonte está organizado da seguinte forma para promover a separação de responsabilidades:

```
├── src
│   ├── js
│   │   ├── api.js        # Lida com todas as chamadas à API do GitHub.
│   │   ├── main.js       # Ponto de entrada, gerencia eventos e orquestra a aplicação.
│   │   └── ui.js         # Responsável por renderizar os dados na interface do usuário.
│   ├── css
│   │   └── style.css     # Estilos da aplicação.
│   └── index.html        # Arquivo HTML principal.
└── README.md
```

- `api.js`: Contém as funções `fetchUser` e `fetchRepos` que buscam os dados na API do GitHub.
- `ui.js`: Exporta a função `renderProfile`, que constrói o HTML dinamicamente com os dados recebidos.
- `main.js`: Importa as funções dos outros módulos, adiciona os `event listeners` aos elementos da página e controla o fluxo de dados.

## 🚀 Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd visualizador-perfil-GitHub
    ```
3.  **Abra o arquivo `index.html`** no seu navegador de preferência. Não é necessário nenhum servidor ou passo de compilação.
# Hubee Frontend Challenge

O desafio consiste em criar um fluxo de carrinho de compras simples, com catálogo de produtos para realizar um pedido.

![N|Solid](https://hubee-static.s3.sa-east-1.amazonaws.com/public-images/hubee_challenge_frontend_prot.png)

## Diferenciais

- Organização e clareza;
- Lógica de programação;
- Boas práticas;
- Habilidade para resolução de problemas.

## Requisitos
Segue os requisitos funcionais do desafio:

- O sistema deve buscar e exibir um catalogo de produtos;
- O sistema deve adicionar o produto no carrinho;
- O sistema deve permitir adicionar apenas um cupom de desconto válido no pedido (consumir na API para a verificação);
- O sistema deve visualizar os itens do carrinho com as seguintes informações:
  - Quantidade e preço do item
  - Valor total do pedido
  - Cupom aplicado e valor do desconto
- O sistema deve excluir um item do carrinho;
- O sistema deve alterar a quantidade do item do carrinho;
- O sistema deve finalizar o pedido (registrando o pedido na API) e exibir uma mensagem de sucesso.

## Tecnologias utilizadas

- React
- Redux
- Typescript
- Material-UI
- styled-components

## Estrutura do Projeto

O projeto está organizado de forma a facilitar a manutenção, reutilização e escalabilidade do código. Abaixo está uma visão geral da estrutura de diretórios:

- `src/components`: Este diretório contém componentes React reutilizáveis.
  - `src/components/ui-component`: Componentes compartilhados que podem ser usados em várias partes do aplicativo.

- `api/`: Aqui estão os arquivos relacionados à comunicação com a API.
  
- `hooks/`: Este diretório contém hooks customizados que fornecem funcionalidades específicas para o aplicativo.

- `store/`: Configurações relacionadas ao Redux (estado global) do aplicativo.

- `utils/interfaces`: Contratos e tipos de dados que são usados em várias partes do sistema.

- `utils/functions`: Funções compartilhadas que podem ser utilizadas em diferentes partes do código.

- `app.tsx`: O componente principal do aplicativo.

- `index.tsx`: O ponto de entrada do aplicativo.

- `theme.tsx`: Configurações do tema para o Material-UI.

A estrutura acima foi projetada para manter um código organizado. Cada diretório tem um propósito específico e contém os arquivos relacionados a esse propósito.
  
## Instalação e Uso

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências com o comando: `npm install`.
4. Inicie o aplicativo com o comando: `npm start`.

   ![1627616883421](https://user-images.githubusercontent.com/77937182/157932279-c8aad7d0-0778-43c0-be52-b7e175d56835.gif)

# Hubee Frontend Challenge

![N|Solid](https://media-exp1.licdn.com/dms/image/C4E0BAQHOp41isf2byw/company-logo_200_200/0/1603390307024?e=1625097600&v=beta&t=BjntmL7iePrkYJ7Ci5xqlyHh53Qn_FyUICHyLtDYegg)

O desenvolvedor front-end é o profissional que será responsável pelo desenvolvimento e manutenção do ecossistema das aplicações do time Hubee. Este desafio avaliará diversos aspectos do candidato, tornando-se então a entrega deste obrigatória para conclusão do processo.

Caso não consiga entregar dentro do prazo ou completá-lo por algum motivo, favor nos reportar. O objetivo desse desafio é demonstrar sua experiência e conhecimento como desenvolvedor, assim saberemos como você pensa e resolve os problemas do cotidiano.

O processo de avaliação levará em consideração os seguintes pontos:

- Organização e clareza;
- Lógica de programação;
- Boas práticas;
- Habilidade para resolução de problemas.

## Regras gerais

- O candidato terá o prazo de 7 dias para completar o desafio.

## Desafio

O teste consiste em criar um fluxo de carrinho de compras simples, com catalogo de produtos para realizar um pedido.

Segue um esboço da ideia para facilitar a visualização do carrinho, mas fique a vontade para utilizar sua criatividade:

![N|Solid](https://hubee-static.s3.sa-east-1.amazonaws.com/public-images/hubee_challenge_frontend_prot.png)

Link para o protótipo no figma: [bit.ly/hbfront](http://bit.ly/hbfront)

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

### JSON Server

Para realizar as integrações com o **back-end** disponibilizamos o arquivo **db.json** com as informações necessárias para realizar a integração.
O arquivo está na pasta **json-server** na raiz do projeto.

OBS: segue a [documentação do JSON server](https://github.com/typicode/json-server) para sua utilização

## Tecnologias, frameworks e bibliotecas

É obrigatório a utilização dos seguintes:

- React
- Redux
- Typescript
- Material-UI
- styled-components

No mais, fique a vontade para utilizar outras ferramentas que desejar.

## Diferenciais

- Componentes reutilizáveis
- Layout responsivo (seja criativo!)
- Boa documentação (como rodar o projeto, como foi organizado...);
- Criar testes unitários automatizados para a aplicação (Jest, testing-library e etc...)
- Ser capaz de lidar com os efeitos colaterais da aplicação sem bloquear as atualizações de estado (Redux - Middleware)

## Pronto para começar o desafio?

- Faça um **"fork"** desse repositório na sua conta do Github
- Crie uma branch com o seu nome e sobrenome **ex: nome-sobrenome**
- Após completar o desafio, crie um **"pull request"** nesse repositório comparando a sua branch com a master
- Receberemos uma notificação do seu pull request, faremos a avaliação da sua solução e entraremos em contato.

## FAQ

- Posso usar o create-react-app para completar o desafio? **Sim, você pode usar qualquer cli para criar seu projeto**
- Preciso necessariamente fazer um fork do projeto? **Sim, para que possamos saber quanto tempo você levou para executar o desafio**
- Em caso de dúvidas, [abra uma issue](https://github.com/HubeePlatform/hubee-frontend-challenge/issues) ou envie um e-mail para **eng.hubee@gmail.com.**

### **Boa sorte.** 🚀

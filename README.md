# Cadastro na LocalStorage<br>

Projeto desenvolvido para apresentar habilidades em html, css, javascript e armazenamento na LocalStorage.</br>
- Link [aqui](https://michelmathos.github.io/cadastro-localstorage/)</br>
## Estudo de Caso: Cadastro e Listagem de Produtos na LocalStorage

### Objetivo:
Implementar um sistema de cadastro e listagem de produtos numa tabela, que permita ao usuário inserir novos produtos e visualizar uma lista ordenada dos produtos cadastrados, com possibilidade excluí-los.

### Requisitos:

a) Cadastro de Produto:
- Formulário com campos para nome, descrição, valor e disponibilidade para venda.
- Ao cadastrar um produto, redirecionar automaticamente para a listagem.

b) Listagem de Produtos:
- Colunas:
* nome
* valor
- Ordenação dos produtos por valor, do menor para o maior.
- Botão na tela de listagem para cadastrar um novo produto.
- Botão na tela de listagem para excluir produto.

### Descrição do Caso de Uso:

a) Cadastrar Produto:
- O usuário preenche um formulário:
* nome
* valor
* descrição
- O sistema armazena o produto no localStorage.

b) Listar Produtos:
- O sistema exibe todos os produtos armazenados no localStorage, ordenados pelo valor.
- O sistema mostra coloração no produto indisponível.
- O sistema mostra um popup com a descrição e disponibilidade ao passar o mouse sobre o produto.

c) Excluir Produto:
- O usuário clica no botão "Excluir" ao lado de um produto na listagem.
- O sistema pergunta sobre a certeza de exclusão ao usuário:
* Se o usuário optar por cancelar o sistema não excluirá o produto.
* Se o usuá optar por ok, O sistema remove o produto do LocalStorage e atualiza a listagem.

Link [aqui](https://michelmathos.github.io/cadastro-localstorage/)

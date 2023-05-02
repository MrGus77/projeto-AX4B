# Projeto AX4B

Este projeto é um teste técnico para o estágio na AXB4. O objetivo é criar um servidor Node.js usando Express e Firebase para permitir o cadastro e votação em restaurantes.

## Pré-requisitos


*   `Node.js v18` instalado na máquina.
*   Conta no Firebase para configurar o banco de dados e autenticação de usuário (disponível em `credentials.json`).

## Instalação


1.  Faça o download ou clone este repositório.
2.  No terminal, navegue até a pasta raiz do projeto.
3.  Execute o comando `npm install` para instalar as dependências.

## Configuração


1.  Crie um projeto no Firebase e ative a autenticação de usuário com email e senha.
2.  Crie um arquivo `.env` na raiz do projeto com as seguintes informações:

```yaml
PORT=<porta_do_servidor>
```

## Uso


1.  No terminal, navegue até a pasta raiz do projeto.
2.  Execute o comando `npm start` para iniciar o servidor.
3.  Acesse `http://localhost:<porta_do_servidor>` no seu navegador para visualizar a página inicial.

<br><br><br>

# Documentação da API

## POST `/restaurant`

Cria um novo restaurante.

Body:

*   `name` (string, obrigatório): nome do restaurante.

---

## GET `/restaurant`

Obtém a lista de todos os restaurantes.

---

## GET `/restaurant/:id`

Obtém um restaurante pelo seu ID.

Parâmetros:

*   `id` (string, obrigatório): ID do restaurante.

---

## PATCH `/restaurant/:id`

Atualiza um restaurante pelo seu ID.

Parâmetros:

*   `id` (string, obrigatório): ID do restaurante.

Body:

*   `name` (string, opcional): novo nome do restaurante.

---

## DELETE `/restaurant/:id`

Deleta um restaurante pelo seu ID.

Parâmetros:

*   `id` (string, obrigatório): ID do restaurante.

---

## GET `/votes`

Obtém a contagem de votos de cada restaurante.

---

## POST `/votes`

Registra um novo voto para um restaurante.

Body:

*   `restaurant_code` (number, obrigatório): código do restaurante que recebeu o voto.

---

## GET `/winner`

Obtém o restaurante vencedor, aquele que recebeu mais votos.
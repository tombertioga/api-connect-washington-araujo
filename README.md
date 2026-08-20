# API Connect

## Objetivo

A API Connect é uma API REST desenvolvida como um MVP para gerenciamento de usuários. O sistema permite cadastrar, listar, consultar, atualizar e remover usuários utilizando requisições HTTP e respostas em formato JSON.

O projeto foi desenvolvido como parte da Experiência Prática II da disciplina de Desenvolvimento Back-end.

## Tecnologias utilizadas

- Node.js
- Express
- Nodemon
- JavaScript
- JSON
- Git
- GitHub
- Thunder Client para testes dos endpoints

## Estrutura do projeto

```text
api-connect/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── data/
│   │   └── users.json
│   ├── routes/
│   │   └── userRoutes.js
│   ├── services/
│   │   └── userService.js
│   └── app.js
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Como executar o projeto

É necessário ter o Node.js instalado.

Entre na pasta do projeto:

```bash
cd api-connect
```

Instale as dependências:

```bash
npm install
```

Execute o servidor em modo de desenvolvimento:

```bash
npm run dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Endpoints

| Método | Endpoint | Descrição | Status |
|---|---|---|---|
| GET | `/usuarios` | Lista todos os usuários | 200 |
| GET | `/usuarios/:id` | Busca um usuário por ID | 200 / 404 |
| POST | `/usuarios` | Cadastra um novo usuário | 201 / 400 |
| PUT | `/usuarios/:id` | Atualiza um usuário | 200 / 400 / 404 |
| DELETE | `/usuarios/:id` | Remove um usuário | 200 / 404 |

## GET - Listar usuários

### Requisição

```http
GET /usuarios
```

### Resposta

```json
[
  {
    "id": 1,
    "nome": "Washington Araujo",
    "email": "washington.araujo@email.com"
  }
]
```

**Status:** `200 OK`

## GET - Buscar usuário por ID

### Requisição

```http
GET /usuarios/1
```

### Resposta

```json
{
  "id": 1,
  "nome": "Washington Araujo",
  "email": "washington.araujo@email.com"
}
```

**Status:** `200 OK`

### Usuário não encontrado

Caso o usuário não exista:

```json
{
  "mensagem": "Usuario nao encontrado"
}
```

**Status:** `404 Not Found`

## POST - Cadastrar usuário

### Requisição

```http
POST /usuarios
Content-Type: application/json
```

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

### Resposta

```json
{
  "id": 5,
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

**Status:** `201 Created`

### Validação

Os campos `nome` e `email` são obrigatórios.

Caso um dos campos não seja informado:

```json
{
  "mensagem": "Os campos nome e email sao obrigatorios."
}
```

**Status:** `400 Bad Request`

## PUT - Atualizar usuário

### Requisição

```http
PUT /usuarios/1
Content-Type: application/json
```

```json
{
  "nome": "Washington Atualizado",
  "email": "washington.atualizado@email.com"
}
```

### Resposta

```json
{
  "id": 1,
  "nome": "Washington Atualizado",
  "email": "washington.atualizado@email.com"
}
```

**Status:** `200 OK`

### Validação

Os campos `nome` e `email` são obrigatórios na atualização.

Caso algum campo não seja informado:

```json
{
  "mensagem": "Os campos nome e email sao obrigatorios."
}
```

**Status:** `400 Bad Request`

### Usuário não encontrado

Caso o usuário não exista:

```json
{
  "mensagem": "Usuario nao encontrado"
}
```

**Status:** `404 Not Found`

## DELETE - Remover usuário

### Requisição

```http
DELETE /usuarios/1
```

### Resposta

```json
{
  "mensagem": "Usuario removido com sucesso",
  "usuario": {
    "id": 1,
    "nome": "Washington Atualizado",
    "email": "washington.atualizado@email.com"
  }
}
```

**Status:** `200 OK`

### Usuário não encontrado

Caso o usuário não exista:

```json
{
  "mensagem": "Usuario nao encontrado"
}
```

**Status:** `404 Not Found`

## Validações e padronização

A API realiza validações nos dados recebidos pelo cliente.

Os campos `nome` e `email` são obrigatórios nas operações de cadastro e atualização.

As respostas de erro utilizam a estrutura:

```json
{
  "mensagem": "Descrição do erro"
}
```

Os códigos de status HTTP utilizados representam o resultado da operação:

- `200 OK` - operação realizada com sucesso.
- `201 Created` - usuário criado com sucesso.
- `400 Bad Request` - dados obrigatórios não informados.
- `404 Not Found` - usuário não encontrado.

## Persistência

Para este MVP, os dados dos usuários são armazenados localmente no arquivo:

```text
src/data/users.json
```

A aplicação utiliza o arquivo JSON para carregar e salvar os usuários.

Os novos IDs são gerados com base no maior ID existente na estrutura de dados, acrescido de 1.

## Testes

Os endpoints foram testados utilizando o Thunder Client.

Foram realizados testes de:

- Cadastro de usuário com sucesso.
- Cadastro sem e-mail.
- Listagem de usuários.
- Busca de usuário inexistente.
- Atualização de usuário.
- Atualização sem os campos obrigatórios.
- Remoção de usuário.
- Remoção de usuário inexistente.

### Resultados dos testes

| Teste | Resultado |
|---|---|
| POST com nome e e-mail | `201 Created` |
| POST sem e-mail | `400 Bad Request` |
| GET /usuarios | `200 OK` |
| GET usuário inexistente | `404 Not Found` |
| PUT com dados completos | `200 OK` |
| PUT sem campo obrigatório | `400 Bad Request` |
| DELETE usuário existente | `200 OK` |
| DELETE usuário inexistente | `404 Not Found` |

## Controle de versão

O projeto foi versionado utilizando Git e disponibilizado publicamente no GitHub.

Repositório:

https://github.com/tombertioga/api-connect-washington-araujo

## Autor

**Washington Araujo**

Projeto desenvolvido como parte da Experiência Prática II da disciplina de Desenvolvimento Back-end.
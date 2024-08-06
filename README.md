# Desafio 3 - Semana 12 - Node & AWS

# Índice

* [Título](#desafio-3---semana-12---node--aws)
* [Iniciando a aplicação localmente](#-iniciando-a-aplicação-localmente)
* [Iniciando a aplicação com Docker](#-iniciando-a-aplicação-com-docker)
* [Comandos úteis do projeto](#-comandos-úteis-do-projeto)
* [Tecnologias utilizadas](#️-tecnologias-utilizadas)
* [Funcionalidades do projeto](#-funcionalidades-do-projeto)

## 🚀 Iniciando a aplicação localmente

#### Pré-requisitos
* Node.js instalado, versão 18.
* npm instalado
* MongoDB rodando localmente

#### Passo a passo
1. Clone o repositório:

```sh
git clone https://github.com/itaji-create/Desafio-3-Semana-12-Node-AWS.git
cd Desafio-3-Semana-12-Node-AWS
```

2. Instale as dependências:

```sh
npm install
```

3. Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias:

```env
MONGODB_URI=mongodb://localhost:27017/database
NODE_ENV=prod
PORT=3000
```

4. Transpile o código TypeScript:

```sh
npm run build
```

5. Inicie a aplicação:

```sh
npm start
```

6. Inicie a aplicação em modo de desenvolvimento:

```sh
npm run dev
```

## 🚀 Iniciando a aplicação com Docker

#### Pré-requisitos
* Certifique-se de ter instalado o Docker e o Docker Compose na sua máquina.

#### Passos para iniciar a aplicação

1. Clone o repositório:

```sh
git clone https://github.com/itaji-create/Desafio-3-Semana-12-Node-AWS.git
cd Desafio-3-Semana-12-Node-AWS
```

2. Inicie os serviços utilizando o Docker Compose:

Na raiz do projeto, execute o comando:

```sh
docker-compose up --build
```

3. Acesse a aplicação:

Após iniciar os serviços, a aplicação estará disponível no endereço http://localhost:3000/api-docs/#/

#### Parando os serviços

Para parar e remover os contêineres Docker, você pode usar o comando:

```sh
docker-compose down
```

## 🔧 Comandos úteis do projeto

- **start**: Inicia a aplicação utilizando o Node.js a partir do arquivo compilado localizado em build/shared/http/server.js. Este comando é utilizado para rodar a aplicação em produção.

```sh
npm run start
```

- **build**: Transpila o código-fonte escrito em JavaScript e TypeScript na pasta src para a pasta build, utilizando Babel. Este comando prepara o código para produção, copiando também outros arquivos necessários.

```sh
npm run build
```

- **test**: Executa os testes utilizando o framework Jest. Este comando configura o ambiente de teste e executa os testes em sequência (--runInBand), exibindo informações detalhadas sobre os testes (--verbose).

```sh
npm run test
```

- **test-coverage**: Executa os testes utilizando o framework Jest e gera um relatório de cobertura de código. Este comando é útil para verificar quais partes do código estão sendo cobertas pelos testes.

```sh
npm run test-coverage
```

- **dev**: Inicia a aplicação em modo de desenvolvimento utilizando ts-node-dev, que compila e executa o código TypeScript diretamente. Este comando reinicia o servidor automaticamente ao detectar mudanças no código-fonte.

```sh
npm run dev
```

- **lint**: Executa o ESLint para analisar o código TypeScript em busca de problemas de formatação e padrões de código. Este comando ajuda a garantir que o código segue as boas práticas e convenções estabelecidas.

```sh
npm run lint
```

- **lint-fix**: Executa o ESLint com a opção --fix, que tenta corrigir automaticamente os problemas detectados no código TypeScript. Este comando é útil para aplicar correções rápidas e manter o código limpo e padronizado.

```sh
npm run lint-fix
```

## ✔️ Tecnologias utilizadas

- ``TypeScript``: Linguagem de programação utilizada para adicionar tipagem estática opcional ao JavaScript, proporcionando um desenvolvimento mais seguro e produtivo.

- ``Node.js``: Ambiente de execução para JavaScript no servidor, permitindo construir aplicações escaláveis e de alta performance.

- ``Express``: Framework web para Node.js, utilizado para construir APIs robustas e eficientes.

- ``MongoDB``: Banco de dados NoSQL utilizado para armazenar dados de maneira flexível e escalável.

- ``Mongoose``: Biblioteca de modelagem de objetos do MongoDB para Node.js, que facilita o trabalho com o banco de dados.

- ``Jest``: Framework de testes, utilizado para realizar testes de integração.

- ``Supertest``: Biblioteca utilizada para testar APIs HTTP, integrando-se facilmente com frameworks de teste como o Jest.

- ``Babel``: Transpilador JavaScript, utilizado para converter código ES6+ em uma versão compatível com versões mais antigas do JavaScript.

- ``ESLint``: Ferramenta de linting para identificar e corrigir problemas no código JavaScript/TypeScript, garantindo um código mais limpo e consistente.

- ``Prettier``: Ferramenta de formatação de código, garantindo que o código siga um padrão consistente e legível.

- ``Swagger``: Ferramenta para documentação de APIs, permitindo criar documentação interativa e amigável para desenvolvedores.

- ``Joi e express-validator``: Bibliotecas para validação de dados, garantindo que as entradas e saídas da API estejam corretas e seguras.

- ``jsonwebtoken``: Biblioteca para criação e verificação de tokens JWT, utilizados para autenticação e autorização.

- ``dotenv``: Biblioteca para gerenciar variáveis de ambiente, permitindo configurar a aplicação de maneira flexível e segura.

- ``cross-env``: Ferramenta para configurar variáveis de ambiente de maneira cross-platform, garantindo que a aplicação funcione corretamente em diferentes sistemas operacionais.

- ``ts-node-dev``: Ferramenta para rodar e monitorar aplicações TypeScript em desenvolvimento, reiniciando automaticamente o servidor ao detectar mudanças no código.

## 🔨 Funcionalidades do projeto

### Users

- `Cadastro de usuários`: Permite que novos usuários se registrem na plataforma fornecendo informações necessárias, como nome, e-mail, senha e outros dados relevantes. Este processo inclui a validação dos dados fornecidos para garantir que são válidos e que p email é único, evitando duplicidades ao fazer o login e garantindo a integridade do sistema.

- `Login de usuário`: Permite que os usuários registrados entrem na plataforma utilizando suas credenciais (e-mail e senha). O processo de login envolve a autenticação dos dados fornecidos, garantindo que apenas usuários autorizados tenham acesso às funcionalidades protegidas da aplicação. A autenticação é realizada utilizando tokens JWT, proporcionando segurança e facilidade no gerenciamento de sessões de usuário.

### Events

* obs.: é necessário fornecer o token de autenticação no headers, Authotization, para fazer requisições nas rotas de eventos.

- `Cadastro de evento`: Permite cadastrar novos eventos fornecendo os dados necessários, dayOfWeek e description.

- `Retorno dos eventos`: Retorna todos os eventos cadastrados no database, com a possibilidades de filtrar eventos pelo dia da semana e/ou pela descrição, também permite retorna um único evento tendo id como parâmetro.

- `Exclusão de eventos`: Permite excluir todos os eventos de um dia da semana ou excluir um único evento tendo id como parâmetro

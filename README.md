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

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_SESSION_TOKEN=
AWS_BUCKET_NAME=
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

Após iniciar os serviços, a aplicação estará disponível no endereço http://localhost:3000/api-docs/#/

## 🚀 Iniciando a aplicação com Docker

#### Pré-requisitos
* Certifique-se de ter instalado o Docker e o Docker Compose na sua máquina.

#### Passos para iniciar a aplicação

1. Clone o repositório:

```sh
git clone https://github.com/itaji-create/Desafio-3-Semana-12-Node-AWS.git
cd Desafio-3-Semana-12-Node-AWS
```

2. Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias:

```env
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_SESSION_TOKEN=
AWS_BUCKET_NAME=
```

3. Inicie os serviços utilizando o Docker Compose:

Na raiz do projeto, execute o comando:

```sh
docker-compose up --build
```

4. Acesse a aplicação:

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

- ``Docker``: Plataforma que permite criar, implantar e executar aplicações em contêineres, proporcionando uma forma consistente de empacotar e distribuir software em diferentes ambientes. Docker isola as aplicações e suas dependências em contêineres, garantindo que funcionem da mesma forma em qualquer lugar.

- ``Docker Compose``: Ferramenta para definir e gerenciar aplicações multi-contêineres. Usando um arquivo de configuração YAML, o Docker Compose permite configurar serviços, redes e volumes, facilitando o desenvolvimento e a orquestração de aplicações complexas que consistem em vários contêineres Docker.

## 🔨 Funcionalidades do projeto

### Users

- `Cadastro de usuários`: Permite que novos usuários se registrem na plataforma fornecendo informações necessárias, como nome, e-mail, senha e outros dados relevantes. Este processo inclui a validação dos dados fornecidos para garantir que são válidos e que p email é único, evitando duplicidades ao fazer o login e garantindo a integridade do sistema.

- `Login de usuário`: Permite que os usuários registrados entrem na plataforma utilizando suas credenciais (e-mail e senha). O processo de login envolve a autenticação dos dados fornecidos, garantindo que apenas usuários autorizados tenham acesso às funcionalidades protegidas da aplicação. A autenticação é realizada utilizando tokens JWT, proporcionando segurança e facilidade no gerenciamento de sessões de usuário.

- `Armazenamento de Foto de Perfil`: Permite que os usuários carreguem e atualizem suas fotos de perfil na plataforma. Quando um usuário deseja atualizar sua foto de perfil, o sistema gera uma URL pré-assinada para o upload da imagem diretamente para um bucket S3.

### Passo a passo para Carregar uma Foto de Perfil

1. Gerar a URL para Upload:
Primeiro, você precisa gerar uma URL pré-assinada que permitirá o upload da sua imagem para o bucket S3. Para isso, faça uma requisição GET para a seguinte URL:

```bash
http://localhost:3000/users/generate-upload-url?fileName=novoArquivo&fileType=image/jpg
```

#### Explicação dos parâmetros:

* ``fileName=novoArquivo``: Substitua novoArquivo pelo nome desejado para o arquivo da imagem.

* ``fileType=image/jpg``: O valor image/jpg indica o tipo MIME da imagem que você está carregando. Certifique-se de substituir image/jpg pelo tipo MIME correto da sua imagem (por exemplo, image/png para PNG).

#### Resposta esperada:
Caso suas variáveis de ambiente estejam configuradas corretamente você receberá uma URL pré-assinada na resposta, algo parecido com:

```json
{
  "uploadUrl": "https://your-s3-bucket.s3.amazonaws.com/novoArquivo?AWSAccessKeyId=...&Expires=...&Signature=..."
}
```
Copie essa URL, pois você usará ela na próxima etapa.

2. Fazer o Upload da Imagem
Agora que você tem a URL pré-assinada, você pode fazer o upload da sua imagem para o bucket S3. Siga estas instruções:

#### Configurar a Requisição:

* Método HTTP: `PUT`
* URL: Use a URL pré-assinada que você copiou da resposta anterior.
* Cabeçalhos:
  *  Adicione o cabeçalho Content-Type com o mesmo valor informado na requisição inicial (por exemplo, image/jpg).

#### Exemplo de Configuração da Requisição usando o Postman:

* Selecione o método PUT.
* Cole a URL pré-assinada no campo de URL.
* No cabeçalho, adicione Content-Type com o valor image/jpg.
* Vá para a aba Body, selecione binary, e escolha o arquivo da imagem que você deseja enviar.

3. Confirmar o Upload

Após enviar o request, o S3 deve confirmar o upload com uma resposta de sucesso, status code 200.


### Events

* obs.: é necessário fornecer o token de autenticação no headers, Authotization, para fazer requisições nas rotas de eventos.

- `Cadastro de evento`: Permite cadastrar novos eventos fornecendo os dados necessários, dayOfWeek e description.

- `Retorno dos eventos`: Retorna todos os eventos cadastrados no database, com a possibilidades de filtrar eventos pelo dia da semana e/ou pela descrição, também permite retorna um único evento tendo id como parâmetro.

- `Exclusão de eventos`: Permite excluir todos os eventos de um dia da semana ou excluir um único evento tendo id como parâmetro

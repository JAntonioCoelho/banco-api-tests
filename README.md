# Banco API Tests

Projeto de automação de testes de API REST desenvolvido em JavaScript para validar a API do projeto [banco-api](https://github.com/juliodelimas/banco-api).

O projeto utiliza **Mocha**, **Supertest**, **Chai**, **dotenv** e **Mochawesome** para estruturar, executar e gerar relatórios dos testes automatizados.

## 🎯 Objetivo

O objetivo deste projeto é automatizar a validação da API REST disponibilizada pelo projeto **Banco API**, verificando o comportamento dos seus endpoints através de testes automatizados.

A suíte de testes realiza requisições HTTP à API configurada através da variável de ambiente `BASE_URL` e valida as respostas obtidas utilizando asserções do Chai.

### API testada

- **Repositório da API:** https://github.com/juliodelimas/banco-api
- **Repositório dos testes:** https://github.com/JAntonioCoelho/banco-api-tests

A API REST do projeto `banco-api` é executada, por padrão, na porta `3000`.

---

## 🛠️ Stack utilizada

| Tecnologia | Utilização |
|---|---|
| **JavaScript** | Linguagem utilizada no desenvolvimento dos testes |
| **Node.js** | Runtime utilizado para executar os testes |
| **Mocha** | Framework responsável pela organização e execução dos testes |
| **Supertest** | Biblioteca utilizada para realizar requisições HTTP à API |
| **Chai** | Biblioteca utilizada para realizar asserções e validar os resultados |
| **dotenv** | Carregamento das variáveis de ambiente através do arquivo `.env` |
| **Mochawesome** | Reporter utilizado para gerar relatórios HTML dos testes |
| **npm** | Gerenciamento das dependências e execução dos scripts |

### Versões utilizadas

As versões definidas atualmente no `package.json` são:

```json
{
  "chai": "^6.2.2",
  "mocha": "^12.0.0",
  "supertest": "^7.2.2",
  "dotenv": "^18.0.3",
  "mochawesome": "^8.1.0"
}
```

> O `package-lock.json` deve ser utilizado para garantir a instalação das versões efetivamente resolvidas pelo projeto.

---

## 📋 Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

- **Node.js**
- **npm**
- A API `banco-api` em execução

Como o projeto utiliza **Mocha 12**, é recomendado utilizar uma versão do Node.js compatível com os requisitos atuais do Mocha.

Para verificar as versões instaladas:

```bash
node --version
npm --version
```

---

## 📁 Estrutura do projeto

```text
banco-api-tests/
│
├── fixtures/
│   └── Dados utilizados pelos testes
│
├── helpers/
│   └── Funções auxiliares utilizadas pela suíte de testes
│
├── test/
│   └── Arquivos contendo os testes automatizados da API
│
├── .env
│   └── Configuração local da URL da API
│
├── .gitignore
│   └── Arquivos e diretórios que não devem ser versionados
│
├── package.json
│   └── Dependências e scripts do projeto
│
└── package-lock.json
    └── Versões exatas das dependências instaladas
```

Durante a execução dos testes também será criado:

```text
mochawesome-report/
├── assets/
├── mochawesome.html
└── mochawesome.json
```

O diretório `mochawesome-report/` é gerado automaticamente pelo Mochawesome e não faz parte do código-fonte versionado.

---

## ⚙️ Configuração do ambiente

O projeto utiliza a biblioteca `dotenv` para carregar variáveis de ambiente a partir de um arquivo chamado `.env`.

O arquivo `.env` **não está versionado no repositório**, pois contém configurações específicas do ambiente local.

O `.gitignore` do projeto já exclui o arquivo:

```text
.env
```

### Criar o arquivo `.env`

Na raiz do projeto, crie um arquivo chamado:

```text
.env
```

O conteúdo deve seguir o seguinte formato:

```env
BASE_URL=http://localhost:3000
```

### BASE_URL

A variável `BASE_URL` define o endereço base da API REST que será utilizada pelos testes.

Por exemplo:

```env
BASE_URL=http://localhost:3000
```

Caso a API esteja sendo executada em outro endereço ou porta, basta alterar o valor:

```env
BASE_URL=http://localhost:8080
```

ou:

```env
BASE_URL=https://exemplo.com/api
```

> Não é necessário colocar aspas no valor, salvo quando forem necessárias devido a caracteres especiais.

### ⚠️ Importante

O arquivo `.env` deve permanecer local e **não deve ser enviado para o repositório**.

Antes de executar os testes, confirme que:

1. O arquivo `.env` foi criado na raiz do projeto.
2. A variável `BASE_URL` está configurada corretamente.
3. A API `banco-api` está em execução.
4. A URL configurada no `.env` pode ser acessada pela máquina onde os testes estão sendo executados.

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/JAntonioCoelho/banco-api-tests.git
```

Entre no diretório:

```bash
cd banco-api-tests
```

Instale as dependências:

```bash
npm install
```

Depois, crie o arquivo `.env`:

```env
BASE_URL=http://localhost:3000
```

---

## ▶️ Execução dos testes

O projeto possui um script `test` definido no `package.json`:

```json
"test": "mocha ./test/**/*.test.js --timeout=200000 --reporter mochawesome"
```

Para executar toda a suíte de testes:

```bash
npm test
```

Esse comando:

1. Inicia o Mocha.
2. Localiza os arquivos de teste dentro de `test/` que correspondem ao padrão `*.test.js`.
3. Define um timeout de `200000` milissegundos.
4. Utiliza o Mochawesome como reporter.
5. Executa os testes contra a API configurada em `BASE_URL`.
6. Gera o relatório dos testes.

---

## 🧪 Execução direta com Mocha

Também é possível executar a suíte diretamente utilizando o `npx`:

```bash
npx mocha "./test/**/*.test.js" --timeout=200000 --reporter mochawesome
```

Entretanto, para a utilização normal do projeto, recomenda-se:

```bash
npm test
```

pois o comando já está definido no `package.json`.

---

## 📊 Relatórios com Mochawesome

O projeto utiliza o **Mochawesome** como reporter do Mocha.

Após a execução:

```bash
npm test
```

o Mochawesome gera automaticamente o diretório:

```text
mochawesome-report/
```

Dentro dele estarão os principais arquivos:

```text
mochawesome-report/
├── assets/
├── mochawesome.html
└── mochawesome.json
```

### Relatório HTML

O arquivo principal para visualizar os resultados é:

```text
mochawesome-report/mochawesome.html
```

Abra esse arquivo em um navegador para visualizar o relatório completo da execução.

### Windows

No Windows, pode ser utilizado:

```bash
start mochawesome-report/mochawesome.html
```

Ou simplesmente abra o arquivo `mochawesome.html` diretamente pelo explorador de arquivos.

### macOS

```bash
open mochawesome-report/mochawesome.html
```

### Linux

```bash
xdg-open mochawesome-report/mochawesome.html
```

### Relatório JSON

O arquivo:

```text
mochawesome-report/mochawesome.json
```

contém os dados da execução em formato JSON e pode ser utilizado para processamento ou integração com outras ferramentas.

> O diretório `mochawesome-report/` está incluído no `.gitignore`, portanto os relatórios gerados localmente não são enviados para o repositório.

---

## 🔄 Fluxo de execução

O fluxo básico para utilizar o projeto é:

```text
1. Clonar o projeto
        ↓
2. Instalar as dependências
        ↓
3. Criar o arquivo .env
        ↓
4. Configurar BASE_URL
        ↓
5. Iniciar a banco-api
        ↓
6. Executar npm test
        ↓
7. Mocha executa os testes
        ↓
8. Supertest realiza as requisições HTTP
        ↓
9. Chai valida as respostas
        ↓
10. Mochawesome gera o relatório
        ↓
11. Abrir mochawesome-report/mochawesome.html
```

---

## 📚 Documentação das dependências

### Mocha

Framework utilizado para organização e execução dos testes JavaScript.

- Documentação oficial: https://mochajs.org/
- Getting Started: https://mochajs.org/getting-started/

### Supertest

Biblioteca utilizada para realizar e testar requisições HTTP.

- Documentação / projeto: https://github.com/ladjs/supertest
- npm: https://www.npmjs.com/package/supertest

### Chai

Biblioteca de asserções utilizada para verificar se os resultados obtidos pela API correspondem aos resultados esperados.

- Documentação oficial: https://www.chaijs.com/
- API BDD (`expect` / `should`): https://www.chaijs.com/api/bdd/
- GitHub: https://github.com/chaijs/chai

### dotenv

Biblioteca utilizada para carregar as variáveis definidas no arquivo `.env` para `process.env`.

- Documentação: https://www.npmjs.com/package/dotenv
- Documentação oficial: https://www.dotenv.org/docs/

### Mochawesome

Reporter utilizado pelo Mocha para gerar relatórios detalhados em HTML e JSON.

- Documentação / projeto: https://github.com/adamgruber/mochawesome
- npm: https://www.npmjs.com/package/mochawesome

---

## 🏦 API utilizada nos testes

Os testes deste projeto foram desenvolvidos para a API:

**Banco API**

https://github.com/juliodelimas/banco-api

A API possui uma REST API executada na porta `3000` por padrão.

Para que os testes funcionem corretamente, a API deve estar disponível no endereço definido pela variável:

```env
BASE_URL=http://localhost:3000
```

O projeto `banco-api` também possui uma implementação GraphQL, porém este repositório é direcionado aos testes da **API REST**.

---

## 📝 Licença

Este projeto utiliza a licença definida no `package.json`:

```text
ISC
```

---

## 👤 Autor

**JAntonioCoelho**

Projeto disponível no GitHub:

https://github.com/JAntonioCoelho/banco-api-tests

# Weather App - Backend

<<<<<<< HEAD
Este projeto é um backend básico para um aplicativo de clima, utilizando a API da OpenWeather para obter dados meteorológicos. Desenvolvido em **TypeScript** com **Node.js**, pronto para ser expandido para integração com uma interface front-end.

---

## Funcionalidades

- Consulta o clima atual de uma cidade via API da OpenWeather.
- Exibe informações como:
  - Temperatura
  - Condição climática (ensolarado, nublado, chuva etc.)
  - Umidade
  - Velocidade do vento
- Estrutura preparada para expansão:
  - Previsão horária
  - Previsão diária
  - Armazenamento em banco de dados (MongoDB)
  - Criação de cards de cidades

> ⚠️ No estado atual, **os dados não são salvos no banco de dados**, apenas exibidos no console.

---

## Tecnologias utilizadas

- Node.js
- TypeScript
- Axios (para requisições HTTP)
- dotenv (para variáveis de ambiente)
- OpenWeather API

---

## Pré-requisitos

- Node.js >= 18
- npm
- Conta na [OpenWeather](https://home.openweathermap.org/) para gerar uma chave de API

---

## Configuração

1. Clone o projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd weather_project

2. Instale as dependênci
=======
Este projeto é um backend básico de aplicativo de clima usando TypeScript, Node.js e a API da OpenWeather. Ele permite consultar o clima atual de uma cidade, exibindo temperatura, condição climática, umidade e velocidade do vento. É uma base para expandir funcionalidades como previsão horária, previsão diária, armazenamento em banco de dados e criação de cards de cidades.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/)
- Uma conta na [OpenWeather](https://home.openweathermap.org/) para gerar sua chave de API

Opcional, caso queira armazenar dados:  
- [MongoDB](https://www.mongodb.com/) (local ou Atlas)

## Passo a passo para rodar o projeto

1. **Clonar o repositório**

   Abra o terminal e rode:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd weather_project
2. **Instalar dependências**

Dentro da pasta do projeto, execute:

npm install

Isso instalará todas as bibliotecas necessárias (Axios, dotenv, etc).

3. **Configurar variáveis de ambiente**

Crie um arquivo .env na raiz do projeto e adicione:

PORT=3001
OPENWEATHER_KEY=SUA_CHAVE_DA_OPENWEATHER
MONGO_URI=SEU_URI_MONGODB

4. **Rodar o projeto**
Execute:

npx ts-node src/app.ts

5. **Se tudo estiver correto, você verá no console algo como:**

Clima em São Paulo:
Temperatura: 15.54°C
Condição: nublado
>>>>>>> 7a95f2fe32ca5d51770a16b8f8127ba2a8c688c4

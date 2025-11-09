# Weather App - Backend

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

# Weather App - Backend

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
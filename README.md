
# Dialogflow webhook server 

Servidor web, desenvolvido em Node.js e Express, que cria a conexão com o dialogflow e implementa o envio de e-mails através do módulo Nodemailer para o agente <a href="https://t.me/dorinhasead_bot">Dorinha</a>. O projeto corresponde a uma iniciativa da SEAD (UFPB) para a criação de um chatbot de suporte ao EaD.

## Menu #

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Dependências](#dependências)
- [Autores](#autores)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Tecnologias utilizadas #
- JavaScript
- [NodeJS](https://nodejs.org)
    - Packages
        - [ExpressJS](https://expressjs.com)
        - [NodeMailer](https://nodemailer.com/about/)
        - [Sendmail](https://www.npmjs.com/package/sendmail)
- DialogFlow
    - [dialogflow-fulfillment](https://www.npmjs.com/package/dialogflow-fulfillment)
- Heroku
- Visual Studio Code

## Instalação #
Após clonar o repositório, entre no diretório raíz da pasta (pelo terminal) e digite:

```bash
npm init
```

Esse comando irá baixar todos os módulos e pacotes que são dependências do projeto.

## Variáveis de ambiente # 
- PORT=NUMERO_DA_PORTA_DO_SERVIDOR

## Dependências #
- dialogflow-fulfillment
- actions-on-google
- express
- nodemailer
- sendmail
- postfix 
- body-parser

## Autores #

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/RubenFontes">
        <sub>
          <b>Ruben Fontes</b>
        </sub>
      </a>
    <td align="center">
      <a href="https://github.com/joanex01">
        <sub>
          <b>João Vitor</b>
        </sub>
      </a>
    <td align="center">
      <a href="https://paulohsms.com">
        <sub>
          <b>Paulo Henrique</b>
        </sub>
      </a>
    <td align="center">
      <a href="https://t.me/Samiss_rs">
        <sub>
          <b>Samisses Carvalho</b>
        </sub>
      </a>
  </tr>
</table>

## Contribuições #
Pull requests são bem-vindas. Para grandes mudanças, abra um issue primeiro para discutir o que você gostaria de mudar.

Certifique-se de atualizar os testes conforme apropriado.

## Licença #
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

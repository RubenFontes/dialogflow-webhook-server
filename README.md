
# Dialogflow webhook server 

Esse servidor web cria a conexão com o dialogflow e implementa o envio de e-mails através do módulo Nodemailer para o agente <a href="https://t.me/dorinhasead_bot">Dorinha</a>. O projeto corresponde a uma iniciativa da SEAD (UFPB) para a criação de um chatbot de suporte ao EaD.

## Menu #

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Dependências](#dependências)
- [Comandos](#comandos)
- [Autores](#autores)

## Tecnologias utilizadas #
- JavaScript
    - [NodeJS](https://nodejs.org)
    - [ExpressJS](https://expressjs.com)
    - Packages
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

## Comandos #

| Comando | Descrição |
| ------- | --------- |
| `/start` | Inicia o bot | 
| `/ajuda` | Mostra a lista de comandos disponíveis |
| `/criador` | Autores |
| `/backup` | Realizar backup de turmas|
| `/ticket` | Abrir chamado |
| `/senha` | Redefinição e recuperação de senha |
| `/notas` | Inserir notas no Moodle |
| `/questões` | Inserir banco de questões no Moodle |
| `/arquivos` | Inserir arquivos no Moodle |
| `/certificado` | Inserir certificados no Moodle |
| `/idade` | Lúdico |
| `/casar` | Lúdico |


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


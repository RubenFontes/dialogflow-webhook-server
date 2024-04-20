
# About

Este é um servidor HTTP em Node.js e Express que utiliza o módulo Nodemailer para enviar e-mails para o agente Dorinha. Parte de um projeto da SEAD (UFPB) para suporte ao Ensino a Distância (EaD), o servidor recebe solicitações do Dialogflow via webhook no endpoint '/dialogflow-fullfillment' e as encaminha para o envio de e-mails de suporte.

## Important links

- [Instalação](#install)
- [Variáveis de ambiente](#environment-variables)
- [Dependências](#dependencies)
- [Authors](#authors)
- [Contribuições](#contributions)
- [Licença](#license)

## Install #
Após clonar o repositório, entre na raíz do projeto (pelo terminal) e digite:

```bash
npm install
```

Esse comando irá baixar todos os módulos e pacotes que são dependências do projeto.

## Environment Variables # 
- PORT=NUMERO_DA_PORTA_DO_SERVIDOR

## Dependencies #
- dialogflow-fulfillment
- actions-on-google <opcional>
- express
- nodemailer
- sendmail
- postfix <opcional>
- ~body-parser~

## Authors #

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
      <a href="https://github.com/interfaceslivres">
        <sub>
          <b>Paulo Henrique</b>
        </sub>
      </a>
    <td align="center">
      <a href="https://github.com/Samis6">
        <sub>
          <b>Samisses Carvalho</b>
        </sub>
      </a>
  </tr>
</table>

## Contributions #
Pull requests são bem-vindas. Para grandes mudanças, abra um issue primeiro para discutir o que você gostaria de mudar.

Certifique-se de atualizar os testes conforme apropriado.

## License #
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

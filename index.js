const express = require('express');
const { WebhookClient } = require('dialogflow-fulfillment');
const nodemailer = require('nodemailer');
const { request } = require('express');

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.json("Estou funcionando!")
})

app.post('/dialogflow-fulfillment', (request, response) => {
    dialogflowFulfillment(request, response)
})

app.listen(port, () => {
    console.log(`Abrindo na porta: ${port}`)
})

if (intentName == 'EnviarEmail') {
    var nodemailer = require('nodemailer');
    var Email = request.body.queryResult.paremeters['Email'];
    var Mensagem = request.body.queryResult.paremeters['Mensagem'];
    var transporte = nodemailer.createTransport({
        service: 'Outlook', //servidor a ser usado
        auth: {
            user: process.env.user, // dizer qual o usuário
            pass: process.env.pass // senha da conta
        }
    });
    var email = {
        from: process.env.user, // Quem enviou este e-mail
        to: Email, // Quem receberá
        subject: "Assunto", // Um assunto
        html: Mensagem // O conteúdo do e-mail
    };
    transporte.sendMail(email, function (error, info) {
        if (error)
            console.log(error);
        throw error; // algo de errado aconteceu.
        console.log('Email enviado! Leia as informações adicionais: ' + info);
    });
}

const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({ request, response })

    function saudacao(agent) {
        agent.add("Olá, esta mensagem está vindo do server")
    }

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", saudacao)
    agent.handleRequest(intentMap)

}
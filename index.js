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

var intentName = request.body.queryResult.intent.displayName;
if (intentName == EnviarEmail) {
    var Email = request.body.queryResult.parameters['Email'];
    var Mensagem = request.body.queryResult.parameters['Mensagem'];
    var nodemailer = request('nodemailer');
    var transporte = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    })
    var email = {
        from: process.env.user,
        to: Email,
        subject: "Suporte de cliente",
        html: Mensagem
    };
    transporte.sendMail(email, function (error, info) {
        if (error)
            console.log(error);
        throw error;
        console.log('Email enviado! Leia as informações adicionais' + info);
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
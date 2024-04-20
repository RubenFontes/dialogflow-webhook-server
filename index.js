const express = require('express');
const {WebhookClient} = require('dialogflow-fulfillment');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post('/dialogflow-fulfillment', (request, response)=>{
    dialogflowFulfillment(request, response);
});

app.listen(port,() =>{
    console.log(`Listening on port ${port}`);
});

const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({request, response})
    function sendEmail(agent){
        var transporter = nodemailer.createTransport({
            service: 'Outlook', //servidor a ser usado
            auth: {
                user: "email@hotmail.com", // dizer qual o usuário
                pass: "Password123" // senha da conta
            }
        });

        var email = {
            from: request.body.queryResult.parameters['email'], // Quem enviou este e-mail
            to: "suport@mail.com", // Quem receberá
            subject: "Chamado livre #dorinha", // Um assunto
            html: request.body.queryResult.parameters['mensagem'] // O conteúdo do e-mail
        };

        transporter.sendMail(email, function(error, info){ 
            if(error){
                console.log(error);
                throw error; 
            } else {
                agent.add('Email enviado! Leia as informações adicionais: ' + info.response);
            }
        });
    };
    
    let intentMap = new Map();
    intentMap.set("mail-ticketPadrao", sendEmail)
    agent.handleRequest(intentMap)
};

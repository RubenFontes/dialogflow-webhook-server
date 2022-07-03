const express = require('express');
const {WebhookClient} = require('dialogflow-fulfillment');
const nodemailer = require('nodemailer');
const sendmail = require('sendmail');

const app = express();
const port = process.env.PORT || 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.post('/dialogflow-fullfillment', (request, response)=>{
    dialogflowFullfillment(request, response);
});

app.listen(port,() =>{
    console.log(`Listening on port ${port}`);
});

const dialogflowFullfillment = (request, response) => {
    const agent = new WebhookClient({request, response})
    function envio_email(agent){
        var transporter = nodemailer.createTransport({
            sendmail: true,
            newline: 'unix',
            path: '/usr/sbin/sendmail',
          /*service: 'Outlook', //servidor a ser usado
            auth: {
                user: "email@hotmail.com", // dizer qual o usuário
                pass: "Password123" // senha da conta
            }*/
        });

        var email = {
            from:request.body.queryResult.parameters['email'], // Quem enviou este e-mail
            to:"suport@mail.com", // Quem receberá
            subject: "Chamado livre #dorinha", // Um assunto
            html: request.body.queryResult.parameters['mensagem'] // O conteúdo do e-mail
        };
        transporter.sendMail(email,function(error, info){ 
                //console.log(info.envelope);
                //console.log(info.messageId);
                if(error){
                    console.log(error);
                    throw error; 
                }else{
                    agent.add('Email enviado! Leia as informações adicionais: ' + info);
                }
        });
    };
    
    let intentMap = new Map();
    intentMap.set("mail-ticketPadrao", envio_email)
    agent.handleRequest(intentMap)
};

const express = require('express')
const bodyParser = require('body-parser')
const { WebhookClient } = require('dialogflow-fulfillment');

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000

app.get("/test", (req, res) => {
    res.json("Estou funcionando!")
})

app.post('/dialogflow-fulfillment', (request, response) => {
    dialogflowFulfillment(request, response)
})

app.listen(port, () => {
    console.log(`Abrindo na porta: ${port}`)
})

const dialogflowFulfillment = (request, response) => {
    const agent = new WebhookClient({ request, response })

    function saudacao(agent) {
        agent.add("Olá, esta mensagem está vindo do server")
    }

    let intentMap = new Map();
    intentMap.set("Default Welcome Intent", saudacao)
    agent.handleRequest(intentMap)

}
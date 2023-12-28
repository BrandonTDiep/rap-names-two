const express = require('express')
const app = express()
const PORT = 8000

const rappers  = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    },
}
// dirname - wherever the file is located, that's where we start looking for our files. Start wherever the server.js is and find the index.html
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html') 
})
// : - colon signifies its a query parameter
app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }
    else{
        response.json(rappers['dylan'])
    }
    // response.json(rappers)
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})
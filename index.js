const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Home Page Get')
})

app.post('/', (request, response) => {
    response.send('Home Page Post')
})

app.get('/products/:productId-:productName', (request, response) => {
    response.send('Proudct name: ' + request.params.productName + ', Product ID: ' + request.params.productId)
})

app.get('/products/:productName', (request, response) => {
    response.send('Proudct name: ' + request.params.productName)
})

app.listen(3000);
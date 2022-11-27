const express = require('express');
const app = express();

// app.get('/', (request, response) => {
//     response.send('Home Page GET')
// })

// app.post('/', (request, response) => {
//     response.send('Home Page POST')
// })

// app.get('/products/:productId-:productName', (request, response) => {
//     response.send('Product Page, Product name: ' + request.params.productName + 'Product ID: ' + request.params.productId)
// })

// app.get('/products/:productName', (request, response) => {
//     response.send('Product Page, Product name: ' + request.params.productName)
// })

app.listen(3000);
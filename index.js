const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Base page');
});

app.get('/products/all', (request, response) => {
    let page = request.get('Page');
    let sort = request.get('Sort');
    let order = request.get('Order');
    response.send('GET Products: ' + page + ', ' + sort + ', ' + order);
});

app.get('/products/:productId-:productName', (request, response) => {
    response.send('GET Products: ' + request.params.productId + ', ' + request.params.productName);
});

app.get('/products/:productId', (request, response) => {
    response.send('GET Products: ' + request.params.productId);
});

app.listen(3000);
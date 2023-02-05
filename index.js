const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const productRouter = require('./routes/Products');

// ASSIGNMENT 1.2: ADVANCED ROUTING

// app.get('/', (request, response) => {
//     response.send('Base page');
// });

// app.get('/products/all', (request, response) => {
//     let page = request.get('Page');
//     let sort = request.get('Sort');
//     let order = request.get('Order');
//     response.send('GET Products: ' + page + ', ' + sort + ', ' + order);
// });

// app.get('/products/:productId-:productName', (request, response) => {
//     response.send('GET Products: ' + request.params.productId + ', ' + request.params.productName);
// });

// app.get('/products/:productId', (request, response) => {
//     response.send('GET Products: ' + request.params.productId);
// });

// ASSIGNMENT: RESTFUL

app.use(bodyParser.urlencoded({extended: false}))
app.use("/products", productRouter);

app.listen(3000);
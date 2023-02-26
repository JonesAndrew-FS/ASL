const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const productRouter = require('./routes/Products');
const variantRouter = require('./routes/Variants');
const imagesRouter = require('./routes/Images');
const storeRouter = require('./routes/Store');
const { home } = require('./controllers/Store')
app.set('views', __dirname + '/templates');
app.set('view engine', 'twig');

const fileUpload = require('express-fileupload')
app.use(fileUpload())

app.use(bodyParser.urlencoded({extended: false}))
app.use("/products", productRouter);
app.use("/variants", variantRouter);
app.use("/images", imagesRouter);
app.use("/store", storeRouter);

app.use("/public", express.static('public'));

app.get('/', home);

app.listen(3000);
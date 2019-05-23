const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./src/config');

const appRoutes = require('./src/routes/app');
const transactionRoutes = require('./src/routes/transaction');
const cardRoutes = require('./src/routes/card');
const storeRoutes = require('./src/routes/store');
const donorRoutes = require('./src/routes/donor');

const app = express();
app.use(cors());
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/donor', donorRoutes);
app.use('/store', storeRoutes);
app.use('/card', cardRoutes);
app.use('/transaction', transactionRoutes);
app.use('/', appRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

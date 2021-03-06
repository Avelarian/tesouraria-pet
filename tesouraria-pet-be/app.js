const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://xpto:' + process.env.MONGO_ATLAS_PW + '@db-pet-xahox.mongodb.net/test?retryWrites=true&w=majority');

mongoose.Promise = global.Promise;

const userHistoricalRouter = require('./api/routes/userHistorical');
const eventHistoricalRouter = require('./api/routes/eventHistorical');
const userRouter = require('./api/routes/user');
const eventRouter = require('./api/routes/event');
const cashierRouter = require('./api/routes/cashier');
const safeRouter = require('./api/routes/safe');
const bankAccountRouter = require('./api/routes/bankAccount');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/userHistorical', userHistoricalRouter);
app.use('/eventHistorical', eventHistoricalRouter);
app.use('/user', userRouter);
app.use('/event', eventRouter);
app.use('/cashier', cashierRouter);
app.use('/safe', safeRouter);
app.use('/bankAccount', bankAccountRouter);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
   res.status(error.status || 500);
   res.json({
       error: {
           message: error.message
       }
   });
});

module.exports = app;

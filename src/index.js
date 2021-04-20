const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const app = new Koa();
const routing = require('./routes');
const { connectionStr } = require('./config');

mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('MongoDB connection success!'));
mongoose.connection.on('error', console.error);

app.use(error());
app.use(bodyparser());
app.use(parameter(app));
routing(app);

app.listen(8080, () => console.log('server starts ...'));
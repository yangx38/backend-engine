const Koa = require('koa');
const KoaBody = require('koa-body');
const KoaStatic = require('koa-static');
const cors = require('@koa/cors');
const error = require('koa-json-error');
const parameter = require('koa-parameter');
const mongoose = require('mongoose');
const path = require('path');
const app = new Koa();
const routing = require('./routes');
const { connectionStr } = require('./config');

mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => console.log('MongoDB connection success!'));
mongoose.connection.on('error', console.error);

app.use(KoaStatic(path.join(__dirname, 'public')))
app.use(cors());
app.use(error());
app.use(KoaBody({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname, 'public/uploads'),
        keepExtensions: true,
    },
}));
app.use(parameter(app));
routing(app);

app.listen(8080, () => console.log('server starts ...'));
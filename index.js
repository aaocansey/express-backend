const express = require('express');
const app = express();
const routes = require('./routes/routes.js')

app.use('/', routes)


app.listen(5000, ()=> {console.log('server started')});
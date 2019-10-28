const express = require('express');

const app = express();
require('./database/index')
const routes = require('./router');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);


app.listen(3333);
const express = require('express');
const routes = express();

const test= require('./controladores/index')

routes.get('/',test)

module.exports = routes
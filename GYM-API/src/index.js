require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routes = require("./rotas/rotas");

const port = process.env.PORT || process.env.PORT_LOCAL

const app = express();
app.use(express.json())
app.use(cors({origin:'*'}));

app.use(routes);

app.listen(port);

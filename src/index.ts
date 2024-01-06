import dotenv from  "dotenv";
dotenv.config()

import  express from "express";
import  cors from "cors";

import  routes from "./rotas/rotas";

const port = process.env.PORT || process.env.PORT_LOCAL

const app = express();
app.use(express.json())
app.use(cors({origin:'*'}));

app.use(routes);

app.listen(port,()=> console.log(`Server On : PORT: ${port}`));
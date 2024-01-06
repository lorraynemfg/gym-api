"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// fazer os controllers
const calculo = (0, express_1.Router)();
calculo.get("/gym/calculo", (req, res) => { }); //  Implementar controller
exports.default = calculo;
